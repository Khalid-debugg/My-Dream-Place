import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import SearchLayout from "../layouts/SearchLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import CheckoutLayout from "../layouts/CheckoutLayout.vue";
import NotFound from "../layouts/NotFound.vue";
import { useUserStore } from "../stores/userStore";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        { path: "", component: async () => await import("../views/HomeView.vue") },

        {
          path: "hotel/:id",
          component: async () => await import("../views/HotelDetails.vue"),
        },
        {
          path: "trips",
          component: async () => await import("../views/MyTrips.vue"),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "/search/results",
      component: SearchLayout,
      name: "search",
      meta: { requiresAuth: true },
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "signup",
          component: async () => await import("../views/auth/SignUp.vue"),
        },
        {
          path: "login",
          component: async() => await import("../views/auth/LogIn.vue"),
        },
      ],
    },
    {
      path: "/checkout",
      component: CheckoutLayout,
      children: [
        {
          path: "",
          component: async() => await import("../views/CheckoutView.vue"),
        },
      ],
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

export default router;
