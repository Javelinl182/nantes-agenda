<!-- Component describing an event for a listing display -->
<template>
    <p>{{fields.ville}}</p>
</template>
<script>
import { Options, Vue } from 'vue-class-component'
import Field from '../Models/Fields'

@Options({
  name: 'Event',
  props: {
    fields: Field
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
