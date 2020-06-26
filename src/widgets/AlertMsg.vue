<template>
  <div class="alert-msg">
    {{ msg }}
  </div>
</template>
<script>
export default {
  name: 'AlertMsg',
  props: {
    msg: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  mounted() {
    setTimeout(() => {
      this.remove()
    }, this.duration)
  }
}
</script>
<style lang="scss" scoped>
.alert-msg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
