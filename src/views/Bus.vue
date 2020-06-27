<template>
  <div class="bus">
    <Bus1 />
    <Bus2 />
  </div>
</template>
<script>
import Bus1 from './components/Bus1'
import Bus2 from './components/Bus2'
export default {
  name: 'Bus',
  components: { Bus1, Bus2 }
}
</script>
