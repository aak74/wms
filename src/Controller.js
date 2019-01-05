'use strict';

import GateModel from './model/Gate';
import UpdateStages from './service/UpdateStages';

class Controller {
  constructor() {
    this.gateModel = new GateModel;
  }
  
  updateStage() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    
    const updateStages = new UpdateStages(this.gateModel);
    updateStages.execute(getRandomInt(4));
  }
}

export default Controller;
