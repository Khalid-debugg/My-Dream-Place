import { defineStore } from "pinia";
import router from "../router/index";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      email: null,
      password: null,
      isAuthenticated: false,
      redirectedPath: "/",
      showModal: false,
    };
  },
  actions: {
    logIn(e, p) {
      this.email = e;
      this.password = p;
      this.isAuthenticated = true;
      router.push(this.redirectedPath || "/");
    },
    logOut() {
      this.email = null;
      this.password = null;
      this.isAuthenticated = false;
      this.showModal = false;
      this.redirectedPath = "/";
    },
  },
  persist: { storage: sessionStorage },
});
