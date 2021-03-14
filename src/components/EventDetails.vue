<template>
    <div>
      <p @click="write()" class="title is-4">lol</p>
    </div>
</template>
<script>
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'EventDetails',
  data () {
    return {
      fields: null
    }
  },
  computed: {
  },
  methods: {
    write () {
      console.log(this.fields)
    }
  },
  created () {
    this.fields = this.$route.params.data
    console.log(this.$route.params.data)
  }
})

export default class EventDetails extends Vue {

}
</script>

<style scoped>
</style>
