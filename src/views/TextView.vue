<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos'
import Hydra from 'hydra-synth';
import Text from '../components/Text.vue';

const input = useTemplateRef('hydra')
const canvas = useTemplateRef('canvas')



onMounted(() => {
  console.log(canvas)
  input.value

  var hydra = new Hydra({canvas: input.value, detectAudio:false, makeGlobal: true}).synth

  // osc(40,0.2,8)
  //         .modulateScale(osc(80,0,1).kaleid(100))
  //         .repeat(2,4)
  //         .modulate(o0,0.05)
  //         .modulateKaleid(shape(4,0.1,1))
  //         .out(o0)
        
  // osc(60,-0.015,0.3).diff(osc(60,0.08).rotate(Math.PI/2))
  //           .modulateScale(noise(3.5,0.25).modulateScale(osc(15).rotate(()=>Math.sin(time/2))),0.6)
  //           .color(1,0.5,0.4).contrast(1.4)
  //           .add(src(o1).modulate(o1,.04),.6)
  //           .invert().brightness(0.1).contrast(1.2)
  //           .modulateScale(osc(2),-0.2)
  //           .out(o1)

  // osc(20, 0.01, 1.1)
  //         .kaleid(5)
  //         .color(2.83,0.91,0.39)
  //         .rotate(0, 0.1)
  //         .modulate(o2, () => mouse.x * 0.0003)
  //         .scale(1.01)
  //         .out(o2)

  // osc(100, 0.01, 1.4)
  //         .rotate(0, 0.1)
  //         .mult(osc(10, 0.1).modulate(osc(10).rotate(0, -0.1), 1))
  //         .color(2.83,0.91,0.39)
  //         .out(o3)
          
       

  //       voronoi(350,0.15)
  // 	.modulateScale(osc(8).rotate(Math.sin(time)),.5)
  // 	.thresh(.8)
	// .modulateRotate(osc(7),.4)
	// .thresh(.7)
  // 	.diff(src(o0).scale(1.8))
	// .modulateScale(osc(2).modulateRotate(o0,.74))
	// .diff(src(o0).rotate([-.012,.01,-.002,0]).scrollY(0,[-1/199800,0].fast(0.7)))
	// .brightness([-.02,-.17].smooth().fast(.5))
	// .out()

  hydra.osc(20, 0.03, 1.7).kaleid().mult(osc(20, 0.001, 0).rotate(1.58)).blend(o0, 0.94).modulateScale(osc(10, 0),-0.03).scale(0.8, () => (1.05 + 0.1 * Math.sin(0.05*time))).out()

//   shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7].smooth(1))
// .color(0.2,0.4,0.3)
// .scrollX(()=>Math.sin(time*0.27))
// .add(
//   shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1))
//   .color(0.6,0.2,0.5)
//   .scrollY(0.35)
//   .scrollX(()=>Math.sin(time*0.33)))
// .add(
//   shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1))
//   .color(0.2,0.4,0.6)
//   .scrollY(-0.35)
//   .scrollX(()=>Math.sin(time*0.41)*-1))
// .add(
//       src(o0).shift(0.001,0.01,0.001)
//       .scrollX([0.05,-0.05].fast(0.1).smooth(1))
//       .scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1))
//       ,0.85)
// .modulate(voronoi(10,2,2))
// .out()


// osc(3, 0.01, 0.4)
// .color(1.2,1.2,1.3)
// .saturate(0.4)
// .modulateRepeat(osc(2),1, 2, 4, 3)
// .modulateKaleid(osc(12,0.05,0),1)
// .luma (0.4)
// .rotate(4, 0.1,0)
// .modulate(o0, () => mouse.y *0.0002 )
// .scale(1).diff(o1)
// .out(o0)

// voronoi(2,0.3,0.2).shift(0.5)
// .modulatePixelate(voronoi(4,0.2),32,2)
// .scale(()=>1+(Math.sin(time*2.5)*0.05))
// .diff(voronoi(3).shift(0.6))
// .diff(osc(2,0.15,1.1).rotate())
// .brightness(0.1).contrast(1.2).saturate(1.2)
// 	.out()
// speed = 0.8

// osc(13,0,1)
//   .kaleid()
//   .mask(shape(4,0.3,1))
//   .modulateRotate(shape(4,0.1,1))
//   .modulateRotate(shape(4,0.1,0.9))
//   .modulateRotate(shape(4,0.1,0.8))
//   .scale(0.3)
//   .add(shape(4,0.2,1).color(0.3,1,1,0.5))
//   .rotate(()=>time)
//   .out()

// render()

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
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#canvas {
  height: 100% !important;
  width: 100% !important;
}
#hydra{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
</style>