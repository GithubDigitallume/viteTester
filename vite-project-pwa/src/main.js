import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//import { registerSW } from 'virtual:pwa-register'
//const intervalMS = 60 * 60;
//const updateSW = registerSW({

//    onRegistered(r) {
//      r && setInterval(() => {
//         console.log("running r.update()");
//         r.update()
//      }, intervalMS)
//    },

//    onNeedRefresh() {
//        console.log("onNeedRevfresh 8");
//        updateSW();
//    },

//    onOfflineReady() {
//        console.log("onOfflineReady 8");
//    },
//})

const app = createApp(App);
createApp(App).mount('#app')