<script setup>
 
  import { inject } from 'vue'
  const appStore = inject('appStore');
  
  function increment(method) {
 
    if ( method == "increment")
       appStore.count++
    else
       appStore.count--
    
   }

</script>


<template>
  <div>
      <p>ComGlobalOne</p>
      <p>Message : {{ appStore.message}} sfsdgf</p>
      <p>Count   : {{ appStore.count  }} sdfsfd</p>

    <div class="buttons">
      <button @click="increment('increment')">Increment</button>
      <button @click="increment('decrement')">Decrement</button>
    </div>

</div>
</template>

<style scoped>
.buttons {
  display: flex;
  justify-content: space-between;
}
</style>