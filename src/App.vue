<template>
<section class="section">
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" @click="alertBulma()">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        Home
      </router-link>

      <a class="navbar-item" href="https://github.com/Javelinl182/nantes-agenda" target="_blank">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/about">
            About
          </router-link>
          <a class="navbar-item" href="mailto: yvesmarie.ip@hotmail.fr">
            Contact
          </a>
          <a class="navbar-item" href="https://github.com/Javelinl182/nantes-agenda/issues" target="_blank">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" @click="alert()">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" @click="alert()">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</section>
<div class="container">
  <router-view/>
  </div>
  <hr>
  <footer>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  methods: {
    alert () {
      alert('Functionnality not implemented yet!')
    },
    alertBulma () {
      if (confirm('Bulma is the library that helps us prettifying this app. Do you want to see their documentation?')) {
        window.open('https://bulma.io')
      }
    }
  }
})
export default class Home extends Vue {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
