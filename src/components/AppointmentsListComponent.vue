<script setup lang="ts">
import { } from "vue";
import { usePlanningStore } from "../stores/planningStore";
import { computed } from "vue";
import { Appointment } from "../models/appointment";

const props = defineProps<{
  petId: string;
}>();

const planningStore = usePlanningStore();

const appointments = computed(() => {
  return planningStore.getAppointmentsByPetId(props.petId);
});

const groupedAppointments = computed(() => {
  const groupedAppointments: Map<string, Appointment[]> = new Map();
  appointments.value.forEach((appt) => {
    const key = `${appt.date.getMonth() + 1}/${appt.date.getFullYear()}`;
    if (!groupedAppointments.has(key)) {
      groupedAppointments.set(key, []);
    }
    groupedAppointments.get(key)?.push(appt);
  });
  for (const appts of groupedAppointments.values()) {
    appts.sort((a, b) => a.date.getTime() - b.date.getTime());
  }
  return groupedAppointments;
});

const orderedMonths = computed(() => {
  const months = Array.from(groupedAppointments.value.keys());
  months.sort((a, b) => {
    const [aMonth, aYear] = a.split("/");
    const [bMonth, bYear] = b.split("/");
    if (aYear === bYear) {
      return parseInt(aMonth) - parseInt(bMonth);
    } else {
      return parseInt(aYear) - parseInt(bYear);
    }
  });
  return months
});
</script>

<template>
  <div v-for="month in orderedMonths" :key="month">
    <h2>{{ month }}</h2>
    <QList bordered separator>
      <QItem v-for="appointment in groupedAppointments.get(month)" :key="appointment.id">
        <QItemSection>
          <QItemLabel>{{ appointment.name }}</QItemLabel>
          <QItemLabel caption> {{ appointment.contactName }}, {{ appointment.contactAddress }} </QItemLabel>
        </QItemSection>

        <QItemSection side top>
          <QItemLabel caption>{{ appointment.date.toLocaleString() }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </div>
</template>