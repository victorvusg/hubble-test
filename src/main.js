import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from '@/store';
import vuetify from './plugins/vuetify';
import moment from 'moment';

Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('MMM DD, YYYY')
  }
});

Vue.use(Vuex);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
