//Triangle
import {Shape} from "./shape";

export class Triangle extends Shape {
  constructor(positionX, positionY, points) {
    super();
    this.x = positionX;
    this.y = positionY;
    this.points = points;
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
    this.occupiedArea = Math.ceil(0.5 * 10000);
    return parseInt(this.occupiedArea);
  }
}
