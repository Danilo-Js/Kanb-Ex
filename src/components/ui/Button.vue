<template>
  <button :class="`btn ${type}`" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "UIButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
}
.btn.primary {
  background-color: #3498db;
  color: white;
}
</style>
