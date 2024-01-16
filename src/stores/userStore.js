import { defineStore } from "pinia";
import { ref } from "vue";
import router from "../router/index";
export const useUserStore = defineStore("user", () => {
  const email = ref(null);
  const password = ref(null);
  const isAuthenticated = ref(false);
  const redirectedPath = ref(null);
  function logIn(e, p) {
    email.value = e;
    password.value = p;
    isAuthenticated.value = true;
    router.push(redirectedPath.value || "/");
  }
  function logOut() {
    email.value = null;
    password.value = null;
    isAuthenticated.value = false;
  }
  return { email, password, isAuthenticated, redirectedPath, logIn, logOut };
});
