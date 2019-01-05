'use strict';

import GateModel from './model/Gate';
import updateStages from './service/UpdateStages';
import BacklogModel from './model/Backlog';
// import MatrixModel from './model/Matrix';
import StageModel from './model/Stage';

class Controller {
  constructor() {
    this.gateModel = new GateModel;
    this.backlogModel = new BacklogModel;
    this.stageModel = new StageModel;
  }
  
  getList(modelName) {
    if (this[`${modelName}Model`] && this[`${modelName}Model`].getList) {
      return this[`${modelName}Model`].getList();
    }
    throw new Error(`Model ${modelName} doesn't registered`);
  }

  updateStage() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    
    // const updateStages = new UpdateStages(this.gateModel);
    updateStages(this.gateModel, getRandomInt(4));
  }
}

export default Controller;
