<script setup lang="ts">
import { computed } from "vue";
import { usePetsStore } from "../stores/petStore";

const props = defineProps<{
  petId: string
}>();

const petsStore = usePetsStore();

const pet = computed(() => {
  return petsStore.getPetById(props.petId);
})

</script>

<template>
  <div>
    <QForm v-if="pet">
      <QInput :label="$t('petProfile.nameLabel')" v-model="pet.name" />
    </QForm>
    <h2>{{ $t("petProfile.veterinaryContact") }}</h2>
    Todo
  </div>
</template>