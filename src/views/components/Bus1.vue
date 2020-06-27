<template>
  <div class="bus">
    <div>message ==> {{ message }}</div>
    <div class="btn" @click="send">传递消息</div>
    <hr />
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  created() {
    this.$bus.$on('bus-event', message => {
      this.message = message
    })
  },
  methods: {
    send() {
      this.$bus.$emit('bus-event', 'message from bus1')
    }
  }
}
</script>
