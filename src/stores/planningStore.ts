import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { Appointment } from "../models/appointment";

export const usePlanningStore = defineStore("planningStore", () => {
  const appointments = ref<Appointment[]>([]);

  const getAppointmentsByPetId = computed(() => {
    return (petId: string) => {
      return appointments.value.filter((appointment) => appointment.petId === petId);
    }
  });

  return {
    appointments,
    getAppointmentsByPetId
  }
});