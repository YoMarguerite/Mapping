<script setup>
import { computed, watch, ref, onMounted } from 'vue'
import HomeCard from '../components/HomeCard.vue'
import manualStore from '../store/manualStore'
import { useRouter } from 'vue-router'

const router = useRouter()

var cards = router.options.routes.filter((route) => route.hydra)

const color = ref("")
const text = ref("")
const reactSound = ref(true)
const slider = ref(0)
var max = 100
var min = 0

onMounted(() => {

  let storeValue = manualStore.getStore()
  console.log(storeValue)
  color.value = storeValue.colorMapping
  text.value = storeValue.textMapping
  reactSound.value = storeValue.reactSoundMapping
  slider.value = storeValue.amplitudeMapping

})

</script>

<template>
  <div class="pl-6">
    <div class="justify-center text-center flex-column mb-5">
      <h1>Hello les potos de RABABOOM !</h1>
        <br>
      <p>
        Voici une proposition de mapping à projeter
      </p>
      <p>
        Dîtes moi si ça vous plaît ou si vous avez d'autres idées
      </p>
      <p>
        Tout est modifiable suffit de me demander !
      </p>
      <br>
      <v-form>
        <v-row justify="center" >
          <v-col cols="3" class="d-flex flex-column">
            <v-text-field v-model="text" label="Texte à afficher"></v-text-field>
            <v-row justify="center">
              <v-col cols="3">{{ color }}</v-col>
              <v-col cols="1"></v-col>
              <v-col cols="3"><ColorPicker v-model="color"/></v-col>
            </v-row>
            <v-divider class="my-5"/>
            <v-row justify="center" align="center">
              <v-col cols="12"> Réagit au son : <input type="checkbox" v-model="reactSound"/></v-col>
            </v-row>           
            <v-row justify="center" align="center">
              <v-col cols="6">
                <v-text-field v-model="slider" label="Amplitude"></v-text-field>
              </v-col>
              <v-col cols="6">
                <Slider v-model="slider" :min="min" :max="max"/>
              </v-col>              
            </v-row>
            <br>
            <Button label="OK" @click="manualStore.setStore(color, text, slider, reactSound)"></Button>
          </v-col>        
        </v-row>      
      </v-form>
    </div>

    <v-row>
      <v-col cols="4" v-for="(card, i) in cards" :key="i">
        <HomeCard  
          :title="card.title" 
          :link="card.name"
          :img="'hydra/' + card.name + '.png'"
          >
        </HomeCard>
      </v-col>
    </v-row>    

  </div>
</template>

<style>
/* div{
  background-color: white;
} */
</style>