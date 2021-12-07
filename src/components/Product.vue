<template>
  <div class="product-card" >
    <figure class="card-img">
<!--      <img :src="image ? image : noImageSrc" :alt="title">
       EN ESTE CASO SE PONE EN EL SRC LA COMPROBACION, PERO SE VE FEO, ME GUSTA MAS SACARLA A UNA PROPIEDAD COMPUTADA, QUEDA MAS LIMPIO Y SI SE NOMBRA CORRECTAMENTE MAS ENTENDIBLE-->
      <img :src="getImage" :alt="title">
    </figure>
    <div class="product-detail">
      <h5>{{ title }}</h5>
      <p>{{ description }}</p>
      <h3>{{ price }}€</h3>
      <Button
          :title="'Añadir'"
          :type="'action'"
          @click="emitProduct"
      />
    </div>
  </div>
</template>

<script>
// COMPONENTE REUTILIZABLE, SE INTENTA NO PONER LOGICA ESPECIFICA EN LOS COMPONENTES QUE SE QUIERAN REUTILIZAR
// AQUI LO BUENO ES QUE LLEGUEN LOS DATOS TRATADOS Y QUE SOLO PINTE
// TENER CSS Y PROPIEDADES COMPUTADAS SI HACEN FALTA NO ESTA MAL, COMO EL CASO DE LA IMAGEN PARA QUE PINTE UNA GENERICA SI NO RECIBE
// AUN ASI, SI SE PONE LOGICA QUE NO TOCA PERO FUNCIONA ES LO QUE HAY, TIEMPO DE REFACTORIZAR Y APRENDER A HACERLO MEJOR SIEMPRE HAY.
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
    // UNA PROPIEDAD COMPUTADA ES A MI ENTENDER, UNA VARIABLE DINAMICA Y REACTIVA
    // QUE SIGNIFICA ESTO, QUE CUANDO ALGO CAMBIA EN LA LOGICA QUE CONTIENE, ESTA ACTUALIZA SU VALOR AUTOMATICAMENTE
    // AQUI EN getImage SI SE RECIBE UNA IMAGEN POR PROP TE DEVUELVE LA IMAGEN, EN CASO CONTRARIO DEVUELVE LA VARIABLE DE LA DATA
    // SI EN CASO INICIAL NO SE RECIBE LA IMAGEN, PERO LUEGO NOSOTROS POR LA LOGICA QUE SEA, POR EJEMPLO HACEMOS QUE PULSANDO UN BOTON EN HOME,
    // PASE UNA IMAGEN A PRODUCT, AUTOMANTICAMENTE getImage SE ACTUALIZARA Y DONDE PASABA  noImageSrc PASARA LA IMAGEN NUEVA
    // A DIFERENCIA DE UNA VARIABLE NORMAL O UNA VARIABLE DECLARADA EN LA DATA QUE NO CAMBIARA HASTA QUE LE VOLVAMOS A ASIGNAR OTRO VALOR.
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
