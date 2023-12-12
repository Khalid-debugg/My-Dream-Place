<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { NavBar, Footer },
};
</script>
<script setup>
</script>

<style lang="scss" scoped>
</style>