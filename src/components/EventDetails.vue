<template>
    <div>
        <p>lol</p>
    </div>
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
    }
  },
  computed: {
  },
  methods: {
  }
})

export default class EventDetails extends Vue {

}
</script>

<style scoped>
</style>
