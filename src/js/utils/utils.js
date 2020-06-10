export class GameUtils {
  //Get random num
  getRandomFromRange(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
}


