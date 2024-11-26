<script setup>
import { computed, watch, ref } from 'vue'
import HomeCard from '../components/HomeCard.vue'
import manualStore from '../store/manualStore'

var cards = [
  {
    title: "Square Kaleid",
    link: "squarekaleid",
    img: "./squarekaleid.png"
  },
  {
    title: "Voronoi",
    link: "voronoi",
    img: "./voronoi.png"
  },
  {
    title: "Color",
    link: "color",
    img: "./voronoi.png"
  },
  {
    title: "Saturate",
    link: "saturate",
    img: "./voronoi.png"
  },
] 

var color = ""
var text = ""

let storeValue = manualStore.getStore()
color = ref(storeValue.colorMapping)
text = ref(storeValue.textMapping)


</script>

<template>
  <div class="d-flex justify-center text-center flex-column pa-10">
    <h1>Hello les potos de RABABOOM !</h1>
    <br>
    <p>
      Voici une proposition de mapping à projeter
    </p>
    <p>
      Dîtes mois si ça vous plaît ou si vous avez d'autres idées
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

    <nav>

      <v-row>
        <v-col cols="4" v-for="card in cards">
          <HomeCard  
            :title="card.title" 
            :link="card.link"
            :img="card.img"
            >
          </HomeCard>
        </v-col>
      </v-row>
    
    </nav>
  </div>
</template>
