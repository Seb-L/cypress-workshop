<template>
  <div class="products p-4">
    <h1
      class="mb-3"
      data-cy="page-title"
    >
      Products
    </h1>

    <b-container>
      <b-row>
        <b-col
          v-for="product in  productList"
          :key="product.id"
          sm="4"
        >
          <b-card
            :title="product.name"
            :img-src="product.img"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-3"
            :data-cy="`product-item-${product.id}`"
          >
            <p class="card-text">
              {{ product.description | maxLength(50) }}
            </p>

            <b-button
              @click="addToCart(product)"
              :data-cy="`addtocart-btn-${product.id}`"
            >
              ADD TO CART
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(['productList']),
  methods: mapActions(['addToCart']),
  filters: {
    maxLength (value, length) {
      if (value.length >= length) {
        return `${value.slice(0, length)}...`
      } else {
        return value
      }
    }
  }
}
</script>
