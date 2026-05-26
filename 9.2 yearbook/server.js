const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5173;
const ROOT = __dirname;
const WISHES_PATH = path.join(ROOT, "wishes.json");
const ALBUM_DIR = path.join(ROOT, "album");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString("utf8");
      if (body.length > 1_000_000) {
        reject(new Error("Body too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function loadWishes() {
  try {
    const raw = fs.readFileSync(WISHES_PATH, "utf8");
    const parsed = safeJsonParse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveWishes(wishes) {
  fs.writeFileSync(WISHES_PATH, JSON.stringify(wishes, null, 2), "utf8");
}

function sendJson(res, status, payload) {
  const data = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(data),
    "Cache-Control": "no-store",
  });
  res.end(data);
}

function sendText(res, status, text) {
  res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" });
  res.end(text);
}

function listAlbumFiles() {
  const allowed = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".mp4", ".webm"]);
  try {
    const items = fs.readdirSync(ALBUM_DIR, { withFileTypes: true });
    return items
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => allowed.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, "en"));
  } catch {
    return [];
  }
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";

  const filePath = path.join(ROOT, pathname);
  if (!filePath.startsWith(ROOT)) return sendText(res, 400, "Bad request");

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) return sendText(res, 404, "Not found");
    const ext = path.extname(filePath).toLowerCase();
    const type = MIME[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store" });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/api/wishes" && req.method === "GET") {
    return sendJson(res, 200, { wishes: loadWishes() });
  }

  if (url.pathname === "/api/wishes" && req.method === "POST") {
    try {
      const body = await readBody(req);
      const parsed = safeJsonParse(body);
      if (!parsed || typeof parsed !== "object") return sendJson(res, 400, { error: "Invalid JSON" });

      const name = String(parsed.name || "").trim().slice(0, 32);
      const message = String(parsed.message || "").trim().slice(0, 240);
      if (!name || !message) return sendJson(res, 400, { error: "Missing name or message" });

      const wishes = loadWishes();
      wishes.unshift({ name, message, ts: Date.now() });
      saveWishes(wishes.slice(0, 200));
      return sendJson(res, 200, { ok: true, wishes });
    } catch {
      return sendJson(res, 500, { error: "Server error" });
    }
  }

  if (url.pathname === "/api/album" && req.method === "GET") {
    return sendJson(res, 200, { files: listAlbumFiles() });
  }

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    });
    return res.end();
  }

  return serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Galaxy 9.2 server running at http://localhost:${PORT}`);
});
