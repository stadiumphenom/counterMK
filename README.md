# counterMK — OBEY OS Prototype (React + Vite)

Dark, minimal, click-to-choose narrative engine for the Counter‑MK universe.
First missions are implemented (Donut Run / The Whistle) with stubs for Mission 2.

## 🚀 Run locally

```bash
npm install
npm run dev
# open http://localhost:5173
```

## 🧩 Edit the story

All passages live in **src/story.js** as a simple object map. Each node has:
```js
{
  text: "Your narrative text",
  choices: [{ text: "Label", next: "nodeId" }]
}
```
Add new nodes and point `next` to them. The UI will render choices automatically.

## 🌓 Theme

Dark terminal vibe with subtle neon accents. Edit **src/index.css** to restyle.

## 📦 Build

```bash
npm run build
```
Deploy the `dist/` folder to GitHub Pages / Netlify / Vercel.

---

© 2025 counterMK — “Different name, same code.”
