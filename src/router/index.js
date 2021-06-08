import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import Panier from "@/views/panier.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/panier",
    name: "Panier",
    component: Panier,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;