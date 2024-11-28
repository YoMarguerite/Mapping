import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ThresView from '../views/ThresView.vue'

import AcidView from '../views/Hydra/AcidView.vue'
import AquaticBlubsView from '../views/Hydra/AquaticBlubsView.vue'
import BlurEyeView from '../views/Hydra/BlurEyeView.vue'
import BrightnessView from '../views/Hydra/BrightnessView.vue'
import CNDSDView from '../views/Hydra/CNDSDView.vue'
import ColorView from '../views/Hydra/ColorView.vue'
import ColoramaView from '../views/Hydra/ColoramaView.vue'
import GalaxyTripView from '../views/Hydra/GalaxyTripView.vue'
import GlitchRiverView from '../views/Hydra/GlitchRiverView.vue'
import GridView from '../views/Hydra/GridView.vue'
import HappyMandalaView from '../views/Hydra/HappyMandalaView.vue'
import KaleidColorView from '../views/Hydra/KaleidColorView.vue'
import LavaSlimeView from '../views/Hydra/LavaSlimeView.vue'
import MirrorView from '../views/Hydra/MirrorView.vue'
import ModulateView from '../views/Hydra/ModulateView.vue'
import OscRepeatView from '../views/Hydra/OscRepeatView.vue'
import PuertasView from '../views/Hydra/PuertasView.vue'
import ReallyLoveView from '../views/Hydra/ReallyLoveView.vue'
import SaturateView from '../views/Hydra/SaturateView.vue'
import ScaleNoiseView from '../views/Hydra/ScaleNoiseView.vue'
import ShapeView from '../views/Hydra/ShapeView.vue'
import SpotLightView from '../views/Hydra/SpotLightView.vue'
import SquareKaleidView from '../views/Hydra/SquareKaleidView.vue'
import TheWallView from '../views/Hydra/TheWallView.vue'
import TrainWindowView from '../views/Hydra/TrainWindowView.vue'
import TrampoView from '../views/Hydra/TrampoView.vue'
import VoronoiView from '../views/Hydra/VoronoiView.vue'
import WavyView from '../views/Hydra/WavyView.vue'
import WindStreamView from '../views/Hydra/WindStreamView.vue'





const routes = [
  { path: '/', component: HomeView },
  { path: '/thres', component: ThresView },

  { path: '/acid', name:'acid', component: AcidView, title: 'Acid', hydra: true },
  { path: '/aquaticblubs', name:'aquaticblubs', component: AquaticBlubsView, title: 'AquaticBlubs', hydra: true },
  { path: '/blureye', name:'blureye', component: BlurEyeView, title: 'BlurEye', hydra: true },
  { path: '/brightness', name:'brightness', component: BrightnessView, title: 'Brightness', hydra: true },
  { path: '/cndsd', name:'cndsd', component: CNDSDView, title: 'CNDSD', hydra: true },
  { path: '/color', name:'color', component: ColorView, title: 'Color', hydra: true },
  { path: '/colorama', name:'colorama', component: ColoramaView, title: 'Colorama', hydra: true },
  { path: '/galaxytrip', name:'galaxytrip', component: GalaxyTripView, title: 'GalaxyTrip', hydra: true },  
  { path: '/glitchriver', name:'glitchriver', component: GlitchRiverView, title: 'GlitchRiver', hydra: true },
  { path: '/grid', name:'grid', component: GridView, title: 'Grid', hydra: true },
  { path: '/happymandala', name:'happymandala', component: HappyMandalaView, title: 'HappyMandala', hydra: true },
  { path: '/kaleidcolor', name:'kaleidcolor', component: KaleidColorView, title: 'KaleidColor', hydra: true },
  { path: '/lavaslime', name:'lavaslime', component: LavaSlimeView, title: 'LavaSlime', hydra: true },
  { path: '/mirror', name:'mirror', component: MirrorView, title: 'Mirror', hydra: true },
  { path: '/modulate', name:'modulate', component: ModulateView, title: 'Modulate', hydra: true },
  { path: '/oscrepeat', name:'oscrepeat', component: OscRepeatView, title: 'OscRepeat', hydra: true },
  { path: '/puertas', name:'puertas', component: PuertasView, title: 'Puertas', hydra: true },
  { path: '/reallylove', name:'reallylove', component: ReallyLoveView, title: 'ReallyLove', hydra: true },
  { path: '/saturate', name:'saturate', component: SaturateView, title: 'Saturate', hydra: true },
  { path: '/scalenoise', name:'scalenoise', component: ScaleNoiseView, title: 'ScaleNoise', hydra: true },
  { path: '/shape', name:'shape', component: ShapeView, title: 'Shape', hydra: true },
  { path: '/spotlight', name:'spotlight', component: SpotLightView, title: 'SpotLight', hydra: true },
  { path: '/squarekaleid', name:'squarekaleid', component: SquareKaleidView, title: 'SquareKaleid', hydra: true },
  { path: '/thewall', name:'thewall', component: TheWallView, title: 'TheWall', hydra: true },
  { path: '/trainwindow', name:'trainwindow', component: TrainWindowView, title: 'TrainWindow', hydra: true },
  { path: '/trampo', name:'trampo', component: TrampoView, title: 'Trampo', hydra: true },
  { path: '/voronoi', name:'voronoi', component: VoronoiView, title: 'Voronoi', hydra: true },
  { path: '/wavy', name:'wavy', component: WavyView, title: 'Wavy', hydra: true },
  { path: '/windstream', name:'windstream', component: WindStreamView, title: 'WindStream', hydra: true },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router