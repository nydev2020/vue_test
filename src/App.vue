<template>
  <div>
    <LikeHeader>
      <template>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
    <LikeNumber v-bind:total-number="number" v-on:my-click="$event"></LikeNumber>

    <button v-on:click="currentComponent = 'Home'">Home</button>
    <button v-on:click="currentComponent = 'About'">About</button>
    
    <!-- 動的コンポーネントの情報をキャッシュする -->
    <keep-alive>
      <!-- 動的コンポーネント -->
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
    
    <!-- <About v-if="currentComponent === 'About'"></About>
    <Home v-if="currentComponent === 'Home'"></Home> -->

  </div>
</template>

<script>
//コンポーネントのローカル登録
import LikeHeader from "./components/LikeHeader.vue";
// import LikeNumber from "./components/LikeNumber.vue"

import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data: function() {
    return {
      number: 18,
      //動的コンポーネントの部品
      currentComponent: "Home",
    };
  },

  //コンポーネントのローカル登録
  components: {
    //keyとvalueが同一の時は短縮できる ES6の記法
    LikeHeader,
    About,
    Home,
    // LikeHeader: LikeHeader,
    // LikeNumber,
  }
}
</script>
<style>
  div {
    border: 1px solid blue;
  }
  h1 {
    color: red;
  }
</style>