import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/* custom directive */
Vue.directive('change-color', function (el, color) {
  el.style.color = color;
  console.log(el, color);
})

Vue.directive('change-color-demo', function (el) {
  el.style.color = 'red';
})

new Vue({
  render: h => h(App),
}).$mount('#app')
