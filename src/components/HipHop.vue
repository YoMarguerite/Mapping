<script setup lang="ts">
// import { ref } from 'vue'
// import { useAnimations, useGLTF } from '@tresjs/cientos'

// const { scene: model, animations } = await useGLTF(
//   'https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/ugly-naked-bunny/ugly-naked-bunny-animated.gltf',
// )

// const { actions } = useAnimations(animations, model)

// const currentAction = ref(actions.Greeting)

// currentAction.value.play()

import { useFBX } from '@tresjs/cientos'

const model = await useFBX('./HipHop.fbx')
console.log(model)

</script>

<template>
  <primitive :object="model" />
</template>