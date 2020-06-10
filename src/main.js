import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueHead)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')