import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ThresView from '../views/ThresView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/thres', component: ThresView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router