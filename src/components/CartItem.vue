<template>
  <div class="cart-item">
    <p>{{ id }}</p>
    <p>{{ title }}</p>
    <p>{{ price }}€</p>
    <Button
        :title="'Eliminar'"
        :type="'cancel'"
        @click="emitDelete"
    />
  </div>
</template>

<script>
import Button from '@/components/shared/Button'

export default {
  name: 'CartItem',
  components: {
    Button,
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  methods: {
    emitDelete () {
      this.$emit('delete-item', this.id)
    }
  },
}
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0.5rem 0;
  border: 2px solid #2d2a4c;
}
</style>
