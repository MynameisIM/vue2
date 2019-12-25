import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './color';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';

Vue.directive('colored', ColorDirective);
Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
});
Vue.use(Vuelidate);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
});

export const eventEmitter = new Vue();
