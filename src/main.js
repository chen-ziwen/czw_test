import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data(){
    return {
      name : '陈子文hahahahhaahhaha'
    }
  },
  render: h => h(App),
}).$mount('#app')
