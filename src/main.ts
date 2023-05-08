/** Vue main script */
import Vue from 'vue';

import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import teleport from '@logue/vue2-helpers/teleport';

import App from '@/App.vue';

Vue.config.productionTip = false;
Vue.component('Teleport', teleport);

const vue = new Vue({
  // @ts-expect-error
  router,
  store,
  vuetify,
  render: h => h(App),
});

// Run!
vue.$mount('#app');
