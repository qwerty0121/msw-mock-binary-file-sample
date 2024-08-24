<script setup>
import { ref } from "vue";

const imageUrl = ref();

fetch("/api/image/1")
  .then((response) => response.blob())
  .then((blob) => (imageUrl.value = URL.createObjectURL(blob)));
</script>

<template>
  <div v-if="!imageUrl">Now Loading ...</div>
  <img v-else class="image-preview" :src="imageUrl"></img>
</template>

<style scoped>
.image-preview {
  width: 100%;
}
</style>