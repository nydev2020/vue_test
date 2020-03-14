<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
//コンポーネントのローカル登録
import LikeHeader from "./LikeHeader.vue"
// import LikeNumber from "./LikeNumber.vue"

export default {
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
</style>