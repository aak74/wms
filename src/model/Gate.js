'use strict';


class Gate {
  constructor() {
    this.gates = [
      {
        id: 11,
        stage: 1,
        task: {
          id: 123,
        },
      },
      {
        id: 2,
        stage: 1,
        task: {
          id: 234,
        },
      },
      {
        id: 3,
        stage: 0,
        task: {
          id: 345,
        },
      },
      {
        id: 4,
        stage: 3,
        task: {
          id: 546,
        },
      },
      {
        id: 5,
        stage: 1,
        task: {
          id: 675,
        }
      }
    ];
  }

  getList() {
    return this.gates;
  }

  update(index) {
    console.log('update', index);
    
    return this.gates[index].stage += 1;
  }

}

export default Gate;
