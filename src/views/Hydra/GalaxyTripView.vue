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

  //galaxytrip
  hydra.shape(1,1)
      .mult(voronoi(1000,2)
      .blend(o0).luma())
      .add(shape(3,0.125)
          .rotate(1,1).mult(voronoi(1000,1).luma())
          .rotate(1.5)).scrollX([0.1,-0.0625,0.005,0.00001],0)
      .scrollY([0.1,-0.0625,0.005,0.00001],0)
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

<style scoped>
div{
  background-color: black;
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