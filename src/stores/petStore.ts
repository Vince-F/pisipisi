import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { Pet } from "../models/pet";

export const usePetsStore = defineStore("petsStore", () => {
  const pets = ref<Pet[]>([]);

  const getPetById = computed(() => {
    return (id: string) => {
      return pets.value.find((pet) => pet.id === id);
    }
  })

  return {
    pets,
    getPetById
  }
});