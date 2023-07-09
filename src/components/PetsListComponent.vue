<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { usePetsStore } from "../stores/petStore";
import NewPetModalComponent from "./NewPetModalComponent.vue";

const router = useRouter();

const createModal = ref<typeof NewPetModalComponent | null>(null);

const petStore = usePetsStore();

const pets = computed(() => petStore.pets);

function addPet() {
  if (createModal.value) {
    createModal.value.displayModal();
  }
}

function openPetProfile(id: string) {
  router.push({ name: "pet", params: { id }});
}
</script>

<template>
  <QList bordered>
    <QItem v-for="pet in pets" :key="pet.id" clickable v-ripple @click="openPetProfile(pet.id)">
      <QItemSection avatar>
        <QAvatar icon="pets" color="primary" />
      </QItemSection>

      <QItemSection>{{ pet.name }}</QItemSection>
    </QItem>
    <QSeparator v-if="pets.length > 0" />
    <QItem clickable v-ripple @click="addPet">
      <QItemSection avatar>
        <QIcon color="primary" name="add" />
      </QItemSection>

      <QItemSection>{{ $t("petsList.addPet") }}</QItemSection>
    </QItem>
  </QList>

  <NewPetModalComponent ref="createModal" />
</template>