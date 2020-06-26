<template>
  <div class="home">
    <div class="btn" @click="alertHandler">Hello</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 动态加载组件
    alertHandler() {
      this.$msg({ msg: 'Hello', duration: 2000 })
    }
  }
}
</script>
