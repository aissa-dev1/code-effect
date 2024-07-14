import { CanvasCtx, EffectsManagerOptions } from "./types";
import { Character } from "./character/character";
import { DownCharacter } from "./character/down-character";
import { UpCharacter } from "./character/up-character";

export class EffectsManager {
  private ctx: CanvasCtx;
  private downCharacters: Character[] = [];
  private upCharacters: Character[] = [];
  private effectLetters = ".";
  private effectCreateDuration = 25;
  private id = 0;

  constructor(options: EffectsManagerOptions) {
    this.ctx = options.ctx;
    setInterval(() => {
      this.createDownCharacter();
      this.createUpCharacter();
    }, this.effectCreateDuration);
  }

  start() {
    this.animate();
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawCharacters();
  }

  private update() {
    this.updateCharacters();
  }

  private animate() {
    this.draw();
    this.update();
    this.id = requestAnimationFrame(() => this.animate());
  }

  private drawCharacters() {
    this.downCharacters.forEach((character) => {
      character.draw();
    });
    this.upCharacters.forEach((character) => {
      character.draw();
    });
  }

  private updateCharacters() {
    this.downCharacters.forEach((character, i) => {
      if (character.axis.y >= this.ctx.canvas.height) {
        this.downCharacters.splice(i, 1);
        return;
      }
      character.update();
    });
    this.upCharacters.forEach((character, i) => {
      if (character.axis.y <= 0) {
        this.upCharacters.splice(i, 1);
        return;
      }
      character.update();
    });
  }

  private createDownCharacter() {
    const randomLetter = this.generateCharacter();
    const character: Character = new DownCharacter({
      content: randomLetter,
    });
    character.updateCtx(this.ctx);
    character.axis.x = this.generateDownCharXAxis();
    character.axis.y = 0;
    this.downCharacters.push(character);
  }

  private createUpCharacter() {
    const randomLetter = this.generateCharacter();
    const character: Character = new UpCharacter({
      content: randomLetter,
    });
    character.updateCtx(this.ctx);
    character.axis.x = this.generateUpCharXAxis();
    character.axis.y = this.ctx.canvas.height;
    this.upCharacters.push(character);
  }

  private generateCharacter(): string {
    const randomLetter =
      this.effectLetters[Math.floor(Math.random() * this.effectLetters.length)];
    return randomLetter;
  }

  private generateDownCharXAxis(): number {
    const xAxisList = [25, 146.4, 267.8, 389.2];
    return xAxisList[Math.floor(Math.random() * xAxisList.length)];
  }

  private generateUpCharXAxis(): number {
    const xAxisList = [85.7, 207.1, 328.5, 450];
    return xAxisList[Math.floor(Math.random() * xAxisList.length)];
  }
}
