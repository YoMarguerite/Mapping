import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ThresView from '../views/ThresView.vue'
import SquareKaleidView from '../views/SquareKaleidView.vue'
import VoronoiView from '../views/VoronoiView.vue'



const routes = [
  { path: '/', component: HomeView },
  { path: '/thres', component: ThresView },

  { path: '/squarekaleid', name:'squarekaleid', component: SquareKaleidView },
  { path: '/voronoi', component: VoronoiView },
  // { path: '/squarekaleid', component: SquareKaleidView },
  // { path: '/squarekaleid', component: SquareKaleidView },
  // { path: '/squarekaleid', component: SquareKaleidView },
  // { path: '/squarekaleid', component: SquareKaleidView },
  // { path: '/squarekaleid', component: SquareKaleidView },
  // { path: '/squarekaleid', component: SquareKaleidView },
  // { path: '/squarekaleid', component: SquareKaleidView },
  // { path: '/squarekaleid', component: SquareKaleidView },
  // { path: '/squarekaleid', component: SquareKaleidView },
  // { path: '/squarekaleid', component: SquareKaleidView },



]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router