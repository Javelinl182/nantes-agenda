<!-- Component for the main page, the first thing user sees -->

<template>
  <div class="hello">
    <div class="columns is-multiline">
      <div v-for="event in events" :key="event.recordid"
      class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
        <EventCard
          @click="shareData(event)"
          :fields="event.fields"
          />
      </div>
    </div>
    <div>
        <button class="button is-primary" v-on:click="getEvents">Get Events</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { APIServices } from '../services/APIServices'
import EventCard from './EventCard.vue'
import Event from '../Models/Event'

@Options({
  components: {
    EventCard
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
      const newEvents: Event[] = await APIServices.getEvents(this.events.length)
      this.events = this.events.concat(newEvents)
      localStorage.setItem('allEvents', JSON.stringify(this.events))
    },

    shareData (event: Event) {
      const fields: any = event.fields
      fields.id = event.recordid
      this.$router.push({ name: 'EventDetails', params: fields })
    }
  },
  created () {
    const events: Event[] = JSON.parse(localStorage.getItem('allEvents')!)
    if (events === null) {
      this.getEvents()
    } else {
      this.events = events
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
