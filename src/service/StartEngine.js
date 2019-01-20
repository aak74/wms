'use strict';

export default (gateModel) => {
  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }

  const periodic = () => {
    gateModel.update(0.5);
    setTimeout(() => {
      periodic();
    }, 500);
  }
  periodic();
};
