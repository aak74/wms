'use strict';

class Stage {

  getList() {
    return [
      {
        name: 'Picking',
        time: 4,
      },
      {
        name: 'Truck waiting',
        time: 1,
      },
      {
        name: 'Loading',
        time: 2,
      },
      {
        name: 'Sealing',
        time: 1,
      },
    ];
  }

}

export default Stage;
