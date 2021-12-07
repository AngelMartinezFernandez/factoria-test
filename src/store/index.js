import { createStore } from 'vuex'

export default createStore({
  // LAS MUTACIONES MODIFICAN EL STATE, NO TIENEN LOGICA, SOLO PASAN EL DATO, ES MALA PRACTICA IMPORTAR ACCIONES Y USARLAS EN LOS COMPONENTES
  // SIEMPRE AUNQUE SEA UN POCO REDUNDANTE SE DEBERIA CREAR UN ACTION Y MUTATION.
  // EN CASO DE QUERER IMPLEMENTAR LA FUNCIONALIDAD DE ELIMINAR UN PRODUCTO DEL CARRITO HABRIA QUE CREAR OTRO ACTION Y MUTATION PARA CADA ACCION
  // POR EJEMPLO UN removeItemFromCart QUE SERIA UN ACTION, EL CUAL RECIBE EL ID, SACARIA LA POSICION DEL ELEMENTO DEL ARRAY Y SE LA PASARIA AL MUTATION
  // ESTE MUTATION PODRIA HACER UN SPLICE DE LA POSICION QUE RECIBE
  // SI NECESITAMOS ACCEDER EN UN ACTION AL STATE COMO EN EL CASO DE setShoppingCart SE LE PUEDE PASAR EL STATE DENTRO DEL OBJETO DONDE SE PASA EL COMMIT
  // EJEMPLO removeItemFromCart ({ commit, state }, id) COMPROBAR ESTO QUE LO DIGO DE MEMORIA Y ME DA VAGANCIA PROBARLO.
  // ESTO SON EJEMPLOS SIEMPRE BUSCAR EN LA DOCUMENTACION O POR INTERNET
  // https://bluuweb.github.io/vue-udemy/ ESTA ES UNA WEB DONDE SE HACE UN TO-DO DE UN CURSO DE VUE DE YOUTUBE SE LLAMA BLUEWEB, EL TIO EXPLICA MUY BIEN Y LO HICE EN SU DIA, ME AYUDO MUCHO
  state: {
    shoppingCart: []
  },
  mutations: {
    setShoppingCart (state, payload) {
      state.shoppingCart.push(payload)
      console.log('cart', state.shoppingCart)
    },
  },
  actions: {
    addItemToShoppingCart ({ commit }, product) {
      commit('setShoppingCart', product)
    },
  },
  getters: {
    getTotal: state => {
      let total = 0
      state.shoppingCart.forEach(item => total += item.price)
      return total
    }
  },
  modules: {
  }
})
