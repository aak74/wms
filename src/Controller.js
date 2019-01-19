'use strict';

import GateModel from './model/Gate';
import updateStages from './service/UpdateStages';
import BacklogModel from './model/Backlog';
import DoneModel from './model/Done';
import StageModel from './model/Stage';

class Controller {
  constructor() {
    this.stageModel = new StageModel;
    this.doneModel = new DoneModel;
    console.log(this.doneModel);
    this.gateModel = new GateModel(this.stageModel.getList(), (item) => {
      this.done(item);
    });
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

  done(item) {
    console.log(this.doneModel, item);
    
    this.doneModel.add(item);
  }
}

export default Controller;
