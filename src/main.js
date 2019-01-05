import Vue from 'vue'
import './plugins/vuetify'

import App from './App.vue'
import Controller from './Controller'

Vue.config.productionTip = false

// debugger;
new Vue({
  render: h => h(App),
  controller: new Controller,
}).$mount('#app')
