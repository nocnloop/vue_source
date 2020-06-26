<template>
  <div class="brodcast">
    <GrandFather>
      <Father><Son /></Father>
    </GrandFather>
  </div>
</template>
<script>
import GrandFather from './components/GrandFather'
import Father from './components/Father'
import Son from './components/Son'
export default {
  name: 'Brodcast',
  components: {
    GrandFather,
    Father,
    Son
  },
  created() {
    console.log('Brodcast--created')
  },
  mounted() {
    console.log('Brodcast--mounted')
  }
}
</script>
