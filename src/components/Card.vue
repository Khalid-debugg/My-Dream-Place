<template>
  <div class="flex flex-col gap-2 mx-auto">
    <img
      :src="`/assets/images/Home/${imgLink}`"
      :alt="placeName"
      loading="lazy"
    />
    <div>
      <p class="text-[20px] font-[600]">{{ placeName }}</p>
      <p class="text-[14px]">{{ propertiesNum }} properties</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["placeName", "imgLink", "propertiesNum"]);
</script>

<style lang="scss" scoped>
</style>