import * as PIXI from 'pixi.js';

export class Shape extends PIXI.Graphics {
  occupiedArea;
  x;
  y;
  _width;
  _height;
  radius;

  constructor() {
    super();
  }

  //Enable interactive mode
  isInteractive(isInt) {
  }

  //draw current shape
  draw(args) {
  }

  //fill color
  fill(color) {
  }

  //Calculate area
  calculateArea(shapeTypeNum, shape) {
  }
}
