<script setup>
import { computed, watch, ref } from 'vue'
import HomeCard from '../components/HomeCard.vue'
import manualStore from '../store/manualStore'
import { useRouter } from 'vue-router'

const router = useRouter()

var cards = router.options.routes.filter((route) => route.hydra)

var color = ""
var text = ""

let storeValue = manualStore.getStore()
color = ref(storeValue.colorMapping)
text = ref(storeValue.textMapping)


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
            <br>
            <Button label="OK" @click="manualStore.setStore(color, text)"></Button>
          </v-col>        
        </v-row>      
      </v-form>
    </div>

    <v-row>
      <v-col cols="4" v-for="(card, i) in cards" :key="i">
        <HomeCard  
          :title="card.title" 
          :link="card.name"
          :img="card.name + '.png'"
          >
        </HomeCard>
      </v-col>
    </v-row>    

  </div>
</template>
