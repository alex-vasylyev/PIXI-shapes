//Pentagon
import {Shape} from "./shape";

export class Pentagon extends  Shape{
  constructor(options) {
    super();
    this.x = options.x;
    this.y = options.y;
    this.points = options.points;
  }
  draw() {
    this.drawPolygon(this.points);
  }

  fill(color) {
    this.lineStyle(0);
    this.beginFill(color);
    this.tint = Math.random() * 0xFFFFFF;
  }

  isInteractive(isInt) {
    if (isInt) {
      this.interactive = true;
      this.buttonMode = true;
    }
  }

  calculateArea(shape) {
    this.occupiedArea = Math.ceil(5 * (0.5 * 2500));
    return parseInt(this.occupiedArea);
  }
}
