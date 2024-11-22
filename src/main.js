import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify.js'

import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import ColorPicker from 'primevue/colorpicker';
import Card from 'primevue/card';
import Button from 'primevue/button';


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
app.component('Card', Card);
app.component('Button', Button);

app.mount('#app')
