<template>
  <NavBar />
  <router-view></router-view>
  <Footer :theme="theme" />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { NavBar, Footer },
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
