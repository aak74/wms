import Vue from 'vue'
import './plugins/vuetify'

import App from './App.vue'
import Store from './Store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: new Store,
}).$mount('#app')
