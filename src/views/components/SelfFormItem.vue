<template>
  <div class="self-form-item">
    <div v-if="label">{{ label }}</div>
    <div style="color:red">{{ error }}</div>
    <slot />
  </div>
</template>
<script>
import Schema from 'async-validator'
export default {
  name: 'SelfFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      error: ''
    }
  },
  mounted() {
    this.$on('self-input-event', message => {
      this.validate()
    })
    this.$on('self-valite-event', cb => {
      this.validate(cb)
    })
  },
  methods: {
    validate(cb) {
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      const schema = new Schema({
        [this.prop]: rules
      })
      const result = schema.validate(
        {
          [this.prop]: value
        },
        errors => {
          if (errors) {
            this.error = errors[0].message
          } else {
            this.error = ''
          }
        }
      )
      return result
      // cb ? cb(result) : ''
    }
  }
}
</script>
