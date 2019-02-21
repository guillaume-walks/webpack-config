<template>
  <h3> components Hello.vue {{ name }}!</h3>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
h3{
  color: red;
}
</style>
