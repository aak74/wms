'use strict';

import GateModel from './model/Gate';
import UpdateStages from './service/UpdateStages';

class Store {
  constructor() {
    this.gateModel = new GateModel;
    this.updateStages = new UpdateStages(this.gateModel);
  }

  updateStage() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    this.gateModel.update(getRandomInt(4));
  }
}

export default Store;
