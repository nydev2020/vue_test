<template>
  <div>
    <h2>{{ title | upperCase }}</h2>
    <p>{{ subTitle | upperCase }}</p>
    <h2>{{ title | lowerCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great city"
    }
  },
  //フィルターのローカル登録
  filters: {
    lowerCase: function(value) {
      return value.toLowerCase();
    }
  }
};
</script>