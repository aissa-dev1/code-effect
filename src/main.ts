import { EffectManager } from "./effect-manager";
import { Canvas, CanvasCtx } from "./types";

const c = document.querySelector(".game-canvas") as Canvas;
const ctx = c.getContext("2d") as CanvasCtx;

const effectManager = new EffectManager({
  ctx,
});

document.addEventListener("DOMContentLoaded", () => {
  effectManager.start();
});
