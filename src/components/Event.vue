<!-- Component describing an event for a listing display -->
<template>
    <p>NTM</p>
</template>
<script>
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'Event',
  props: {
  },
  data () {
    return {
      events: []
    }
  },
  computed: {
  },
  methods: {
  }
})

export default class Event extends Vue {

}
</script>

<style scoped>

</style>
