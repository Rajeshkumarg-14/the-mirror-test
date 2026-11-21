// Loading orbs, drawn with the framework-free engine of `thinking-orbs` (MIT, by Jakub Antalik).
// Same calls the library's own React component makes: resolvePreset -> MODE_FRAMES[mode] -> paintFrame.
// Pinned to an exact version. If the CDN is unreachable, mountOrb rejects and callers carry on without it.
const ENGINE = "https://cdn.jsdelivr.net/npm/thinking-orbs@0.3.2/dist/engine.es.js";
let engine;
const load = () => (engine ||= import(ENGINE));

const tintOf = hex => {
  const m = /^#([0-9a-f]{6})$/i.exec(hex || "");
  if (!m) return undefined;
  const n = parseInt(m[1], 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
};

/**
 * Draw an orb into `canvas` and return a stop() function.
 * state: one of the library's nine states; display: CSS px (the 64px design, scaled up crisply).
 */
export async function mountOrb(canvas, { state = "breathing", color, display = 112, speed = 1 } = {}) {
  const { MODE_FRAMES, resolvePreset, paintFrame } = await load();
  const size = 64, k = display / size, dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = canvas.height = Math.round(display * dpr);
  canvas.style.width = canvas.style.height = display + "px";
  const ctx = canvas.getContext("2d");
  const { mode, speed: base, opts } = resolvePreset(state, size);
  const frame = MODE_FRAMES[mode], tint = tintOf(color), rate = base * speed;
  const draw = t => {
    ctx.setTransform(dpr * k, 0, 0, dpr * k, 0, 0);
    ctx.clearRect(0, 0, size, size);
    paintFrame(ctx, frame(size, t, opts), true, tint);
  };
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { draw(0.6); return () => {}; }
  let raf = 0, on = true;
  const loop = () => { if (!on) return; draw(performance.now() / 1000 * rate); raf = requestAnimationFrame(loop); };
  loop();
  return () => { on = false; cancelAnimationFrame(raf); };
}
