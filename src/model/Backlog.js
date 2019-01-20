'use strict';

import Model from './Model';

class Backlog extends Model {
  constructor() {
    super([
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 }
    ]);
  }

  getNext() {
    // debugger;
    console.log('getNext', this.items.length);
    

    if (this.items && this.items.length) {
      return this.items.shift()
    }
    return null;
  }
}

export default Backlog;
