<template>
  <div class="self-form">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'SelfForm',
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    validate(cb) {
      // this.$boardcast('self-valite-event', message => {
      //   message.catch(error => {
      //     cb(false, error)
      //   })
      // })
      const tasks = this.$children.map(item => item.validate())
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>
