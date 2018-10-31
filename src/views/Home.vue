<template>
  <div class="home p-3">
    <h1>Workshop Cypress E2E</h1>
    <br>

    <b-button
      :to="{ name: 'products' }"
      variant="success"
      data-cy="products-btn"
    >
      SEE PRODUCTS
    </b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
