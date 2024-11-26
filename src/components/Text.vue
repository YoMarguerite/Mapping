<script setup lang="ts">
    import { useTexture } from '@tresjs/core';
    import { Text3D } from '@tresjs/cientos';
    import manualStore from '../store/manualStore';
    import { ref, computed } from 'vue';

    var color = ''
    var text = ''

    window.addEventListener('storage', (event) => {
        if(event.key == "colorMapping")
            color.value = event.newValue

        if(event.key == "textMapping")
            text.value = event.newValue
    });

    let storeValue = manualStore.getStore()
    color = ref(storeValue.colorMapping)
    text = ref(storeValue.textMapping)


    const matcapTexture = await useTexture([
        './texture.png',
    ]);

    var textDisplay = computed(() => text)
</script>

<template>
    <Text3D 
        font="./Bangers_Regular.json"
        :text="textDisplay"
        center
        need-updates>
        <TresMeshMatcapMaterial :matcap="matcapTexture" :color="'#'+color"/>
    </Text3D>
</template>