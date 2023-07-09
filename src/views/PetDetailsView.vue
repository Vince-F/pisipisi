<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import PetDetailsComponent from "../components/PetDetailsComponent.vue";

const route = useRoute();

const petId = computed(() => {
  return Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
})
</script>

<template>
  <h1>Details</h1>
  <PetDetailsComponent :petId="petId" />
</template>