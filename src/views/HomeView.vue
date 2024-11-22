<script setup>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
import HomeCard from '../components/HomeCard.vue'

const store=useStore()


var cards = [
  {
    title: "Square Kaleid",
    link: "squarekaleid",
    img: "./squarekaleid.png"
  },
] 
console.log(store)

var color = ref(store._state.data.color)
var text = ref(store._state.data.text)

var tabs = []

var commit = function(){
  tabs.forEach((tab) => {
    console.log(color)
    console.log(text)
    tab.abc(color, text)
  })
}

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
            <v-col cols="3"><ColorPicker v-model="color" format="hex"/></v-col>
          </v-row>
          <br>
          <Button label="OK" @click="commit()"></Button>
        </v-col>        
      </v-row>      
    </v-form>

    <nav>

      <HomeCard v-for="card in cards" 
        :title="card.title" 
        :link="card.link"
        :img="card.img"
        @addTab="(tab) => {
          tabs.push(tab)
        }">
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
