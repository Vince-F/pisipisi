<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePetsStore } from "../stores/petStore";
import { QAvatar } from "quasar";

const petStore = usePetsStore();
const route = useRoute();
const router = useRouter();
const petId = computed(() => {
  return Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
});

const pet = computed(() => {
  return petStore.getPetById(petId.value);
});

function goBack() {
  router.back();
}
</script>

<template>
  <QToolbar class="text-primary" v-if="pet">
    <QBtn flat round dense icon="arrow_back_ios" @click="goBack" />
    <QToolbarTitle>
      <QAvatar icon="pets" />
      {{ pet.name }}
    </QToolbarTitle>
    <QBtn flat round dense icon="more_vert" />
  </QToolbar>
  <RouterView />
</template>