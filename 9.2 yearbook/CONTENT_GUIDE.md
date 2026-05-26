# Galaxy 9.2 Content Guide

## Student profiles
Edit `students` in `app.js`.

Each student has:
- `name`: display name on the star map.
- `trait`: short English trait shown on hover and in the modal.
- `message`: captain message.
- `future`: future coordinate / high-school target.
- `x`, `y`: star position in percent.
- `color`, `size`, `shape`: star visual style.

All 18 student stars are currently unlocked from the start.

Available `shape` values: `nova`, `crystal`, `ring`, `flare`, `diamond`, `halo`, `comet`, `binary`, `ember`, `pinwheel`, `planet`, `spark`, `shield`, `saturn`, `arrow`, `moon`, `sunrise`, `portal`.

## Mrs.Linh sun
Edit `teacherStar` in `app.js` to change the central Mrs.Linh sun message.

## Album
Put photos and videos in `album/`.

Then edit the Black Hole section in `openUtility()` inside `app.js` to replace the sample slots with real links or thumbnails.

## Study documents
Put files in `docs/`, then edit the `resources` array in `app.js`.

Example:

```js
{ label: "Grammar PDF", href: "./docs/grammar.pdf", note: "Final grammar rescue sheet." }
```

## Visual reference
The current reference image is stored at `img/9.2 mainmanu.png`.
