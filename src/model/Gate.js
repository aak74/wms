'use strict';

import Model from './Model';

import data from './data/Gate';

class Gate extends Model {
  constructor(stages, done) {
    super(data);
    this.stages = stages;
    this.done = done;
  }

  update(time) {
    // console.log('update', index);
    this.items.forEach((_, index, arr) => {
      if (!arr[index].task) {
        return;
      }

      arr[index].time -= time;
      if (arr[index].time <= 0) {
        if (arr[index].stage < this.stages.length) {
          arr[index].stage++;
          if (arr[index].stage < this.stages.length) {
            arr[index].time = this.getTimeForStage(arr[index].stage);
            // console.log('update time', index, arr[index].time);
          }
        }
      }
      if (arr[index].stage >= this.stages.length) {
        // this.done();
        this.emit('done', arr[index].task)
        arr[index].task = null;
        this.emit('ready', index)
      }
    });
  }

  getTimeForStage(index) {
    // console.log('gtfs', this.stages[index].time);
    return this.stages[index].time * (1.5 - Math.random());
  }

  addTask({nextTask, gateIndex}) {
    console.log('addTask', nextTask, gateIndex, this.items[gateIndex].task);

    if (this.items[gateIndex].task === null) {
      this.items[gateIndex].task = nextTask;
      this.items[gateIndex].stage = 0;
      this.items[gateIndex].time = this.getTimeForStage(0);
    }
  }
}

export default Gate;
