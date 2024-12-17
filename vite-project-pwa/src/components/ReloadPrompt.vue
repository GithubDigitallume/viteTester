<script setup>

import { registerSW } from 'virtual:pwa-register'
import { ref }        from 'vue'

const intervalMS   = 60 * 60;
const offlineReady = ref(false);
const needRefresh  = ref(false);

const updateSW = registerSW({

    onRegistered(r) {
      r && setInterval(() => {
         console.log("running r.update()");
         r.update()
      }, intervalMS)
    },

    onNeedRefresh() {
        console.log("onNeedRevfresh 8");
        needRefresh.value = true;
    },

    onOfflineReady() {
        offlineReady.value = true;
        console.log("onOfflineReady 8");
    },
})

async function close() {
  offlineReady.value = false
  needRefresh.value  = false
}

</script>

<template>
 
   <div
    v-if="offlineReady || needRefresh"
    class="pwa-toast"
    role="alert"
  >
    <div class="message">
      <span v-if="offlineReady">
        App ready to work offline
      </span>
      <span v-else>
        New content available, click on reload button to update.
      </span>
    </div>
    <button v-if="needRefresh" @click="updateSW()">
      Reload
    </button>
    <button @click="close">
      Close
    </button>
  </div>
</template>


<style>
.pwa-toast {
  position: fixed;
  right: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}
.pwa-toast .message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>