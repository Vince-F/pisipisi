<script setup lang="ts">
import { ref } from "vue";
import { QForm } from "quasar";
import { usePetsStore } from "../stores/petStore";

const petName = ref<string>("");
const displayed = ref<boolean>(false);
const form = ref<QForm | null>(null);

const petStore = usePetsStore();

function validateAndAddPet() {
  if (form.value) {
    form.value.validate(true)
      .then((valid) => {
        if (valid) {
          petStore.pets.push({
            id: Math.ceil(Math.random() * 10000).toString(),
            name: petName.value
          });
          petName.value = "";
          hideDialog();
        }
      });
  }
}

function hideDialog() {
  displayed.value = false;
}

function displayModal() {
  displayed.value = true;
}

defineExpose({
  displayModal
});
</script>

<template>
  <QDialog v-model="displayed" @hide="hideDialog">
    <QCard class="pet-form">
      <QCardSection>
        <h1>{{ $t("petsList.createPetTitle") }}</h1>
      </QCardSection>

      <QCardSection class="q-pt-none">
        <QForm ref="form">
          <QInput :label="$t('petsList.petInputLabel')" v-model="petName" :rules="[val => !!val || $t('petsList.needPetName')]" />
        </QForm>
      </QCardSection>
      
      <QCardActions align="right">
        <QBtn color="primary" label="OK" @click="validateAndAddPet" />
        <QBtn color="primary" label="Cancel" @click="hideDialog" />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<style scoped>
.pet-form {
  margin: 1rem;
}
</style>