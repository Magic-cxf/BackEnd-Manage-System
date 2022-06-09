<template>
  <div>{{ info }}</div>
</template>
<script setup lang="ts">
import { ref } from "vue"
const info = ref("hello world")
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
