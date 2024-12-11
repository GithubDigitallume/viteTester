<script setup>
  import { inject } from 'vue'
  const appStore = inject('appStore');
</script>

<template>
  <div>
      <p>ComGlobalTwo</p>
      <p>Message: {{ appStore.message}}sfsdgf</p>
      <p>Count  : {{ appStore.count  }} sdfsfd</p>
  </div>

</template>