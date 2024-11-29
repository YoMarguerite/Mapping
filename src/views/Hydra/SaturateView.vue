<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos'
import Hydra from 'hydra-synth';
import Text from '../../components/Text.vue';

const input = useTemplateRef('hydra')
const canvas = useTemplateRef('canvas')


onMounted(() => {
  input.value.width = window.innerWidth;    
  input.value.height = window.innerHeight;

  var hydra = new Hydra({canvas: input.value, detectAudio:true, makeGlobal: true}).synth

  a.setBins(5) // amount of bins (bands) to separate the audio spectrum

  // noise(2)
  //   .modulate(o1,()=>a.fft[1]*.5) // listening to the 2nd band
  //   .out(o1)
  var soundSize = ()=>a.fft[1]*.5

  a.setSmooth(.8) // audio reactivity smoothness from 0 to 1, uses linear interpolation
  a.setScale(8)    // loudness upper limit (maps to 0)
  a.setCutoff(0.1)   // loudness from which to start listening to (maps to 0)

  // a.show() // show what hydra's listening to
  a.hide()

  hydra.osc(3, 0.01, 0.4)
    .color(1.2,1.2,1.3)
    .saturate(0.4)
    .modulateRepeat(osc(2),1, 2, 4, 3)
    // .modulateRepeat(osc(()=>a.fft[1]),1, 2, 4, 3)
    .modulateKaleid(osc(12,0.05,0),1)
    .luma (0.4)
    .rotate(4, 0.1,0)
    // .modulate(o0, () => mouse.y *0.0002 )
    // .modulate(o0, ()=>a.fft[1]*.5 )
    .scale(1).diff(o1)
    .out(o0)

  

  render(o0)
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