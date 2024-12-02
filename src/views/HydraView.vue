<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos'
import Hydra from 'hydra-synth';
import Text from '../components/Text.vue';
import mapping from '../mapping';
import { useRouter } from 'vue-router'

const router = useRouter()
const input = useTemplateRef('hydra')
const canvas = useTemplateRef('canvas')

console.log(router.currentRoute.value)
onMounted(() => {
  input.value.width = window.innerWidth;    
  input.value.height = window.innerHeight;

  var hydra = new Hydra({canvas: input.value, detectAudio:true, makeGlobal: true}).synth

  let name = router.currentRoute.value.name
  mapping[name](hydra)
})

</script>

<template>
  <div>
    <canvas id="hydra" ref="hydra"></canvas>
    <TresCanvas ref="canvas" id="canvas" render-mode="on-demand">
      <TresPerspectiveCamera :position="[0, 0, 5]" />
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