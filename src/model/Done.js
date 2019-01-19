'use strict';

class Done {
  constructor() {
    this.items = [];
  }

  getList() {
    return this.items;
  }

  add(item) {
    return this.items.push(item);
  }

}

export default Done;
