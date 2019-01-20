'use strict';

import Model from './Model';

class Gate extends Model {
  constructor(stages, done) {
    super([
      {
        id: 11,
        stage: 1,
        time: 2,
        task: {
          id: 123,
        },
      },
      {
        id: 2,
        stage: 1,
        time: 3,
        task: {
          id: 234,
        },
      },
      {
        id: 3,
        stage: 0,
        time: 4,
        task: {
          id: 345,
        },
      },
      {
        id: 4,
        stage: 3,
        time: 2,
        task: {
          id: 546,
        },
      },
      {
        id: 5,
        stage: 1,
        time: 2,
        task: {
          id: 675,
        }
      }
    ]);
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
        this.done(arr[index].task);
        arr[index].task = null;
      }
    });
  }

  getTimeForStage(index) {
    // console.log('gtfs', this.stages[index].time);
    return this.stages[index].time * (1.5 - Math.random());
  }
}

export default Gate;
