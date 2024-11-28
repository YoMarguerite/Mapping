<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const emit = defineEmits(['addTab'])

const props = defineProps({
  title: String,
  link: String,
  img: String
})

var redirect = function(name){
  const routeData = router.resolve({name: name});
  var tab = window.open(routeData.href, '_blank')
}

</script>

<template>
    <Card style="height:300px;">
      <template #header>
          <v-img
            class="align-end text-white"
            :src="img"
            cover
            height="200px"
          >            
          </v-img>
      </template>
      <template #content>
        <v-row  align="center">
          <v-col><h3>{{ title }}</h3></v-col>
          <v-col>
            <Button @click="redirect(link)">
              Open Tab
              <i class="pi pi-eye"></i>
            </Button>
          </v-col>

        </v-row>
        
        <!-- <Button as="router-link" :to="{name: link}" >
            Go To
            <i class="pi pi-eye"></i>
          </Button> -->
          
      </template>
    </Card>  
</template>

