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
      currentHotel: null,
      shoppingCart: null,
      trips: [],
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
  persist: {
    afterRestore: (ctx) => {
      if (window.sessionStorage.getItem("user")?.shoppingCart) {
        ctx.store.shoppingCart.checkInDate = new Date(
          JSON.parse(
            window.sessionStorage.getItem("user")
          ).shoppingCart.checkInDate
        );
        ctx.store.shoppingCart.checkOutDate = new Date(
          JSON.parse(
            window.sessionStorage.getItem("user")
          ).shoppingCart.checkOutDate
        );
      }
    },
    storage: sessionStorage,
  },
});
