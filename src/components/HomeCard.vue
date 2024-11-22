<script setup>

const props = defineProps({
  title: String,
  link: String,
  img: String
})

</script>

<template>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="align-end text-white"
        height="200"
        :src="img"
        cover
      >
        
      </v-img>
  
      <!-- <v-card-subtitle class="pt-4">
        Number 10
      </v-card-subtitle> -->
  
      <!-- <v-card-text>
        <div>Whitehaven Beach</div>
  
        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text> -->
  
      <v-card-actions>
        <v-card-title>{{ title }}</v-card-title>
        <v-btn color="orange" text="Share">OUI</v-btn>
  
        <v-btn color="orange" text="Explore"></v-btn>
      </v-card-actions>
    </v-card>
  </template>