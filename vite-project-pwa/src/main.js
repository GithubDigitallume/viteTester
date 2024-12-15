import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
      onNeedRefresh() {
        console.log("onNeedRevfresh 1");
      },

      onOfflineReady() {
        console.log("onOfflineReady 1");
      },
})


const app = createApp(App);
createApp(App).mount('#app')