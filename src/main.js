import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify.js'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import ColorPicker from 'primevue/colorpicker';



const app = createApp(App)
app.use(store)
app.use(router)
app.use(vuetify)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('ColorPicker', ColorPicker);

app.mount('#app')
