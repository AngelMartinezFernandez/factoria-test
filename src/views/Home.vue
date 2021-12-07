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
// ACTIONS Y GETTERS, ESTAN EN VUEX (STORE) LOS EXPLICO EN EL ARCHIVO INDEX.JS DE LA CARPETA STORE
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
      // ME GUSTA DECLARAR LAS VARIABLES SIEMPRE QUE PUEDO A NULL, DE MANERA QUE AL HACER UNA COMPROBACION SI NO OBTIENEN DATOS DAN FALSE,
      // POR LO QUE ARRIBA PODEMOS HACER QUE MIENTRAS NO LLEGAN LOS DATOS PINTA UNA IMAGEN LOADER O LO QUE QUERAMOS Y AL TENER DATOS CAMBIA
      // SI LO DECLARAMOS INICIALMENTE A UN ARRAY VACIO COMO HE VISTO MUCHAS VECES DARIA TRUE, HABRIA QUE HACER UNA COMPROBACION ROLLO v-if="products.length === 0", ME PARECE MAS FEO
      products: null,
    }
  },
  computed: {
    ...mapGetters(['getTotal'])
  },
  // CICLO DE VIDA DE VUE, BUSCAR EN LA DOCUMENTACION OFICIAL, HAY VARIOS PERO LOS MAS USADOS SON:
  // CREATED: EN ESTA FASE SE CREAN TODOS LOS DATOS (BASICAMENTE LO QUE ESTA ENTRE LAS ETIQUETAS <SCRIPT>
  // BEFOREMOUNT: AQUI SUELO TRATAR DATOS OBTENIDOS EN EL CREATE PARA TENERLOS LISTO EN EL MOUNTED
  // MOUNTED: ES LA PARTE "FINAL" EN LA QUE SE RENDERIZA EL TEMPLATE (HTML)
  // SI TENEIS DUDAS PONERLOS TODOS CON UN CONSOLE.LOG DIFERENTE EN CADA UNO, ASI VEREIS EL ORDEN.
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
      // ESTE ADDITEMTOSHOPPINGCART ES UN ACTION QUE SE EXPLICA EN LA STORE
      this.addItemToShoppingCart(product)
      // ESTE GETTOTAL SE EXPLICA EN LA STORE
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
