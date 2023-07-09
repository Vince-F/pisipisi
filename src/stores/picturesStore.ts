import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { Picture } from "../models/picture";

export const usePicturesStore = defineStore("picturesStore", () => {
  const pictures = ref<Picture[]>([]);

  const getPicturesByPetId = computed(() => {
    return (petId: string) => {
      return pictures.value.filter((picture) => {
        return picture.petId === petId
      });
    }
  });

  return {
    pictures,
    getPicturesByPetId
  }
});
