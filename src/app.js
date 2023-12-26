import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const reading = await read();
      const parsing = await json(reading);
      return parsing;
    } catch { (error) => console.log(error); }
  }
}
