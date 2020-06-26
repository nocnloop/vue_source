<template>
  <div class="son">
    Son ==> {{ message }}
    <hr />
    <div class="btn" @click="boardcastHandler">向上传递</div>
  </div>
</template>
<script>
import emmiter from '@/mixins/emmiter'

export default {
  name: 'Son',
  mixins: [emmiter],
  data() {
    return {
      message: ''
    }
  },
  created() {
    this.$on('on-boardcast-evnet', message => {
      this.message = message
    })
  },
  methods: {
    boardcastHandler() {
      this.$dispatch('on-dispatch-event', 'message from son')
    }
  }
}
</script>
