<template>
  <div class="cart p-3">
    <h1 data-cy="page-title">
      Cart
    </h1>

    <b-container>
      <span
        v-if="!cartContent.length"
        data-cy="card-empty-msg"
      >
        YOUR CART IS EMPTY
      </span>

      <b-list-group
        v-if="cartContent.length"
        data-cy="cart-list"
      >
        <b-list-group-item
          v-for="item in cartContent"
          :key="item.id"
          data-cy="cart-item"
        >
          <b-row align-v="center">
            <b-col
              sm="1"
              data-cy="item-ammount"
            >
              X{{ item.amount }}
            </b-col>

            <b-col sm="2">
              <img :src="item.img" class="img-fluid">
            </b-col>

            <b-col sm="7" class="text-left">
              <h5
                class="mb-1"
                data-cy="item-title"
              >
                {{ item.name }}
              </h5>

              {{ item.description }}
            </b-col>

            <b-col sm="2">
              <a
                @click="removeFromCart(item)"
                data-cy="remove-btn"
              >
                REMOVE
              </a>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(['cartContent']),
  methods: mapActions(['removeFromCart'])
}
</script>
