<template>
  <div class="relative mx-auto overflow-hidden">
    <img :src="`../src/assets/images/Home/${imgLink}`" :alt="header" />
    <div class="flex flex-col gap-2 absolute bottom-0 p-5 text-white">
      <p class="text-[20px] font-[600]">
        {{ header }}
      </p>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["header", "description", "imgLink"]);
</script>

<style lang="scss" scoped>
</style>