'use strict';

import GateModel from './model/Gate';
import BacklogModel from './model/Backlog';
import DoneModel from './model/Done';
import StageModel from './model/Stage';

import startEngine from './service/StartEngine';
import doneTask from './service/DoneTask';
import addTaskToGate from './service/AddTaskToGate';

class Controller {
  constructor() {
    this.stageModel = new StageModel;
    this.doneModel = new DoneModel;
    this.gateModel = new GateModel(this.stageModel.getList());
    this.gateModel.on('done', (task) => {
      doneTask({
        task,
        doneModel: this.doneModel,
      });
    });
    this.gateModel.on('ready', (gateIndex) => {
      console.log('ready', gateIndex);
      // debugger;
      addTaskToGate({
        gateIndex,
        gateModel: this.gateModel,
        backlogModel: this.backlogModel,
      });
    });
    this.backlogModel = new BacklogModel;
  }
  
  getList(modelName) {
    if (this[`${modelName}Model`] && this[`${modelName}Model`].getList) {
      return this[`${modelName}Model`].getList();
    }
    throw new Error(`Model ${modelName} doesn't registered`);
  }

  start() {
    startEngine(this.gateModel);
  }

  done(task) {
    doneTask({
      task, 
      doneModel:this.doneModel, 
      backlogModel:this.backlogModel,
      gateModel:this.gateModel,
    })
  }
}

export default Controller;
