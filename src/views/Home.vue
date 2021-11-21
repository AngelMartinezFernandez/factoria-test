<template>
  <div id="home">
    <Sidebar/>
    <div class="content">
      <figure v-if="!product">
        <img alt="Vue logo" src="../assets/logo.png">
      </figure>
      <div class="content__products" v-else>
        <div class="product-card" >
          <figure>
            <img :src="product.image" :alt="product.title" class="card-img">
          </figure>
          <div>
            <h5>{{ product.title }}</h5>
            <p>{{ product.description }}</p>
            <h3>{{ product.price }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  // https://fakestoreapi.com/
  name: 'Home',
  components: {
    Sidebar
  },
  data () {
    return {
      product: null
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      return fetch('https://fakestoreapi.com/products/1')
          .then(res=>res.json())
          .then(json=> {
            console.log(json)
            this.product = json
          })
    }
  },
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.card-img {
  height: 12rem;
  width: 10rem;
}
.content__products {
  width: 90%;
}
.product-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #2d2a4c;
}
</style>
