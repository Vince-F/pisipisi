import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PetView from "../views/PetView.vue";
import PetMenuView from "../views/PetMenuView.vue";
import PetDetailsView from "../views/PetDetailsView.vue";
import PetDocumentsView from "../views/PetDocumentsView.vue";
import PetPicturesView from "../views/PetPicturesView.vue";
import PetPlanningView from "../views/PetPlanningView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/pet/:id",
    component: PetView,
    children: [
      {
        path:"",
        name: "pet",
        component: PetMenuView
      },
      {
        path: "details",
        name: "petDetails",
        component: PetDetailsView
      },
      {
        path: "documents",
        name: "petDocuments",
        component: PetDocumentsView
      },
      {
        path: "pictures",
        name: "petPictures",
        component: PetPicturesView
      },
      {
        path: "planning",
        name: "petPlanning",
        component: PetPlanningView
      }
    ]
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
