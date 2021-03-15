<!-- Component describing an event for a listing display -->
<template>
<div class="event">
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
          <p>{{fields.nom}}</p>
          <p>{{fields.ville}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'EventVue',
  props: {
    fields: null
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

export default class EventVue extends Vue {

}
</script>

<style scoped>
.event {
  border: 2px solid #3B5E2B;
}
</style>
