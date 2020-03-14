<template>
  <div>
    <slot name="title" v-bind:user="userName"></slot>
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      userName: {
        firstName: "Jack",
        lastName: "Donald",
      }
    }
  }
};
</script>