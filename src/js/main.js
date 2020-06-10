import {GameController} from "./controller/controller";
import {GameModel} from "./model/model";
import {GameView} from "./view/view";


const newGame  = () => {

  const model = new GameModel();
  const view = new GameView(model);
  const controller = new GameController(view, model);

  controller.startGame();
}

//Start game
window.onload = newGame;

