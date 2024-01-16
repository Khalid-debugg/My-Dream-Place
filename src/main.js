import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index";
import dataPersistence from "./plugins/dataPersistencePlugin";
import VueAwesomePaginate from "vue-awesome-paginate";
import { useUserStore } from "./stores/userStore";
import "vue-awesome-paginate/dist/style.css";
import "./input.css";

const pinia = createPinia();
pinia.use(dataPersistence);
const app = createApp(App);
app.use(pinia);
app.use(VueAwesomePaginate);
app.use(router);

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    userStore.redirectedPath = to.fullPath;
    next("/auth/login");
  } else {
    next();
  }
});

app.mount("#app");
