<template>
  <div class="product-card" >
    <figure class="card-img">
      <img :src="image" :alt="title">
    </figure>
    <div class="product-detail">
      <h5>{{ title }}</h5>
      <p>{{ description }}</p>
      <h3>{{ price }}</h3>
      <button @click="emitProduct" class="button-type1">Añadir</button>
    </div>
  </div>
</template>

<script>
// fallos
// me peto la consola de errores porque haciendo copia pega se me olvido poner el price type number y se esperaba strings

export default {
  name: 'Product',
  props: {
    id: {
      type: Number,
      default: null,
      required: true
    },
    image: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null,
      required: true
    },
    description: {
      type: String,
      default: null
    },
    price: {
      type: Number,
      default: null,
      required: true
    },

  },
  methods: {
    emitProduct () {
      this.$emit('add-product', {id: this.id, title: this.title, price: this.price})
    }
  },
}
</script>

<style scoped>
.product-card {
  display: grid;
  grid-template-columns: 30% 70%;
  border: 2px solid #2d2a4c;
}
.product-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-img {
  display: flex;
  justify-content: center;
  align-items: center;

  /*height: 12em;*/
  /*width: 10em;*/
}
.card-img img {
  width: 100%;
  height: auto;
}
button {
  background-position: center; /* animation */
  box-sizing: border-box;
  border-radius: 5px;
  margin: 0 2em;
  padding: 0 1em;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.button-type1 {
  color: #212241;
  background-color: #28E843;
  background-size: 100%;
}
@supports (object-fit: cover) {
  .card-img img {
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}
</style>
