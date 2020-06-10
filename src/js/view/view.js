import * as PIXI from 'pixi.js';
import {Circle} from "../shape/circle";
import {Rectangle} from "../shape/rectangle";
import {Triangle} from "../shape/triangle";
import {Pentagon} from "../shape/pentagon";
import {Hexagon} from "../shape/hexagon";
import {Ellipse} from "../shape/ellipse";


export class GameView {
  constructor(model) {
    this.model = model;
  }

  //Create a shape
  createShape() {
    let shape
    let x, y;
    if (window.screen.width < 768) {
      x = this.model.gameUtils.getRandomFromRange(0, 280);
    } else {
      x = this.model.gameUtils.getRandomFromRange(50, 700);
    }
    y = -300;
    let currentColor = 0xffffff;
    shape = this.drawNewShape(Math.ceil(Math.random() * 6), x, y, currentColor);
    shape.endFill();
    shape.isInteractive(true);
    shape.randomColor = currentColor;
    shape.occupiedArea = shape.calculateArea(shape);

    return shape;
  }

  //Create and draw a random shape
  createRandomShape(offsetX, offsetY) {
    let randomShape;
    let randomShapeColor = 0xffffff;
    randomShape = this.drawNewShape(Math.ceil(Math.random() * 6), offsetX, offsetY, randomShapeColor);
    randomShape.endFill();
    randomShape.isInteractive(true);
    randomShape.randomColor = randomShapeColor;
    this.model.shapesAmount++;
    randomShape.occupiedArea = randomShape.calculateArea(randomShape);
    return randomShape;
  }

  //Draw a regular shape
  drawNewShape(num, x, y, color) {
    if (num == 1) {
      //Circle
      let circle;
      if (window.screen.width < 768) {
        circle = new Circle({
          x: x,
          y: y,
          radius: 25,
          PI: this.model.PI
        });
        circle.radius = 25;
      } else {
        circle = new Circle({
          x: x,
          y: y,
          radius: 50,
          PI: this.model.PI
        });
        circle.radius = 50;
      }
      circle.fill(color);
      circle.draw();
      circle.shapeType = '1';
      return circle;
    } else if (num == 2) {
      //Rect
      let rectangle;
      if (window.screen.width < 768) {
        rectangle = new Rectangle({x: x, y: y, width: 25, height: 50});
        rectangle.draw();
      } else {
        rectangle = new Rectangle({x: x, y: y, width: 50, height: 100});
        rectangle.draw();
      }
      rectangle.fill(color);
      rectangle.draw();
      rectangle.shapeType = '2';

      return rectangle;
    } else if (num == 3) {
      //Triangle
      let triangle;

      if (window.screen.width < 768) {
        triangle = new Triangle(x, y, [
            new PIXI.Point(x, y-50),
            new PIXI.Point(x-25, y+25),
            new PIXI.Point(x+25, y+25)]
        );
      } else {
        triangle = new Triangle(x, y, [
          new PIXI.Point(x, y-100),
          new PIXI.Point(x-50, y+50),
          new PIXI.Point(x+50, y+50)]);
      }
      triangle.fill(color);
      triangle.draw();
      triangle.shapeType = '3';
      return triangle;
    } else if (num == 4) {
      //Pentagon
      let pentagon;
      if (window.screen.width < 768) {
        pentagon = new Pentagon({
          x: x, y: y, points: [
            new PIXI.Point(x, y-50),
            new PIXI.Point(x-25, y-25),
            new PIXI.Point(x-25, y),
            new PIXI.Point(x+25, y),
            new PIXI.Point(x+25, y-25)]
        });

      } else {
        pentagon = new Pentagon({
          x: x, y: y, points: [
            new PIXI.Point(x, y-100),
            new PIXI.Point(x-50, y-50),
            new PIXI.Point(x-50, y),
            new PIXI.Point(x+50, y),
            new PIXI.Point(x+50, y-50)]
        });
      }
      pentagon.fill(color);
      pentagon.draw();
      pentagon.shapeType = '4';
      return pentagon;
    } else if (num == 5) {
      //Hexagon
      let hexagon;
      if (window.screen.width < 768) {
        hexagon = new Hexagon({
          x: x, y: y, points: [
            new PIXI.Point(x, y-50),
            new PIXI.Point(x-25, y-25),
            new PIXI.Point(x-25, y),
            new PIXI.Point(x, y+25),
            new PIXI.Point(x+25, y),
            new PIXI.Point(x+25, y-25)]
        });
      } else {
        hexagon = new Hexagon({
          x: x, y: y, points: [
            new PIXI.Point(x, y-100),
            new PIXI.Point(x-50, y-50),
            new PIXI.Point(x-50, y),
            new PIXI.Point(x, y+50),
            new PIXI.Point(x+50, y),
            new PIXI.Point(x+50, y-50)]
        });
      }
      hexagon.fill(color);
      hexagon.draw();
      hexagon.shapeType = '5';
      return hexagon;
    } else {
      //Ellipse
      let ellipse;
      if (window.screen.width < 768) {
        ellipse = new Ellipse({x: x, y: y, width: 15, height: 30, PI: this.model.PI});
      } else {
        ellipse = new Ellipse({x: x, y: y, width: 30, height: 60, PI: this.model.PI});
      }
      ellipse.fill(color);
      ellipse.draw();
      ellipse.shapeType = '6';
      return ellipse;
    }
  }

  //Redraw shapes with the same color
  changeShapeColor(shape) {
    for (let i = 0; i < this.model.stage.children.length; i++) {
      if (shape.shapeType == this.model.stage.children[i].shapeType) {
        this.model.stage.children[i].tint = shape.tint;
      }
    }
  }

  //Remove a shape from stage
  removeShape(shape) {
    this.model.shapesAmount--;
    this.model.deletedShapes++;
    this.model.occupiedArea -= shape.occupiedArea;
    if (this.model.occupiedArea < 0) {
      this.model.occupiedArea = 0;
    }
    shape.clear();
    this.model.stage.removeChild(shape);
    this.model.showTotal();
  }
}


