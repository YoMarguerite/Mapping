<script setup>
import { computed } from 'vue'
import HomeCard from '../components/HomeCard.vue'

var cards = [
  {
    title: "oui",
    link: "squarekaleid",
    img: "./squarekaleid.png"
  },
] 

var color = '#4287f5'
var	menu = false


const swatchStyle = computed(() => {
  return {
    backgroundColor: color,
    cursor: 'pointer',
    height: '30px',
    width: '30px',
    borderRadius: menu ? '50%' : '4px',
    transition: 'border-radius 200ms ease-in-out'
  }
})

</script>

<template>
  <div class="d-flex justify-center text-center flex-column">
    <h1>Hello les potos de RABABOOM !</h1>
    <p>
      Voici une proposition de mapping à projeter
    </p>
    <p>
      Dîtes mois si ça vous plaît ou si vous avez d'autres idées
    </p>
    <p>
      Tout est modifiable suffit de me demander !
    </p>
    <v-row justify="center" align="center">
			<v-col class="shrink" style="min-width: 220px;">
				<v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn
              :color="color"
              dark
              v-bind="props"
            >
              {{ color }}
            </v-btn>
          </template>
          <v-color-picker
            v-model="color"
            hide-canvas 
            hide-inputs 
            class="mx-auto"
          ></v-color-picker>
        </v-menu>
			</v-col>
		</v-row>
    <!-- <v-color-picker :modes="['hexa']"></v-color-picker>
    <v-row>
      <v-col>
        <v-text-field label="Texte à afficher"></v-text-field>
      </v-col>
      <v-col>
        
      </v-col>
    </v-row> -->
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
