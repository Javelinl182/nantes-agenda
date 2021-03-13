<!-- Component for the main page, the first thing user sees -->

<template>
  <div class="hello">
    <button class="button is-primary" v-on:click="getEvents">Get Events</button>
    <div class="columns is-multiline">
      <div v-for="event in events" :key="event.recordid"
      class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
        <router-link :to="`/event/${event.recordid}`">
          <Event
          :fields="event.fields"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { APIServices } from '../services/APIServices'
import Event from './Event.vue'

@Options({
  components: {
    Event
  },
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
    async getEvents () {
      const newEvents = await APIServices.getEvents()
      this.events = this.events.concat(newEvents)
    }
  }
})
export default class Home extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
