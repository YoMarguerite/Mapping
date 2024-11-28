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
  
  hydra.osc(20, 0.1, 0).color(0, 1, 2).rotate(1.57/2).out(o1)
  hydra.osc(30, 0.01, 0).color(2, 0.7, 1).modulate(o1, 0).add(o1,1).modulatePixelate(o1,1,10).out()

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
        <!-- <Text></Text>       -->
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