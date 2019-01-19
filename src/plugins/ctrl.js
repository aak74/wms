import Vue from 'vue';

import Controller from '../Controller';
const ctrl = {};

ctrl.install = function (Vue, options) {
  Vue.prototype.$ctrl = options.ctrl;
}

Vue.use(ctrl, { ctrl: new Controller });

