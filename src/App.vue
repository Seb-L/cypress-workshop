<template>
  <div id="app">

    <b-navbar :toggleable="true" type="dark" variant="secondary">
      <b-navbar-brand :to="{ name: 'home' }">My Shop</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            :to="{ name: 'products' }"
            data-cy="nav-products"
          >
            Products
          </b-nav-item>

          <b-nav-item
            :to="{ name: 'contact' }"
            data-cy="nav-contact"
          >
            Contact
          </b-nav-item>

          <b-nav-item
            :to="{ name: 'cart' }"
            data-cy="nav-cart"
          >
            Cart ({{ cartProductAmount }})
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['cartProductAmount'])
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
