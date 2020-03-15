<template>
  <p v-border:doted.round.shodow="'5px'">ホーム</p>
</template>

<script>
export default {
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
  }
};
</script>