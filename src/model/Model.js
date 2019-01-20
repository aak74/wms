'use strict';

import EventEmitter from 'event-emitter-es6';

class Model extends EventEmitter {
  constructor(items) {
    super();
    this.items = items || [];
  }

  getList() {
    return this.items;
  }

  add(item) {
    return this.items.push(item);
  }

}

export default Model;
