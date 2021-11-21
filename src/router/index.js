import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Sidebar from '@/components/Sidebar'

// const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
const About = () => import(/* webpackChunkName: "About" */ '@/views/About.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      aside: Sidebar,
    },
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
