'use strict';

import Model from '../model/Gate';

class UpdateStages {
  constructor(model) {
    this.model = model;
  }

  execute(index) {
    this.model.update(index);
  }
}

export default UpdateStages;
