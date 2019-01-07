'use strict';

import GateModel from './model/Gate';
import updateStages from './service/UpdateStages';
import BacklogModel from './model/Backlog';
// import MatrixModel from './model/Matrix';
import StageModel from './model/Stage';

class Controller {
  constructor() {
    this.stageModel = new StageModel;
    this.gateModel = new GateModel(this.stageModel.getList());
    this.backlogModel = new BacklogModel;
  }
  
  getList(modelName) {
    if (this[`${modelName}Model`] && this[`${modelName}Model`].getList) {
      return this[`${modelName}Model`].getList();
    }
    throw new Error(`Model ${modelName} doesn't registered`);
  }

  updateStage() {
    updateStages(this.gateModel);
  }
}

export default Controller;
