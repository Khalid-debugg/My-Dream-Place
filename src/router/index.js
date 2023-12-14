import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import SearchLayout from "../layouts/SearchLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import CheckoutLayout from "../layouts/CheckoutLayout.vue";
import NotFound from "../layouts/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        { path: "", component: () => import("@/views/HomeView.vue") },

        {
          path: "product/:id",
          component: () => import("@/views/ProductDetails.vue"),
        },
        { path: "trips", component: () => import("@/views/MyTrips.vue") },
      ],
    },
    {
      path: "/search",
      component: SearchLayout,
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "",
          component: () => import("@/views/auth/SignUp.vue"),
        },
        {
          path: "login",
          component: () => import("@/views/auth/LogIn.vue"),
        },
      ],
    },
    {
      path: "/checkout",
      component: CheckoutLayout,
      children: [
        {
          path: "",
          component: () => import("@/views/CheckoutView.vue"),
        },
      ],
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

export default router;
