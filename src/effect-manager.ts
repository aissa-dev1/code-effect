import { CanvasCtx, EffectManagerOptions } from "./types";
import { Character } from "./character";

export class EffectManager {
  private ctx: CanvasCtx;
  private characters = new Array<Character>();
  private effectLetters = "10";
  private effectCreateDuration = 5;

  constructor(options: EffectManagerOptions) {
    this.ctx = options.ctx;
  }

  start() {
    setInterval(() => {
      this.createCharacter();
    }, this.effectCreateDuration);
    this.animate();
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawCharacters();
  }

  private update() {
    this.updateRunOutCharacters();
    this.updateCharacters();
  }

  private animate() {
    this.draw();
    this.update();
    requestAnimationFrame(() => this.animate());
  }

  private drawCharacters() {
    for (const character of this.characters) {
      character.draw();
    }
  }

  private updateCharacters() {
    for (const character of this.characters) {
      character.update();
    }
  }

  private updateRunOutCharacters() {
    for (let i = 0; i < this.characters.length; i++) {
      if (this.characters[i].axis.y >= this.ctx.canvas.height) {
        this.characters.splice(i, 1);
      }
    }
  }

  private createCharacter() {
    const character = new Character({
      content: this.generateCharacter(),
    });
    character.updateCtx(this.ctx);
    character.axis.x = this.generateDownCharXAxis();
    character.axis.y = 0;
    setInterval(() => {
      character.changeContent(this.generateCharacter());
    }, 500);
    this.characters.push(character);
  }

  private generateCharacter(): string {
    if (!this.effectLetters) {
      return "|";
    }

    const randomLetter =
      this.effectLetters[Math.floor(Math.random() * this.effectLetters.length)];
    return randomLetter;
  }

  private generateDownCharXAxis(): number {
    const xAxisList = [25, 100, 175, 250, 325, 400];
    return xAxisList[Math.floor(Math.random() * xAxisList.length)];
  }
}
