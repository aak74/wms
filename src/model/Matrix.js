'use strict';

class Matrix {

  getList() {
    return [
      {
        name: '1',
        task: {
          number: 123,
          stage: 'picking'
        }
      },
      {
        name: '2',
        task: {
          number: 123,
          stage: 'waiting'
        }
      },
      {
        name: '3',
        task: {
          number: 123,
          stage: 'loading'
        }
      },    
    ];
  }

}

export default Matrix;
