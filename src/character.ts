import { Axis, CanvasCtx, CharacterOptions } from "./types";

export class Character {
  private ctx: CanvasCtx | null = null;
  private _axis: Axis = {
    x: 0,
    y: 0,
  };
  private content: string;
  private fontSizes = [20, 25];
  private speeds = [8, 10];
  private fontSize = 25;
  private speed = 8;

  constructor(options: CharacterOptions) {
    this.content = options.content;
    this.fontSize =
      this.fontSizes[Math.floor(Math.random() * this.fontSizes.length)];
    this.speed = this.speeds[Math.floor(Math.random() * this.speeds.length)];
  }

  draw() {
    if (!this.ctx) return;

    this.ctx.fillStyle = "#6ce7c2";
    this.ctx.font = `${this.fontSize}px Arial`;
    this.ctx.fillText(this.content, this.axis.x, this.axis.y);
    this.ctx.fill();
  }

  update() {
    this.axis.y += this.speed;
  }

  updateCtx(ctx: CanvasCtx) {
    this.ctx = ctx;
  }

  changeContent(content: string) {
    this.content = content;
  }

  get axis(): Axis {
    return this._axis;
  }
}
