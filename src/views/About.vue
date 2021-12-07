<template>
  <div id="about">
    <div class="content">
      <div v-for="item of shoppingCart" :key="item.id" class="cart-item-container">
        <CartItem
          :id="item.id"
          :title="item.title"
          :price="item.price"
          @delete-item="deleteProduct"
        />
      </div>
      <div class="cart-actions">
        <Button
            :title="'Comprar'"
            :type="'confirm'"
            @click="buyCart"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

import Button from '@/components/shared/Button'
import CartItem from '@/components/CartItem'

export default {
  components: {
    CartItem,
    Button,
  },
  computed: {
    ...mapState( { shoppingCart: 'shoppingCart' })
  },
  methods: {
    deleteProduct (id) {
      // ESTO LO QUE HARIA SERIA RECORRER EL ARRAY DEL CARRITO BUSCANDO SI ALGUN ELEMENTO CONTIENE ESA ID, UN INCLUDES O ALGO SIMILAR
      // EN CASO AFIRMATIVO SACARIA LA POSICION DEL MISMO EN EL ARRAY CON ALGUN METODO DE ARRAY SIMILAR A INDEXOF
      // Y SABIENDO LA POSICION PUES LO ELIMINARIA CON UN SPLICE POR EJEMPLO
      // SI SE LIA MUCHO LA LOGICA SE PUEDE SEPARAR EN FUNCIONES.
      // ES MUY IMPORTANTE SABER TRATAR ARRAYS Y SUS METODOS .MAP .FILTER, ETC
      console.log('delete', id)
    },
    buyCart () {
      // AQUI CREARIA VARIAS FUNCIONES SEPARADAS, UNA QUE SAQUE EL TOTAL A PAGAR, OTRA QUE ME PREPARE EL TICKET O LOS DATOS QUE SE VAYAN A PASAR A LA PANTALLA DE PAGO, ETC
      // OTRA PARA LLAMAR A LA API DE PAGO COMO PUEDA SER STRIPE O PAYPAL
      // VALORAR HACER ESTAS FUNCIONES QUE COMENTO, COMO ACTIONS EN LA STORE, SI SE CONSIDERA EL USO EN DIFERENTES SITIOS.
      console.log('comprando....')
    }
  },
}
</script>
<style scoped>
#about {
  height: 100vh;
  overflow-y: auto;
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.cart-actions {
  position: absolute;
  width: auto;
  flex-grow: inherit;
  bottom: 0;
  margin: 1rem 0;
}
p {
  margin: 0 10px
}
</style>
