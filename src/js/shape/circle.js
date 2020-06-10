import {Shape} from './shape';

//Circle
export class Circle extends Shape {
  constructor(options) {
    super();
    this.x = options.x;
    this.y = options.y;
    this.radius = options.radius;
    this.PI = options.PI;
  }

  draw() {
    this.drawCircle(this.x, this.y, this.radius);
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
    this.occupiedArea = Math.ceil(this.PI * Math.pow(shape.radius, 2));
    return parseInt(this.occupiedArea);
  }
}

