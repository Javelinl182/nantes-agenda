<!-- Component describing an event for a listing display -->
<template>
<div
  :class="{
    'border-bold': isHovered,
    'opacified': fields.complet !== 'non' || fields.annule !== 'non'
  }"
  @mouseover="isHovered = true"
  @mouseleave="isHovered = false"
  >
    <div class="card">
      <div class="card-image">
          <figure class="image is-4by3 is48x48">
            <img
              v-bind:src="'./img/icons/elephant_nantes.jpg'"
              alt="Placeholder image"
            />
          </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ fields.nom }}</p>
          </div>
        </div>
        <div class="content">
          <p>{{fields.date.split('-')[2]+'-'+fields.date.split('-')[1]+'-'+fields.date.split('-')[0]}}</p>
          <p>{{fields.ville}}</p>
          <p v-if="fields.complet !== 'non'"><b>Complet</b></p>
          <p v-if="fields.annule !== 'non'"><b>Annulé</b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'EventCard',
  props: {
    fields: null
  },
  data () {
    return {
      isHovered: false
    }
  },
  computed: {
  },
  methods: {
  }
})

export default class EventCard extends Vue {

}
</script>

<style scoped>
.border-bold {
  border: 2px solid #3B5E2B;
}

.opacified {
  opacity: 0.5
}
</style>
