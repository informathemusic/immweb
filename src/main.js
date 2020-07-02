import Vue from 'vue'
import VueHead from 'vue-head'
import Clipboard from 'v-clipboard'
import VueDiscordMessage from 'vue-discord-message';
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueDiscordMessage);
Vue.use(VueHead) 
Vue.use(Clipboard)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')