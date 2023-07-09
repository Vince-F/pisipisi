<script setup lang="ts">
import { useRoute } from "vue-router";
import PicturesListComponent from "../components/PicturesListComponent.vue";
import { computed } from "vue";

const route = useRoute();

const petId = computed(() => {
  return Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
})
</script>

<template>
  <h1>Pictures</h1>
  <PicturesListComponent :petId="petId" />
</template>