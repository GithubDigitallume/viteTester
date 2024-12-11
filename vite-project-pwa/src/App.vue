<script setup>

  import { reactive  } from 'vue';
  import { provide   } from 'vue';
 
   var globalStore = reactive({
     count: 0,
     message: 'Hello from the global store!'
  });

  
  provide('appStore', globalStore);

  import HelloWorld    from './components/HelloWorld.vue'
  import ComGlobalOne  from './components/ComGlobalOne.vue'
  import ComGlobalTwo  from './components/ComGlobalTwo.vue'

</script>

<template>

  <div>
    <ComGlobalOne />
    <ComGlobalTwo />
  </div>

  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <div>
    <HelloWorld msg="Vite + Vue + pwa" />
  </div>

</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
