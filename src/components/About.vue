<template>
    <div>
        <p>This is an application developped for a class project, by Chloé Bail and Yves-Marie Ip</p>
        <p>University of Nantes (France) -- MIAGE -- 2020 - 2021</p>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'About',
  data () {
    return {
      fields: null
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
    this.fields = this.$route.params
  }
})

export default class About extends Vue {

}
</script>

<style scoped>

</style>
