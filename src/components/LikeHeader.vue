<template>
  <div>
    <slot></slot>
    <slot></slot>
    <p>{{ headerText }}</p>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
};
</script>