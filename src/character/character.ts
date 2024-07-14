import { Axis, CanvasCtx, CharacterOptions } from "../types";

export abstract class Character {
  protected ctx: CanvasCtx | null = null;
  protected _axis: Axis = {
    x: 0,
    y: 0,
  };
  protected content: string;
  protected fontSize = 26;
  protected speed = 5;

  constructor(options: CharacterOptions) {
    this.content = options.content;
  }

  draw() {
    if (!this.ctx) return;

    this.ctx.fillStyle = "#6ce7c2";
    this.ctx.font = `${this.fontSize}px Arial`;
    this.ctx.fillText(this.content, this.axis.x, this.axis.y);
    this.ctx.fill();
  }

  update() {}

  updateCtx(ctx: CanvasCtx) {
    this.ctx = ctx;
  }

  get axis(): Axis {
    return this._axis;
  }
}
