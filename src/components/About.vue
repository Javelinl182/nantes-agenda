<template>
  <div class="container">
    <div class="">
        <p>This is an application developped for a class project, by Chloé Bail and Yves-Marie Ip</p>
        <p>University of Nantes (France) -- MIAGE -- 2020 - 2021</p>
    </div>
    <div class="container">
      <button class="button is-primary" @click="showMiage()">Détails formation MIAGE</button>
      <div v-if="isMiage">
        <a href="https://miage.univ-nantes.fr">Lien vers le contenu de la formation</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'About',
  data () {
    return {
      isMiage: false
    }
  },
  computed: {
  },
  methods: {
    showMiage () {
      this.isMiage = true
    }
  }
})

export default class About extends Vue {

}
</script>

<style scoped>

</style>
