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

  //acid
  hydra.osc(105).color(0.5,0.1,0.8).rotate(0.11, 0.1).modulate(osc(10).rotate(0.3).add(o0, 0.1)).add(osc(20,0.01,1).color(0,0.8,1)).out(o0)
  hydra.osc(50,0.05, 0.7).color(1,0.7,0.5).diff(o0).modulate(o1,0.05).out(o1)
  render(o1)
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