<template>
  <div class="form">
    <SelfForm :model="model" :rules="rules" ref="selfForm">
      <SelfFormItem label="账号" prop="name">
        <SelfInput v-model="model.name" />
      </SelfFormItem>
      <SelfFormItem label="密码" prop="password">
        <SelfInput v-model="model.password" />
      </SelfFormItem>
    </SelfForm>
    <div>{{ model }}</div>
    <div class="btn" @click="onSubmit">Submit</div>
  </div>
</template>
<script>
import SelfForm from './components/SelfForm'
import SelfFormItem from './components/SelfFormItem'
import SelfInput from './components/SelfInput'
export default {
  name: 'Form',
  components: { SelfForm, SelfFormItem, SelfInput },
  data() {
    return {
      model: {
        name: '',
        password: ''
      },
      rules: {
        name: [{ required: true, message: 'name is empty' }],
        password: [{ required: true, message: 'name is empty' }]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.selfForm.validate(isValite => {
        if (isValite) {
          alert('登录！')
        } else {
          alert('失败！')
        }
      })
    }
  }
}
</script>
