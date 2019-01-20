'use strict';

class Model {
  constructor(items) {
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
