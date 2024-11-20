<script setup lang="ts">
    import { useTexture } from '@tresjs/core';
    import { Text3D } from '@tresjs/cientos';
 

    const matcapTexture = await useTexture([
        './texture-red.png',
    ]);
</script>


<template>
    <Text3D 
        font="./Bangers_Regular.json"
        text="RABABOOM"
        center>
        <TresMeshMatcapMaterial :matcap="matcapTexture" />
    </Text3D>
</template>