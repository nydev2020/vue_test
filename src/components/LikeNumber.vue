<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button v-on:click="increment">+1</button>
  </div>
</template>

<script>
export default {
  //親から子へデータを渡す時はpropsを使う
  props: {
    totalNumber: {
      type: Number,
      require: true,
    }
  },
  computed: {
    halfNumber: function() {
      return this.totalNumber / 2
    }
  },
  
  methods: {
    increment: function() {
      //子側からの送り口
      this.$emit("my-click", "this.totalNumber + 1");
    }
  },
};
</script>

<style scoped>
  div {
    border: 5px solid red;
  }
</style>