<template>
  <div class="product-card" >
    <figure class="card-img">
<!--      <img :src="image ? image : noImageSrc" :alt="title">-->
      <img :src="getImage" :alt="title">
    </figure>
    <div class="product-detail">
      <h5>{{ title }}</h5>
      <p>{{ description }}</p>
      <h3>{{ price }}€</h3>
<!--      <button @click="emitProduct" class="button-type1">Añadir</button>  LO DEJO PARA QUE SE VEA LA DIFERENCIA ENTRE USAR UN BOTON DE HTML A UN COMPONENTE-->
      <Button
          :title="'Añadir'"
          :type="'action'"
          @click="emitProduct"
      />
    </div>
  </div>
</template>

<script>
// fallos
// me peto la consola de errores porque haciendo copia pega se me olvido poner el price type number y se esperaba strings
// me rellenaba el array de productos al añadir con objetos vacíos hasta que me di cuenta.... que pasaba un array vacío y no pasaba id, title y price
import Button from '@/components/shared/Button.vue'
export default {
  name: 'Product',
  components: {Button},
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
    }
  },
  data () {
    return {
      noImageSrc: 'https://w7.pngwing.com/pngs/998/203/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png'
    }
  },
  computed: {
    getImage () {
      return this.image ? this.image : this.noImageSrc
    }
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
  justify-content: center;
  grid-template-columns: 1fr 7fr;
  border: 2px solid #2d2a4c;
  height: 13rem;
}
.product-detail {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.card-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13rem;
  width: 10rem;
  border-right: #2d2a4c solid 2px;
}
.card-img img {
  width: 100%;
  height: auto;
}
@supports (object-fit: cover) {
  .card-img img {
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}
/* Los estilos del botón ya no se usan, al crear un componente están dentro del mismo */
/* Los dejo comentados para que se vea el cambio */

/*button {*/
/*  background-position: center; !* animation *!*/
/*  box-sizing: border-box;*/
/*  border-radius: 5px;*/
/*  margin: 0 2em;*/
/*  padding: 0 1em;*/
/*  font-size: 1rem;*/
/*  font-family: sans-serif;*/
/*  font-weight: bold;*/
/*  text-transform: uppercase;*/
/*  border: none;*/
/*  outline: none;*/
/*  cursor: pointer;*/
/*  opacity: 1;*/
/*  -webkit-user-select: none;*/
/*  -moz-user-select: none;*/
/*  -ms-user-select: none;*/
/*  user-select: none;*/
/*}*/

/*.button-type1 {*/
/*  color: #212241;*/
/*  background-color: #28E843;*/
/*  background-size: 100%;*/
/*}*/
</style>
