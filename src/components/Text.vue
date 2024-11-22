<script setup lang="ts">
    import { useTexture } from '@tresjs/core';
    import { Text3D } from '@tresjs/cientos';

    const props = defineProps({
        color: String,
        text: String
    })
 

    const matcapTexture = await useTexture([
        './texture-red.png',
    ]);
</script>

<template>
    <Text3D 
        font="./Bangers_Regular.json"
        :text="text"
        center>
        <TresMeshMatcapMaterial :matcap="matcapTexture" :color="color"/>
    </Text3D>
</template>