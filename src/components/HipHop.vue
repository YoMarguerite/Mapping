<script setup lang="ts">
import { useFBX } from '@tresjs/cientos'

const path = 'https://raw.githubusercontent.com/'
  + 'Tresjs/assets/main/models/fbx/low-poly-truck/Jeep_done.fbx'
const { scene } = await useFBX(path)

</script>

<template>
  <primitive
    :object="scene"
    :scale="0.025"
  />
</template>