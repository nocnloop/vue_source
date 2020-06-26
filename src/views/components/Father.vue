<template>
  <div class="father">
    <div>father ==>{{ message }}</div>
    <hr />
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Father',
  data() {
    return {
      message: ''
    }
  },
  created() {
    this.$on('on-boardcast-evnet', message => {
      this.message = message
    })
    this.$on('on-dispatch-event', message => {
      this.message = message
    })
  }
}
</script>
