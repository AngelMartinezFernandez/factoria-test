import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Sidebar from '@/components/Sidebar'

// const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
const About = () => import(/* webpackChunkName: "About" */ '@/views/About.vue')
// EN ROUTES VAMOS A AÑADIR LAS RUTAS... A LAS CUALES ACCEDEREMOS A TRAVES DE ROUTER-LINKS
// FIJARSE QUE LA VISTA HOME ESTA ARRIBA IMPORTADA, POR LO QUE SIEMPRE SE VA A IMPORTAR DE PRIMERAS
// EN CAMBIO LA VISTA ABOUT SOLO SE CARGARA EN MEMORIA CUANDO ACCEDAMOS A DICHA RUTA, ESTO ES CONOCIDO COMO LAZY LOAD
// POR SI LO LEEIS POR AHI, YA ENTRARIA EN NIVELES DE RENDIMIENTO Y ESO PERO BUENO, NUNCA ESTA DE MAS QUE NOS SUENE.
// RECORDAR QUE AL ESPECIFICAR EN COMPONENTS EL ASIDE (ESTO ESTA EN APP.VUE) NOS VA A PINTAR AL ENTRAR EN CADA RUTA
// EN EL ASIDE EL SIDEBAR Y EN EL DEFAULT LA VISTA CORRESPONDIENTE.
// AQUI TAMBIEN HAY CICLO DE VIDA Y SE PODRIA AÑADIR EN EL beforeRouteEnter POR EJEMPLO UNA COMPROBACION DE LOGIN Y
// SI NO TIENES PERMISOS PUES TE ENVIO A /LOGIN OTRA VEZ O LO QUE SE CONSIDERE OPORTUNO
const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      aside: Sidebar,
    },
    beforeRouteEnter() {
      console.log('comprobando permisos router???')
    }
  },
  {
    // ESTA RUTA SE CARGA CON LAZY LOAD LO QUE SIGNIFICA QUE SOLO SE CARGA EL COMPONENTE AL VISITAR LA URL
    path: '/about',
    name: 'About',
    components: {
      default: About,
      aside: Sidebar,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
