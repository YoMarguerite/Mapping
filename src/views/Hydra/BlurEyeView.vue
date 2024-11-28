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

  //blureye
  hydra.noise(6,.05)
  .mult( osc(9,0, ()=>Math.sin(time/1.5)+2 ) )
  .mult(
      noise(9,.03).brightness(1.2).contrast(2)
      .mult( osc(9,0, ()=>Math.sin(time/3)+13 ) )
  )
  .diff(
      noise(15,.04).brightness(.2).contrast(1.3)
      .mult( osc(9,0, ()=>Math.sin(time/5)+13 ) )
      .rotate( ()=>time/33 )
  )
  .scale( ()=>Math.sin(time/6.2)*.12+.15 )
  .modulateScale(
      osc(3,0,0).mult( osc(3,0,0).rotate(3.14/2) )
      .rotate( ()=>time/25 ).scale(.39).scale(1,.6,1).invert()
      , ()=>Math.sin(time/5.3)*1.5+3  )
  .rotate( ()=>time/22 )
  .mult( shape(100,.9,.01).scale(1,.6,1) )
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