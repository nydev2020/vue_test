<template>
  <div>
    <LikeHeader>
      <template>
        <h1>トータルのいいね数</h1>
      </template>
      <h2>{{ number }}</h2>
    </LikeHeader>
    <LikeNumber v-bind:total-number="number" v-on:my-click="$event"></LikeNumber>
    <LikeNumber v-bind:total-number="number"></LikeNumber>

  </div>
</template>

<script>
//コンポーネントのローカル登録
import LikeHeader from "./components/LikeHeader.vue"
// import LikeNumber from "./components/LikeNumber.vue"

export default {
  data: function() {
    return {
      number: 18
    };
  },
  //コンポーネントのローカル登録
  components: {
    //keyとvalueが同一の時は短縮できる ES6の記法
    LikeHeader,
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