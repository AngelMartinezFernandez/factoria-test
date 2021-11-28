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
      console.log('delete', id)
    },
    buyCart () {
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
