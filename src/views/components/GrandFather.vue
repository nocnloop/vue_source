<template>
  <div class="grand-father">
    <div class="btn" @click="boardcastHandler">向下传递</div>
    <hr />
    <div>GrandFather==>{{ message }}</div>
    <hr />
    <slot />
  </div>
</template>
<script>
import emmiter from '@/mixins/emmiter'
export default {
  name: 'GrandFather',
  mixins: [emmiter],
  data() {
    return {
      message: ''
    }
  },
  created() {
    console.log('GrandFather--created')
    this.$on('on-dispatch-event', message => {
      this.message = message
    })
  },
  mounted() {
    console.log('GrandFather--mounted')
  },
  methods: {
    boardcastHandler() {
      this.$boardcast('on-boardcast-evnet', 'message from grandFather')
    }
  }
}
</script>
