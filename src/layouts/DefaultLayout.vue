<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <router-view></router-view>
    <Footer :theme="theme" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import BookingModal from "../components/BookingModal.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { NavBar, Footer, BookingModal },
};
</script>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const theme = computed(() => {
  if (
    useRoute().fullPath === "/trips" ||
    useRoute().fullPath.includes("/hotel")
  ) {
    return "gray";
  }
  return "";
});
console.log(useRoute());
</script>

<style lang="scss" scoped></style>
