import { createApp } from 'vue'
import App from './App.vue'
import sandiUI from "../es/index.mjs"
const app =createApp(App);
app.use(sandiUI)
app.mount('#app')
