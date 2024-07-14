export type Canvas = HTMLCanvasElement;

export type CanvasCtx = CanvasRenderingContext2D;

export type Axis = {
  x: number;
  y: number;
};

export type Size = {
  w: number;
  h: number;
};

export type CharacterOptions = {
  content: string;
};

export type EffectsManagerOptions = {
  ctx: CanvasCtx;
};
