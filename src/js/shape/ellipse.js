//Ellipse
import {Shape} from "./shape";

export class Ellipse extends Shape {
  constructor(options) {
    super();
    this.x = options.x;
    this.y = options.y;
    this._width = options.width;
    this._height = options.height;
    this.PI = options.PI;
  }

  draw() {
    this.drawEllipse(this.x, this.y, this._width, this._height);
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
    this.occupiedArea = Math.ceil(this.PI * (shape.width / 2 * shape.height / 2));
    return parseInt(this.occupiedArea);
  }
}
