import Vue from 'vue';
import ViewUI from 'view-design';
import locale from 'view-design/dist/locale/en-US';
import App from './App.vue';
import router from './router';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI, { locale });

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
