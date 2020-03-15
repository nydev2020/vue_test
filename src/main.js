import Vue from 'vue'
import App from './App.vue'
//コンポーネントのグローバル登録
import LikeNumber from "./components/LikeNumber"

Vue.config.productionTip = false
//コンポーネントのグローバル登録
Vue.component('LikeNumber', LikeNumber);
//カスタムディレクティブのグローバル登録
Vue.directive("border", {
  bind(el, binding, vnode) {
    // ディレクティブが初めて対象の要素に紐づいたとき
  },
  inserted() {
    // 親NODEに挿入された時
  },
  update() {
    // コンポーネントが更新される度、子コンポーネントが更新される前
  },
  componentUpdated() {
    // コンポーネントが更新される度、子コンポーンとが更新された後
  },
  unbind() {
    // ディレクティブが紐付いている要素から取り除かれた時
  }, 
});

new Vue({
  render: h => h(App),
}).$mount('#app')
