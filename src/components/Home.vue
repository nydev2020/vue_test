<template>
  <div>
    <p v-border:doted.round.shodow="'5px'">ホーム</p>
    <h2>{{ title | upperCase }}</h2>
    <p>{{ subTitle | upperCase }}</p>
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

  // カスタムディレクティブのローカル登録
  directives: {
    border: function(el, binding) {
      el.style.border = "solid red 2px";
      el.style.borderWidth = binding.value;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers) {
        el.style.borderRadius = "1rem";
      }
      if (binding.modifiers) {
        el.style.boxShodow = "0 3px 5px rgba(0, 0, 0, 0.5)";
      }
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