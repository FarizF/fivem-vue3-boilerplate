import { createRouter, createWebHashHistory } from "vue-router";
import CharacterSelectView from "@/views/select/CharacterSelectView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "charselect",
      component: CharacterSelectView,
    },
  ],
});

export default router;
