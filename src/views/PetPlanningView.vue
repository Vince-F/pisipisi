<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppointmentsListComponent from "../components/AppointmentsListComponent.vue";

const route = useRoute();

const petId = computed(() => {
  return Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
});
</script>

<template>
  <h1>Planning</h1>
  <AppointmentsListComponent :petId="petId" />
</template>