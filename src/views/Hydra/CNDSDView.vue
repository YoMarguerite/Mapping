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

  //CNDSD
  hydra.osc(15, 0.01, 0.1).mult(osc(1, -0.1).modulate(osc(2).rotate(4,1), 20))
    .color(0,2.4,5)
    .saturate(0.4)
    .luma(1,0.1, (6, ()=> 1 + a.fft[3]))
    .scale(0.7, ()=> 0.7 + a.fft[3])
    .diff(o0)// o0
    .out(o0)// o1
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