import Vue from 'vue'
import App from './App.vue'
//コンポーネントのグローバル登録
import LikeNumber from "./components/LikeNumber"

Vue.config.productionTip = false
//コンポーネントのグローバル登録
Vue.component('LikeNumber', LikeNumber);

//カスタムディレクティブのグローバル登録
// Vue.directive("border", {
  // bind(el, binding, vnode) {
    // ディレクティブが初めて対象の要素に紐づいたとき
  // },
  // update(el, binding, vnode) {
    // コンポーネントが更新される度、子コンポーネントが更新される前
  // },
// });
  
// bindとupdateは頻出しやすいので省略記法が用意されている
// Vue.directive("border", function(el, binding) {
//   el.style.border = "solid black 2px";
//   el.style.borderWidth = binding.value;
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
