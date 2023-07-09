<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import DocumentsListComponent from "../components/DocumentsListComponent.vue";

const route = useRoute();

const petId = computed(() => {
  return Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
})
</script>

<template>
  <h1>Documents</h1>
  <DocumentsListComponent :petId="petId" />
</template>