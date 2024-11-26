import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ThresView from '../views/ThresView.vue'
import SquareKaleidView from '../views/Hydra/SquareKaleidView.vue'
import VoronoiView from '../views/Hydra/VoronoiView.vue'
import ColorView from '../views/Hydra/ColorView.vue'
import SaturateView from '../views/Hydra/SaturateView.vue'




const routes = [
  { path: '/', component: HomeView },
  { path: '/thres', component: ThresView },

  { path: '/squarekaleid', name:'squarekaleid', component: SquareKaleidView },
  { path: '/voronoi', name:'voronoi', component: VoronoiView },
  { path: '/color', name:'color', component: ColorView },
  { path: '/saturate', name:'saturate', component: SaturateView },

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