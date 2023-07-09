<script setup lang="ts">
import { computed, ref } from "vue";
import { useDocumentsStore } from "../stores/documentsStore";
import DocumentComponent from "./DocumentComponent.vue";

const props = defineProps<{
  petId: string;
}>();

const selectedDocId = ref<string>("");

const documentStore = useDocumentsStore();

const documents = computed(() => {
  return documentStore.getDocumentByPetId(props.petId);
});

function addDocument() {

}

function openDocument(docId: string) {
  selectedDocId.value = docId;
}
</script>

<template>
  <DocumentComponent v-if="selectedDocId" :docId="selectedDocId" />
  <QList v-else bordered separator>
    <QItem v-for="doc in documents" :key="doc.id" clickable v-ripple @click="openDocument(doc.id)">
      <QItemSection>{{ doc.name }}, {{ doc.date.toLocaleDateString() }}</QItemSection>
    </QItem>
    <QItem clickable v-ripple @click="addDocument">
      <QItemSection avatar>
        <QIcon color="primary" name="add" />
      </QItemSection>

      <QItemSection>{{ $t("documentsList.addDocument") }}</QItemSection>
    </QItem>
  </QList>
</template>
