import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { Document } from "../models/document";

export const useDocumentsStore = defineStore("documentsStore", () => {
  const documents = ref<Document[]>([]);

  const getDocumentByPetId = computed(() => {
    return (petId: string) => {
      return documents.value.filter((doc) => {
        return doc.petId === petId;
      });
    }
  });

  const getDocumentById = computed(() => {
    return (id: string) => {
      return documents.value.find((doc) => doc.id === id);
    }
  })

  return {
    documents,
    getDocumentByPetId,
    getDocumentById
  }
});