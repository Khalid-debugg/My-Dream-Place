import { defineStore } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const isAuthenticated = ref(false);

  function logIn(user) {
    user.value = user;
    isAuthenticated.value = true;
  }
  function logOut(user) {
    user.value = null;
    isAuthenticated.value = false;
  }
  return { user, isAuthenticated, logIn, logOut };
});
