import Vue from 'vue'
// import App from './App.vue'
import AppRout from './AppRout.vue'
import ColorDirective from './color';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import router from './routes';

Vue.directive('colored', ColorDirective);
Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
});
Vue.use(Vuelidate);

Vue.use(VueRouter);

new Vue({
  el: '#app',
  // render: h => h(App),
  render: h => h(AppRout),
  router
});

export const eventEmitter = new Vue();
