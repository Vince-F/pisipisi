<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goToDetail() {
  router.push({ name: "petDetails" });
}

function goToPlanning() {
  router.push({ name: "petPlanning" });
}

function goToDocument() {
  router.push({ name: "petDocuments" });
}

function goToPictures() {
  router.push({ name: "petPictures" });
}
</script>

<template>
  <div class="navigation-card-container">
    <div class="navigation-card navigation-card-orange" @click="goToDetail">
      <QIcon name="pets" color="white" size="3rem" />
      <div>
        {{ $t("petProfile.details") }}
      </div>
    </div>
    <div class="navigation-card navigation-card-blue" @click="goToPlanning">
      <QIcon name="event" color="white" size="3rem" />
      <div>
        {{ $t("petProfile.planning") }}
      </div>
    </div>
    <div class="navigation-card navigation-card-green" @click="goToDocument">
      <QIcon name="description" color="white" size="3rem" />
      <div>
        {{ $t("petProfile.documents") }}
      </div>
    </div>
    <div class="navigation-card navigation-card-red" @click="goToPictures">
      <QIcon name="collections" color="white" size="3rem" />
      <div>
        {{ $t("petProfile.pictures") }}
      </div>
    </div>
  </div>
</template>

<style scoped>

.navigation-card-container {
  display: grid;
  grid: auto-flow / 1fr;
  gap: 1rem;
  place-items: center;
}

@media (min-width: 30rem) {
  .navigation-card-container {
    grid: auto-flow / 1fr 1fr;
  }
}

.navigation-card {
  height: 12rem;
  width: 12rem;
  padding: 1rem;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
}

.navigation-card-orange {
  background: rgb(217, 82, 43);
}
.navigation-card-blue {
  background: rgb(91, 57, 181);
}
.navigation-card-green {
  background: rgb(0, 137, 0);
}
.navigation-card-red {
  background: rgb(188, 29 ,73);
}
</style>