<template>
  <div id="home">
    <div class="content">
      <figure v-if="!products">
        <img alt="Vue logo" src="../assets/logo.png">
      </figure>
      <div class="content__products" v-else v-for="product in products" :key="product.id">
        <Product
          :id="product.id"
          :image="product.image"
          :title="product.title"
          :description="product.description"
          :price="product.price"
          @add-product="addProduct"
        />
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import Product from '@/components/Product'

  // https://fakestoreapi.com/
  // problemas con cors
export default {
  name: 'Home',
  components: {
    Product
  },
  data () {
    return {
      products: null,
    }
  },
  computed: {
    ...mapGetters(['getTotal'])
  },
  created () {
    this.getProducts()
  },
  methods: {
    ...mapActions(['addItemToShoppingCart']),
    getProducts () {
      return fetch('https://fakestoreapi.com/products/').then(res => res.json())
          .then(data => {
            this.products = data
          })
    },
    addProduct (product) {
      this.addItemToShoppingCart(product)
      console.log('total', this.getTotal)
    }
  }
}
</script>
<style scoped>
#home {
  height: 100vh;
  overflow-y: auto;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content__products {
  width: 90%;
}
</style>
