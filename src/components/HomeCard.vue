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
  emit('addTab', tab)
}

</script>

<template>
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
          <v-img
            class="align-end text-white"
            height="200"
            :src="img"
            cover
          >            
          </v-img>
      </template>
      <template #title>{{ title }}</template>
      <template #footer>
        <Button as="router-link" :to="{name: link}" >
            Go To
            <i class="pi pi-eye"></i>
          </Button>
          <Button @click="redirect(link)">
            Open Tab
            <i class="pi pi-eye"></i>
          </Button>
      </template>
    </Card>  
</template>

