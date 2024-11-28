<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos'
import Hydra from 'hydra-synth';
import Text from '../../components/Text.vue';

const input = useTemplateRef('hydra')
const canvas = useTemplateRef('canvas')


onMounted(() => {
  input.value

  var hydra = new Hydra({canvas: input.value, detectAudio:true, makeGlobal: true}).synth

  hydra.shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7].smooth(1))
    .color(0.2,0.4,0.3)
    .scrollX(()=>Math.sin(time*0.27))
    .add(
      shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1))
      .color(0.6,0.2,0.5)
      .scrollY(0.35)
      .scrollX(()=>Math.sin(time*0.33)))
    .add(
      shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1))
      .color(0.2,0.4,0.6)
      .scrollY(-0.35)
      .scrollX(()=>Math.sin(time*0.41)*-1))
    .add(
          src(o0).shift(0.001,0.01,0.001)
          .scrollX([0.05,-0.05].fast(0.1).smooth(1))
          .scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1))
          ,0.85)
    .modulate(voronoi(10,2,2))
    .out()
})

</script>

<template>
  <div>
    <canvas id="hydra" ref="hydra"></canvas>
    <TresCanvas ref="canvas"  id="canvas" 
      shadows
      alpha>
      <TresPerspectiveCamera :position="[1, -1, 1]" />
      <OrbitControls />
      <Suspense>
        <Text></Text>      
      </Suspense>
    </TresCanvas>
  </div>  
</template>

<style>
div{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

#canvas {
  height: 100vh !important;
  width: 100vw !important;
}

#hydra{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
</style>