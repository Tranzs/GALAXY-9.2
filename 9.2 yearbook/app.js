const teacherStar = {
  name: "Mrs.Linh",
  x: 50,
  y: 50,
  size: 82,
  color: "#ffd166",
  trait: "The Captain Sun",
  message:
    "Cô chúc cả lớp 9.2 bước vào mùa thi thật bình tĩnh, tự tin và rực rỡ. Hãy nhớ rằng mỗi bạn đều đã đi một hành trình rất riêng, đã cố gắng, đã trưởng thành, và xứng đáng tự hào về mình. Khi làm bài, hãy đọc kỹ, giữ nhịp thở đều, làm chắc từng câu và đừng bỏ cuộc trước những câu khó. Dù phía trước là ngôi trường nào, cô tin các bạn sẽ tiếp tục tỏa sáng theo cách của mình.",
  future: "Mission: Shine beyond Grade 9.2",
};

const students = [
  { name: "Khánh Linh", x: 16, y: 22, size: 28, color: "#7df9ff", shape: "nova", trait: "The Joyous Spirit", message: "Keep your bright energy with you in the exam room. Read carefully, breathe steadily, and let your practice speak.", future: "Target: Your dream high school" },
  { name: "Minh Khoa", x: 30, y: 14, size: 24, color: "#ff61d8", shape: "crystal", trait: "The Vocabulary Explorer", message: "You have learned how to keep moving even when a question looks unfamiliar. Trust that patience.", future: "Target: High School No.1" },
  { name: "Ngọc Huy", x: 50, y: 12, size: 26, color: "#ffd166", shape: "ring", trait: "The Grammar Master", message: "Your careful thinking is your strongest engine. Slow down at the traps and choose with confidence.", future: "Target: Specialized English Class" },
  { name: "Đức Trung", x: 70, y: 14, size: 31, color: "#6ee7ff", shape: "flare", trait: "The Focus Pilot", message: "You know how to reset and try again. In the final minutes, check the simple things first.", future: "Target: Science Track" },
  { name: "Minh Thư", x: 84, y: 22, size: 23, color: "#ffd166", shape: "diamond", trait: "The Sentence Crafter", message: "Your answers can be calm, clean, and clear. Let each sentence land exactly where it should.", future: "Target: Humanities Track" },
  { name: "Vân Khánh", x: 8, y: 43, size: 29, color: "#8fb7ff", shape: "halo", trait: "The Listening Signal", message: "You notice details others miss. Carry that attention into every reading and listening clue.", future: "Target: Confident New Beginning" },
  { name: "Hà My", x: 31, y: 36, size: 22, color: "#f7d774", shape: "comet", trait: "The Calm Solver", message: "Your quiet progress matters. One question at a time is enough to cross a whole galaxy.", future: "Target: Favorite High School" },
  { name: "Phương Nhi", x: 69, y: 36, size: 27, color: "#afc8ff", shape: "binary", trait: "The Phrasal Verbs Expert", message: "Keep your smile, but bring your sharpest focus. You are ready for more than you think.", future: "Target: English Confidence Level Up" },
  { name: "Minh Trí", x: 92, y: 43, size: 32, color: "#ff8c5a", shape: "ember", trait: "The Strategy Captain", message: "Use your logic first, then your memory. A smart order can turn a hard test into a fair one.", future: "Target: Technology Track" },
  { name: "Gia Minh", x: 7, y: 63, size: 25, color: "#70d6ff", shape: "pinwheel", trait: "The Quick Reactor", message: "Fast is good, accurate is better. Give yourself the extra second that wins the point.", future: "Target: Strong Academic Launch" },
  { name: "Nguyễn Diệp", x: 31, y: 62, size: 33, color: "#ff8c5a", shape: "planet", trait: "The Warm Star", message: "Your kindness and effort both leave a mark. Take them proudly into the next chapter.", future: "Target: A school that fits your dreams" },
  { name: "Bùi Diệp", x: 42, y: 75, size: 22, color: "#fff07a", shape: "spark", trait: "The Detail Scanner", message: "You can catch the hidden clue. Underline keywords and let the answer reveal itself.", future: "Target: High School Adventure" },
  { name: "Phú Trọng", x: 58, y: 75, size: 29, color: "#a7f3d0", shape: "shield", trait: "The Steady Engine", message: "Steady work always adds up. Your best result begins with one calm first page.", future: "Target: Strong Future Coordinates" },
  { name: "Đăng Khoa", x: 69, y: 62, size: 27, color: "#9bd5ff", shape: "saturn", trait: "The Bold Speaker", message: "Bring your courage into the exam. Even difficult questions become smaller when you face them directly.", future: "Target: New Stage, Bigger Voice" },
  { name: "Chí Hiếu", x: 93, y: 63, size: 24, color: "#ffd166", shape: "arrow", trait: "The Comeback Comet", message: "When something is hard, you do not have to stop. Skip, return, and win the points you can.", future: "Target: Exam Breakthrough" },
  { name: "Bảo Châu", x: 18, y: 84, size: 26, color: "#8fb7ff", shape: "moon", trait: "The Gentle Light", message: "You have your own rhythm. Follow it, protect it, and finish the journey with pride.", future: "Target: Bright High School Years" },
  { name: "Bình Minh", x: 50, y: 88, size: 30, color: "#ffe082", shape: "sunrise", trait: "The Sunrise Signal", message: "A new morning is waiting after this exam season. Do your part today and meet it with a smile.", future: "Target: Fresh Start Coordinates" },
  { name: "Future Star", x: 82, y: 84, size: 34, color: "#fff2a8", shape: "portal", trait: "The Next Discovery", message: "This space is ready for one more name, one more story, and one more shining destination.", future: "Target: To be updated" },
];

const resources = [
  { label: "Grammar Formula", href: "./docs/grammar-formula.txt", note: "Quick rescue sheet for core grammar patterns." },
  { label: "Scoring Vocabulary", href: "./docs/scoring-vocabulary.txt", note: "High-score words and phrases to review before the exam." },
  { label: "Exam Checklist", href: "./docs/exam-checklist.txt", note: "Last-minute checklist for the English test." },
];

const unlockedStars = new Set(students.map((_, index) => index));
let selectedStudent = null;

const starMap = document.querySelector("#starMap");
const targetName = document.querySelector("#targetName");
const targetHint = document.querySelector("#targetHint");
const unlockedCount = document.querySelector("#unlockedCount");
const fogLayer = document.querySelector("#fogLayer");
const warpFlash = document.querySelector("#warpFlash");
const scanBeam = document.querySelector("#scanBeam");
const blackHoleOverlay = document.querySelector("#blackHoleOverlay");
const studentModal = document.querySelector("#studentModal");
const utilityModal = document.querySelector("#utilityModal");
const mediaViewer = document.querySelector("#mediaViewer");
const mediaStage = document.querySelector("#mediaStage");
const wishStorageKey = "galaxy92-stardust-wishes";

async function apiGetWishes() {
  const response = await fetch("./api/wishes", { cache: "no-store" });
  if (!response.ok) throw new Error("Failed to load wishes");
  const data = await response.json();
  return Array.isArray(data.wishes) ? data.wishes : [];
}

async function apiPostWish(wish) {
  const response = await fetch("./api/wishes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(wish),
  });
  if (!response.ok) throw new Error("Failed to save wish");
  const data = await response.json();
  return Array.isArray(data.wishes) ? data.wishes : [];
}

async function apiGetAlbum() {
  const response = await fetch("./api/album", { cache: "no-store" });
  if (!response.ok) throw new Error("Failed to load album");
  const data = await response.json();
  return Array.isArray(data.files) ? data.files : [];
}

function renderStars() {
  starMap.innerHTML = "";
  renderTeacherStar();

  students.forEach((student, index) => {
    const button = document.createElement("button");
    button.className = `star-node unlocked star-${student.shape} variant-${index % 6}`;
    button.type = "button";
    button.dataset.index = index;
    button.style.left = `${student.x}%`;
    button.style.top = `${student.y}%`;
    button.style.setProperty("--size", `${student.size}px`);
    button.style.setProperty("--color", student.color);
    button.style.setProperty("--depth", `${(student.y - 50) * -1.2}px`);
    button.style.setProperty("--twinkle", `${2.2 + (index % 5) * 0.35}s`);
    button.style.setProperty("--z", `${10 + index}`);
    button.innerHTML = `
      <span class="star-core"></span>
      <span class="star-name">${student.name}</span>
      <span class="star-trait">${student.trait}</span>
    `;

    button.addEventListener("mouseenter", () => setTarget(student));
    button.addEventListener("focus", () => setTarget(student));
    button.addEventListener("mouseleave", resetTarget);
    button.addEventListener("blur", resetTarget);
    button.addEventListener("click", () => openStudent(index));
    starMap.append(button);
  });

  updateProgress();
}

function renderTeacherStar() {
  const button = document.createElement("button");
  button.className = "star-node unlocked teacher-star";
  button.type = "button";
  button.style.left = `${teacherStar.x}%`;
  button.style.top = `${teacherStar.y}%`;
  button.style.setProperty("--size", `${teacherStar.size}px`);
  button.style.setProperty("--color", teacherStar.color);
  button.style.setProperty("--depth", "60px");
  button.style.setProperty("--z", "4");
  button.innerHTML = `
    <span class="star-core"></span>
    <span class="star-name">${teacherStar.name}</span>
    <span class="star-trait">${teacherStar.trait}</span>
  `;
  button.addEventListener("mouseenter", () => setTarget(teacherStar));
  button.addEventListener("focus", () => setTarget(teacherStar));
  button.addEventListener("mouseleave", resetTarget);
  button.addEventListener("blur", resetTarget);
  button.addEventListener("click", openTeacherMessage);
  starMap.append(button);
}

function setTarget(star) {
  targetName.textContent = star.name.toUpperCase();
  targetHint.textContent = star.trait;
}

function resetTarget() {
  targetName.textContent = "18 STAR DESTINATIONS";
  targetHint.textContent = "Hover a star to lock destination";
}

function openStudent(index) {
  selectedStudent = index;
  const student = students[index];
  triggerWarp();
  window.setTimeout(() => showProfile(`The ${student.name} Constellation`, student), 420);
}

function openTeacherMessage() {
  selectedStudent = null;
  triggerWarp();
  window.setTimeout(() => showProfile("The Mrs.Linh Solar Beacon", teacherStar), 420);
}

function showProfile(title, profile) {
  document.querySelector("#studentTitle").textContent = title;
  document.querySelector("#studentTrait").textContent = profile.trait;
  document.querySelector("#studentMessage").textContent = profile.message;
  document.querySelector("#studentFuture").textContent = profile.future;
  studentModal.showModal();
}

function closeStudentModal() {
  studentModal.close();
  scanBeam.classList.remove("active");
  void scanBeam.offsetWidth;
  scanBeam.classList.add("active");
  selectedStudent = null;
}

function updateProgress() {
  unlockedCount.textContent = unlockedStars.size;
  fogLayer.style.setProperty("--fog-x", "50%");
  fogLayer.style.setProperty("--fog-y", "50%");
  fogLayer.classList.add("complete");
}

function triggerWarp() {
  warpFlash.classList.remove("active");
  void warpFlash.offsetWidth;
  warpFlash.classList.add("active");
}

function openUtility(panel) {
  const title = document.querySelector("#utilityTitle");
  const body = document.querySelector("#utilityBody");
  document.querySelector("#utilityKicker").textContent = "SHIP MODULE";
  blackHoleOverlay.classList.toggle("active", panel === "blackHole");
  document.documentElement.classList.toggle("blackhole-mode", panel === "blackHole");
  if (panel !== "blackHole") {
    const frame = document.querySelector("#blackHoleVideo iframe");
    if (frame) frame.src = frame.src;
  }

  if (panel === "blackHole") {
    title.textContent = "Black Hole Memory Vault";
    body.innerHTML = `
      <div class="utility-list">
        <p>Add files into the <strong>album</strong> folder. When running with <code>server.js</code>, the gallery will auto-load.</p>
        <div class="memory-grid" id="albumGrid">
          <div class="memory-slot">Loading album...</div>
        </div>
      </div>
    `;
    const grid = body.querySelector("#albumGrid");
    grid.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-media-src]");
      if (!button) return;
      openMediaViewer(button.dataset.mediaSrc, button.dataset.mediaType);
    });
    apiGetAlbum()
      .then((files) => {
        if (!files.length) {
          grid.innerHTML = `<div class="memory-slot">No media found in album/</div>`;
          return;
        }
        grid.innerHTML = files
          .map((file) => renderAlbumItem(`./album/${encodeURIComponent(file)}`))
          .join("");
      })
      .catch(() => {
        grid.innerHTML = `<div class="memory-slot">Album auto-load requires <code>node server.js</code></div>`;
      });
  }

  if (panel === "stardust") {
    title.textContent = "Stardust Farewell Log";
    body.innerHTML = `
      <form class="stardust-form" id="stardustForm">
        <input id="wishName" maxlength="32" placeholder="Your name" required />
        <textarea id="wishMessage" maxlength="240" placeholder="Write a farewell wish..." required></textarea>
        <button type="submit">Launch Message</button>
      </form>
      <div class="wish-list" id="wishList"></div>
    `;
    wireWishForm();
  }

  if (panel === "cosmicEnergy") {
    title.textContent = "Cosmic Energy Study Kit";
    body.innerHTML = `
      <div class="utility-list">
        ${resources
          .map(
            (resource) => `
              <section class="utility-card">
                <h3>${resource.label}</h3>
                <p>${resource.note}</p>
                <a class="download-link" href="${resource.href}" download>Download</a>
              </section>
            `,
          )
          .join("")}
      </div>
    `;
  }

  utilityModal.showModal();
}

function wireWishForm() {
  const form = document.querySelector("#stardustForm");
  const list = document.querySelector("#wishList");

  const renderWishes = (wishes) => {
    list.innerHTML = wishes
      .map((wish) => `<div class="wish-item"><strong>${escapeHtml(wish.name)}:</strong> ${escapeHtml(wish.message)}</div>`)
      .join("");
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const payload = {
      name: document.querySelector("#wishName").value.trim(),
      message: document.querySelector("#wishMessage").value.trim(),
    };

    // Prefer server-side file storage when available; fallback to localStorage for static hosting.
    apiPostWish(payload)
      .then((wishes) => {
        form.reset();
        renderWishes(wishes);
      })
      .catch(() => {
        const wishes = JSON.parse(localStorage.getItem(wishStorageKey) || "[]");
        wishes.unshift(payload);
        localStorage.setItem(wishStorageKey, JSON.stringify(wishes.slice(0, 30)));
        form.reset();
        renderWishes(wishes);
      });
  });

  apiGetWishes()
    .then(renderWishes)
    .catch(() => {
      const wishes = JSON.parse(localStorage.getItem(wishStorageKey) || "[]");
      renderWishes(wishes);
    });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

function createStarfield() {
  const canvas = document.querySelector("#starfield");
  const context = canvas.getContext("2d");
  const stars = [];
  let width = 0;
  let height = 0;
  let animationFrame;

  const resize = () => {
    width = canvas.width = window.innerWidth * window.devicePixelRatio;
    height = canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    stars.length = 0;
    const total = Math.min(420, Math.floor((window.innerWidth * window.innerHeight) / 2100));
    for (let index = 0; index < total; index += 1) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2,
        radius: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.7 + 0.25,
        speed: Math.random() * 0.24 + 0.05,
      });
    }
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);
    stars.forEach((star) => {
      star.y += star.speed * star.z * window.devicePixelRatio;
      star.x += Math.sin(star.y * 0.002) * 0.05 * window.devicePixelRatio;
      if (star.y > height) star.y = 0;
      context.beginPath();
      context.fillStyle = `rgba(210, 250, 255, ${star.alpha})`;
      context.shadowColor = "#7df9ff";
      context.shadowBlur = 10 * star.z;
      context.arc(star.x, star.y, star.radius * window.devicePixelRatio * star.z, 0, Math.PI * 2);
      context.fill();
    });
    animationFrame = requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize);
  window.addEventListener("beforeunload", () => cancelAnimationFrame(animationFrame));
}

function renderAlbumItem(src) {
  const lower = src.toLowerCase();
  const isVideo = lower.endsWith(".mp4") || lower.endsWith(".webm");
  if (isVideo) {
    return `
      <figure class="memory-item">
        <button type="button" data-media-src="${src}" data-media-type="video">
          <video src="${src}" muted playsinline preload="metadata"></video>
        </button>
        <figcaption>${escapeHtml(decodeURIComponent(src.split("/").pop() || ""))}</figcaption>
      </figure>
    `;
  }
  return `
    <figure class="memory-item">
      <button type="button" data-media-src="${src}" data-media-type="image">
        <img src="${src}" loading="lazy" alt="" />
      </button>
      <figcaption>${escapeHtml(decodeURIComponent(src.split("/").pop() || ""))}</figcaption>
    </figure>
  `;
}

function openMediaViewer(src, type) {
  mediaStage.innerHTML = "";
  const safeSrc = String(src || "");
  if (!safeSrc) return;

  if (type === "video") {
    const video = document.createElement("video");
    video.src = safeSrc;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    mediaStage.append(video);
  } else {
    const img = document.createElement("img");
    img.src = safeSrc;
    img.alt = "";
    img.loading = "eager";
    mediaStage.append(img);
  }

  mediaViewer.showModal();
}

document.querySelector("#closeStudent").addEventListener("click", closeStudentModal);
studentModal.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeStudentModal();
});

document.querySelector("#closeUtility").addEventListener("click", () => utilityModal.close());
utilityModal.addEventListener("close", () => {
  blackHoleOverlay.classList.remove("active");
  document.documentElement.classList.remove("blackhole-mode");
  const frame = document.querySelector("#blackHoleVideo iframe");
  if (frame) frame.src = frame.src;
});

document.querySelector("#closeMedia").addEventListener("click", () => mediaViewer.close());
mediaViewer.addEventListener("click", (event) => {
  if (event.target === mediaViewer) mediaViewer.close();
});
mediaViewer.addEventListener("close", () => {
  mediaStage.innerHTML = "";
});

document.querySelectorAll("[data-panel]").forEach((button) => {
  button.addEventListener("click", () => openUtility(button.dataset.panel));
});

renderStars();
createStarfield();
