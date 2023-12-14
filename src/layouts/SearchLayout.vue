<template>
  <div>
    <NavBar layout="Search" /> <SearchResults />
    <Restriction class="w-[85%] mx-auto" /> <Footer />
  </div>
</template>

<script setup>
</script>
<script>
import SearchResults from "../views/SearchResults.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Restriction from "../components/Restriction.vue";
export default {
  components: { SearchResults, NavBar, Footer, Restriction },
};
</script>
<style lang="scss" scoped>
</style>