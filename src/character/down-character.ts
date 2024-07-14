import { CharacterOptions } from "../types";
import { Character } from "../character/character";

export class DownCharacter extends Character {
  constructor(options: CharacterOptions) {
    super(options);
  }

  override update() {
    this.axis.y += this.speed;
  }
}
