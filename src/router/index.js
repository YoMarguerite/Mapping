import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ThresView from '../views/ThresView.vue'
import HydraView from '../views/HydraView.vue'


// import AcidView from '../views/Hydra/AcidView.vue'
// import AquaticBlubsView from '../views/Hydra/AquaticBlubsView.vue'
// import BlurEyeView from '../views/Hydra/BlurEyeView.vue'
// import BrightnessView from '../views/Hydra/BrightnessView.vue'
// import CNDSDView from '../views/Hydra/CNDSDView.vue'
// import ColorView from '../views/Hydra/ColorView.vue'
// import ColoramaView from '../views/Hydra/ColoramaView.vue'
// import GalaxyTripView from '../views/Hydra/GalaxyTripView.vue'
// import GlitchRiverView from '../views/Hydra/GlitchRiverView.vue'
// import GridView from '../views/Hydra/GridView.vue'
// import HappyMandalaView from '../views/Hydra/HappyMandalaView.vue'
// import KaleidColorView from '../views/Hydra/KaleidColorView.vue'
// import LavaSlimeView from '../views/Hydra/LavaSlimeView.vue'
// import MirrorView from '../views/Hydra/MirrorView.vue'
// import ModulateView from '../views/Hydra/ModulateView.vue'
// import OscRepeatView from '../views/Hydra/OscRepeatView.vue'
// import PuertasView from '../views/Hydra/PuertasView.vue'
// import ReallyLoveView from '../views/Hydra/ReallyLoveView.vue'
// import SaturateView from '../views/Hydra/SaturateView.vue'
// import ScaleNoiseView from '../views/Hydra/ScaleNoiseView.vue'
// import ShapeView from '../views/Hydra/ShapeView.vue'
// import SpotLightView from '../views/Hydra/SpotLightView.vue'
// import SquareKaleidView from '../views/Hydra/SquareKaleidView.vue'
// import TheWallView from '../views/Hydra/TheWallView.vue'
// import TrainWindowView from '../views/Hydra/TrainWindowView.vue'
// import TrampoView from '../views/Hydra/TrampoView.vue'
// import VoronoiView from '../views/Hydra/VoronoiView.vue'
// import WavyView from '../views/Hydra/WavyView.vue'
// import WindStreamView from '../views/Hydra/WindStreamView.vue'





const routes = [
  { path: '/', component: HomeView },
  { path: '/thres', component: ThresView },
  { path: '/hydra', component: HydraView },

  { path: '/acid', name:'acid', component: HydraView, title: 'Acid', hydra: true },
  { path: '/aquaticblubs', name:'aquaticblubs', component: HydraView, title: 'AquaticBlubs', hydra: true },
  { path: '/blureye', name:'blureye', component: HydraView, title: 'BlurEye', hydra: true },
  { path: '/brightness', name:'brightness', component: HydraView, title: 'Brightness', hydra: true },
  { path: '/cndsd', name:'cndsd', component: HydraView, title: 'CNDSD', hydra: true },
  { path: '/color', name:'color', component: HydraView, title: 'Color', hydra: true },
  { path: '/colorama', name:'colorama', component: HydraView, title: 'Colorama', hydra: true },
  { path: '/galaxytrip', name:'galaxytrip', component: HydraView, title: 'GalaxyTrip', hydra: true },  
  { path: '/glitchriver', name:'glitchriver', component: HydraView, title: 'GlitchRiver', hydra: true },
  { path: '/grid', name:'grid', component: HydraView, title: 'Grid', hydra: true },
  { path: '/happymandala', name:'happymandala', component: HydraView, title: 'HappyMandala', hydra: true },
  { path: '/kaleidcolor', name:'kaleidcolor', component: HydraView, title: 'KaleidColor', hydra: true },
  { path: '/lavaslime', name:'lavaslime', component: HydraView, title: 'LavaSlime', hydra: true },
  { path: '/mirror', name:'mirror', component: HydraView, title: 'Mirror', hydra: true },
  { path: '/modulate', name:'modulate', component: HydraView, title: 'Modulate', hydra: true },
  { path: '/oscrepeat', name:'oscrepeat', component: HydraView, title: 'OscRepeat', hydra: true },
  { path: '/puertas', name:'puertas', component: HydraView, title: 'Puertas', hydra: true },
  { path: '/reallylove', name:'reallylove', component: HydraView, title: 'ReallyLove', hydra: true },
  { path: '/saturate', name:'saturate', component: HydraView, title: 'Saturate', hydra: true },
  { path: '/scalenoise', name:'scalenoise', component: HydraView, title: 'ScaleNoise', hydra: true },
  { path: '/shape', name:'shape', component: HydraView, title: 'Shape', hydra: true },
  { path: '/spotlight', name:'spotlight', component: HydraView, title: 'SpotLight', hydra: true },
  { path: '/squarekaleid', name:'squarekaleid', component: HydraView, title: 'SquareKaleid', hydra: true },
  { path: '/thewall', name:'thewall', component: HydraView, title: 'TheWall', hydra: true },
  { path: '/trainwindow', name:'trainwindow', component: HydraView, title: 'TrainWindow', hydra: true },
  { path: '/trampo', name:'trampo', component: HydraView, title: 'Trampo', hydra: true },
  { path: '/voronoi', name:'voronoi', component: HydraView, title: 'Voronoi', hydra: true },
  { path: '/wavy', name:'wavy', component: HydraView, title: 'Wavy', hydra: true },
  { path: '/windstream', name:'windstream', component: HydraView, title: 'WindStream', hydra: true },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router