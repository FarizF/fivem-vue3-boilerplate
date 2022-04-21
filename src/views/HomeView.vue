<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue';

let data: null | string;

window.addEventListener('message', event => {
  console.log(event.data);
  data = event.data;
});
</script>

<template>
  <main>
    {{ data }}
    <TheWelcome />
  </main>
</template>
