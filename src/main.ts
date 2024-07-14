import { EffectsManager } from "./effects-manager";
import { Canvas, CanvasCtx } from "./types";

const c = document.querySelector(".game-canvas") as Canvas;
const ctx = c.getContext("2d") as CanvasCtx;

const effectsManager = new EffectsManager({
  ctx,
});

document.addEventListener("DOMContentLoaded", () => {
  effectsManager.start();
});
