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

  // grid
  function r(min=0,max=1) { return Math.random()*(max-min)+min; }
  
  hydra.solid(1,1,1)
      .diff(shape([4,4,4,24].smooth().fast(.5),r(0.6,0.93),.09).repeat(20,10))
    .modulateScale(osc(8).rotate(r(-.5,.5)),.52)
    .add(
        src(o0).scale(0.965).rotate(.012*(Math.round(r(-2,1))))
        .color(r(),r(),r())
        .modulateRotate(o0,r(0,0.5))
        .brightness(.15)
        ,.7)
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