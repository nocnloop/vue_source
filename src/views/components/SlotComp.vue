<template>
  <div class="slot-comp">
    <slot :user="user" />
  </div>
</template>
<script>
export default {
  name: 'SlotComp',
  data() {
    return {
      user: {
        name: 'nocnloop'
      }
    }
  }
}
</script>
