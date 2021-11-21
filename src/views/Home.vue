<template>
  <div id="home">
    <Sidebar/>
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
import Sidebar from '@/components/Sidebar'
import Product from '@/components/Product'

  // https://fakestoreapi.com/
  // problemas con cors
export default {
  name: 'Home',
  components: {
    Product,
    Sidebar
  },
  data () {
    return {
      products: null,
      checkout: []
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      return fetch('https://fakestoreapi.com/products/').then(res => res.json())
          .then(data => {
            this.products = data
          })
    },
    addProduct (product) {
      this.checkout.push(product)
      console.log('checkout', this.checkout)
    }
  }
}
</script>
<style scoped>
#home {
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100%;
  width: 100%;
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
