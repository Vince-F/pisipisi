<script setup lang="ts">
import { computed } from "vue";
import { useDocumentsStore } from "../stores/documentsStore";

const props = defineProps<{
  docId: string;
}>();

const documentStore = useDocumentsStore();

const document = computed(() => {
  return documentStore.getDocumentById(props.docId);
})
</script>

<template>
  <h2>{{ document?.name }} ({{document?.date.toLocaleDateString()}})</h2>
  <iframe class="document-frame" :src="document?.uri"></iframe>
</template>

<style scoped>
.document-frame {
  width: 100%;
  height: 30rem;
}
</style>