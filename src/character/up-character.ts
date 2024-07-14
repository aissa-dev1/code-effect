import { CharacterOptions } from "../types";
import { Character } from "../character/character";

export class UpCharacter extends Character {
  constructor(options: CharacterOptions) {
    super(options);
  }

  override update() {
    this.axis.y -= this.speed;
  }
}
