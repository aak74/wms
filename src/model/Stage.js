'use strict';

class Stage {

  getList() {
    return [
      {
        name: 'picking',
        time: 4,
      },
      {
        name: 'waiting',
        time: 1,
      },
      {
        name: 'loading',
        time: 2,
      },
      {
        name: 'closing',
        time: 1,
      },
    ];
  }

}

export default Stage;
