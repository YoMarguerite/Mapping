<script setup>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
import HomeCard from '../components/HomeCard.vue'

const store=useStore()

var cards = [
  {
    title: "oui",
    link: "squarekaleid",
    img: "./squarekaleid.png"
  },
] 
console.log(store)

var color = ref(store._state.data.color)
var text = ref(store._state.data.text)

watch(color, (newColor) => {
  store._state.data.color = newColor
})

watch(text, (newText) => {
  store._state.data.text = newText
})


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
      <v-row>
        <v-col>
          <v-text-field v-model="text" label="Texte à afficher"></v-text-field>
        </v-col>
        <v-col>
          <v-row justify="center">
            <v-col cols="5">Couleur du texte :</v-col>
            <v-col cols="5"><ColorPicker v-model="color" format="hex"/></v-col>
          </v-row>
        </v-col>
      </v-row>      
    </v-form>

    <nav>
      <!-- <RouterLink to="/thres" target="_blank">Go to Thres</RouterLink>
      <RouterLink to="/text" target="_blank">Go to Text</RouterLink> -->

      <RouterLink to="/thres">Go to Thres</RouterLink>
      <RouterLink to="/squarekaleid">Go to Text</RouterLink>

      <HomeCard v-for="card in cards" 
        :title="card.title" 
        :link="card.link"
        :img="card.img">
      </HomeCard>

      <!-- <v-row>
        <v-col><HomeCard></HomeCard></v-col>
        <v-col><HomeCard></HomeCard></v-col>
        <v-col><HomeCard></HomeCard></v-col>        
      </v-row>

      <v-row>
        <v-col><HomeCard></HomeCard></v-col>
        <v-col><HomeCard></HomeCard></v-col>
        <v-col><HomeCard></HomeCard></v-col>        
      </v-row>

      <v-row>
        <v-col><HomeCard></HomeCard></v-col>
        <v-col><HomeCard></HomeCard></v-col>
        <v-col><HomeCard></HomeCard></v-col>        
      </v-row>

      <v-row>
        <v-col><HomeCard></HomeCard></v-col>
        <v-col><HomeCard></HomeCard></v-col>
        <v-col><HomeCard></HomeCard></v-col>        
      </v-row> -->


    </nav>
  </div>
</template>
