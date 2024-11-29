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

  //thewall
  speed=.0222
  hydra.osc(48,-.1,0).thresh([.3,.7].fast(.75),0).color(0,0,1)
  .add(
      osc(28,.1,0).thresh([.3,.7].fast(.75),0).rotate(3.14/4)
      .color(1,0,0)
      .modulateScale( osc(64,-.01,0).thresh([.3,.7].fast(.75),0) )
  )
  .diff(
      osc(28,.1,0).thresh([.3,.7].fast(.5),0).rotate(3.14/2)
      .color(1,0,1)
      .modulateScale( osc(64,-.015,0).thresh([.3,.7].fast(.5),0) )
  )
  .modulateRotate( osc(54,-.005,0).thresh([.3,.7].fast(.25),0) )
  .modulateScale( osc(44,-.020,0).thresh([.3,.7].fast(.25),0) )
  .colorama( ()=>Math.sin(time/27)*.01222+9.89)
  .scale(2.122)
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