import {GameUtils} from "../utils/utils";

export class GameModel {
  app = null; //application
  stage;//stage
  gameUtils = new GameUtils();//Utils
  canvasWidth = 800; //application width
  canvasHeight = 600; //application height
  gameField = document.querySelector("#gameDiv");//gameField
  PI = 3.1415; //PI number
  shapesAmount = -1 //The amount of shapes
  deletedShapes = 0; //The amount of deleted shapes
  shapesPerSecond = 1; //Shapes/sec
  interval = 1000;//Shapes/sec generation interval
  gravity = 1; //Gravity value
  buttonsGen = document.querySelector('.ba-buttons-shape-gen');//Control button: Shapes/sec generation
  buttonsGravity = document.querySelector('.ba-buttons-gravity');//Control button: change gravity
  total = document.querySelector('.ba-total-shapes'); //Total amount field
  area = document.querySelector('.ba-surface-area');//Surface area occupied by shapes field
  occupiedArea = 0;//Occupied area


  //Generate shapes number per sec
  generateShapesPerSec(event) {
    let shapesValue = document.querySelector('.ba-shapes-value');

    if (event.target.value == '+') {
      this.shapesPerSecond++;
      if (this.shapesPerSecond > 10) {
        this.shapesPerSecond = 10;
      }
    } else if (event.target.value == '-') {
      this.shapesPerSecond--;
      if (this.shapesPerSecond <= 0) {
        this.shapesPerSecond = 1;
      }

    }
    this.interval = Math.ceil(1000 / this.shapesPerSecond);
    shapesValue.innerHTML = this.shapesPerSecond;
  }

  //Change Gravity
  changeGravity(event) {
    let gravityValue = document.querySelector('.ba-gravity-value');
    if (event.target.value == '+') {
      this.gravity += 1;
      if (this.gravity >= 10) {
        this.gravity = 10;
      }
    }
    if (event.target.value == '-') {
      this.gravity -= 1;
      if (this.gravity <= 0) {
        this.gravity = 0;
      }

    }
    gravityValue.innerHTML = this.gravity;
  }

  //Show total
  showTotal() {
    this.total.value = `Total shapes: ${this.shapesAmount}` + ` | ` + ` Deleted: ${this.deletedShapes}`;
    this.area.value = `Total area is: ${this.occupiedArea}`;
  }
}

