'use strict';

export default ({ backlogModel, gateModel, gateIndex }) => {
  const nextTask = backlogModel.getNext();
  gateModel.addTask({
    nextTask,
    gateIndex,
  });
};
