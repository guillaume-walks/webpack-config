<template>
  <div>
    <h3>components Hello.vue {{ name }}!</h3>
    <img src="/static/img.jpg">
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  color: orange;
}
</style>
