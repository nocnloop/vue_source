<template>
  <div class="slot">
    <SlotComp v-slot="slotProps">
      {{ slotProps.user.name }}
    </SlotComp>
  </div>
</template>
<script>
import SlotComp from './components/SlotComp'
export default {
  name: 'SlotWidget',
  components: { SlotComp }
}
</script>
