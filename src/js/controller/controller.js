import * as PIXI from 'pixi.js'


export class GameController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  //Start the game
  startGame() {
    this.createCanvas();
    this.generateShapes();

    //Create a random shape
      this.model.gameField.addEventListener('dblclick', (e) => {
        let randomShape = this.view.createRandomShape(Math.ceil(e.offsetX / 2), Math.ceil(e.offsetY / 2));
        this.model.occupiedArea += randomShape.occupiedArea;
        this.model.stage.addChild(randomShape);

        randomShape.on('click', () => {
          this.view.changeShapeColor(randomShape);
          this.view.removeShape(randomShape);
        });
      });

    //Shape generation per sec
    this.model.buttonsGen.addEventListener('click', () => {
      this.model.generateShapesPerSec(event);
    });

    //Change gravity
    this.model.buttonsGravity.addEventListener('click', () => {
      this.model.changeGravity(event);
    });
  }

  //Create Canvas
  createCanvas() {
    this.model.app = new PIXI.Application({
      width: this.model.canvasWidth,
      height: this.model.canvasHeight,
      backgroundColor: 0x000000,
      resolution: window.devicePixelRatio,
      autoDensity: true
    });
    this.model.gameField.appendChild(this.model.app.view);
    window.addEventListener('resize', () => {

      if (window.screen.width > 640) {
        this.model.app.renderer.resize(this.model.canvasWidth, this.model.canvasHeight);
      } else if (window.screen.width < 768) {
        this.model.app.renderer.resize(this.model.canvasWidth / 2, this.model.canvasHeight);
      }
    });
    this.model.stage = this.model.app.stage;
  }

  //Run shapes generation and set timeouts
  run() {
    let interval = this.model.interval;
    const shape = this.view.createShape();
    this.model.shapesAmount++;
    this.model.occupiedArea += shape.occupiedArea;
    this.model.stage.addChild(shape);
    this.model.showTotal();
    shape.on('pointerdown', () => {
      this.view.removeShape(shape);
      this.view.changeShapeColor(shape);
    });
    setTimeout(() => {
      this.run();
    }, interval);
  }

  //Generate shapes
  generateShapes() {
    setTimeout(() => {
      this.run();
    }, this.model.interval);

    this.model.app.ticker.add(() => {
      for (let i = 0; i < this.model.stage.children.length; i++) {
        this.model.stage.children[i].y += this.model.gravity;
        if (this.model.stage.children[i].y >= 900) {
          this.view.removeShape(this.model.stage.children[i]);
        }
      }
    });
  }
}
