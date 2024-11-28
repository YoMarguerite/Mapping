<script setup lang="ts">
    import { useTexture } from '@tresjs/core';
    import { Text3D } from '@tresjs/cientos';
    import manualStore from '../store/manualStore';
    import { ref, computed } from 'vue';

    const color = ref('')
    const text = ref('')
    var amplitude = 0
    var reactSound = true

    window.addEventListener('storage', (event) => {
        if(event.key == "colorMapping")
            color.value = event.newValue

        if(event.key == "textMapping")
            text.value = event.newValue

        if(event.key == "amplitudeMapping")
            amplitude = event.newValue / 100

        if(event.key == "reactSoundMapping")
            reactSound = event.newValue
    });

    let storeValue = manualStore.getStore()
    color.value = storeValue.colorMapping
    text.value = storeValue.textMapping
    amplitude = storeValue.amplitude / 100
    reactSound = storeValue.reactSound

    const matcapTexture = await useTexture([
        './texture.png',
    ]);

    var textDisplay = computed(() => text)

    var size = ref(1)
    console.log(a.vol)
    setInterval(()=>{
        if(reactSound){
            let ampl = isNaN(amplitude) ? 0 : amplitude
            size.value = 1+ Math.pow(a.vol,1 + ampl)/100
        }else{
            size.value = 1
        }        
    })

</script>

<template>
    <Text3D 
        font="./Bangers_Regular.json"
        :text="textDisplay"
        :size="size"
        center
        need-updates>
        <TresMeshMatcapMaterial :matcap="matcapTexture" :color="'#'+color"/>
    </Text3D>
</template>