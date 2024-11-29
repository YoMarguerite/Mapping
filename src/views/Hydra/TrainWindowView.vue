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

  //trainwindow
  var pat = ()=>
  solid()
    .layer(solid().diff(
      osc((time/16) * 1, (time/1000) * 0.2  )
        .mult(osc((time/8) * 1, (time/1006) * 0.2  ).rotate(1.57))
        .modulate((shape(106,1,0.05)))
        .mult(shape(106,1,0.05))
      ))
      .modulateScale(osc(2,0.125),0.125)
    //
    solid()
    .layer(solid(1,1,1)
      .mult(pat()
      .diff(src(o0).scale(0.2).mult(solid(),[0.7,0.6,0.4,0.6]).kaleid(1.01).saturate(0.3))
    )
    .layer(solid(1,1,1)
        .mask(
          noise(2,0.05)
          .invert().colorama(2).posterize(8,4).luma(0.25).thresh(0.5)
          .modulateRotate(osc(1,0.5))
        )
        .mult(gradient(0.5).kaleid(1).colorama(2).saturate(1.1).contrast(1.6).mult(solid(),0.45))
      ))
      .out()
    speed= 0.5
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