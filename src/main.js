import Vue from 'vue'
import App from './App.vue'
//コンポーネントのグローバル登録
import LikeNumber from "./components/LikeNumber"

Vue.config.productionTip = false
//コンポーネントのグローバル登録
Vue.component('LikeNumber', LikeNumber)

new Vue({
  render: h => h(App),
}).$mount('#app')
