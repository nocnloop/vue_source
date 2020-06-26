<template>
  <div class="self-input">
    <input type="text" :value="value" @input="onInput" />
  </div>
</template>
<script>
import emmiter from '@/mixins/emmiter'
export default {
  name: 'SelfInput',
  mixins: [emmiter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
      this.$dispatch('self-input-event')
    }
  }
}
</script>
