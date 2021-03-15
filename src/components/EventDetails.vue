<template>
  <div class="content">
    <h1>{{fields.nom}}</h1>
    <h4 v-if="fields.annule !== 'non'">Cet événement est annulé</h4>
    <h4 v-if="fields.complet !== 'non'">Cet événement est complet</h4>
    <p>{{fields.description}}</p>
    <table class="table">
  <thead>
    <tr>
      <th><abbr title="Position">Info</abbr></th>
      <th>Valeurs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Adresse</th>
      <td>{{fields.adresse + ', ' + fields.code_postal + ', ' + fields.ville}}</td>
    </tr>
    <tr>
      <th>Date</th>
      <td>{{fields.date.split('-')[2]+'-'+fields.date.split('-')[1]+'-'+fields.date.split('-')[0]}}</td>
    </tr>
    <tr>
      <th>Début</th>
      <td>{{fields.heure_debut}}</td>
    </tr>
    <tr>
      <th>Fin</th>
      <td>{{fields.heure_fin || 'Inconnue'}}</td>
    </tr>
    <tr>
      <th>Tarifs et précisions</th>
      <td v-if="fields.gratuit === 'non'">{{fields.precisions_tarifs}}</td>
      <td v-if="fields.gratuit !== 'non'">Gratuit</td>
    </tr>
  </tbody>
</table>
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
  },
  created () {
    this.fields = this.$route.params
    if (this.fields.nom === undefined) {
      this.fields = JSON.parse(localStorage.getItem('eventDetails'))
    } else {
      localStorage.setItem('eventDetails', JSON.stringify(this.fields))
    }
  }
})

export default class EventDetails extends Vue {

}
</script>

<style scoped>
</style>
