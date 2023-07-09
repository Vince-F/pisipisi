<script setup lang="ts">
import {  } from "vue";
import { usePicturesStore } from "../stores/picturesStore";
import { computed } from "vue";

const props = defineProps<{
  petId: string
}>();

const picturesStore = usePicturesStore();

const pictures = computed(() => {
  return picturesStore.getPicturesByPetId(props.petId);
})
</script>

<template>
<img class="pet-picture" v-for="picture in pictures" :key="picture.id" :src="picture.uri" />
</template>

<style scoped>
.pet-picture {
  max-width: 10rem;
}
</style>