import Vue from 'vue';
import './plugins/vuetify';
import './plugins/ctrl';

import App from './App.vue';

Vue.config.productionTip = false

// debugger;
new Vue({
  render: h => h(App),
}).$mount('#app')
