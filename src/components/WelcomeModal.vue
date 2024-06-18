<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-10"
  >
    <div
      class="bg-white w-full sm:w-96 rounded-lg shadow-lg relative flex flex-col items-center justify-between gap-8 p-8"
    >
      <div
        class="bg-[url('../src/assets/images/Rectangle.png')] flex bg-no-repeat w-[245px] justify-center"
      >
        <img src="/assets/images/Frame-1.png" alt="" />
        <img src="/assets/images/Frame.png" alt="" />
      </div>
      <div class="flex flex-col items-center gap-3">
        <h1 class="font-[600] text-[20px]">Welcome to My Dream Place</h1>
        <p class="text-center font-[400] text-[14px] leading-[22.4px]">
          You can now enjoy your travel experience with easy access to resources
          and more
        </p>
      </div>
      <button
        @click="userStore.showModal = false"
        class="text-white text-center bg-[#2F80ED] w-full rounded-md p-2 hover:bg-blue-300"
      >
        Get started
      </button>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from "../stores/userStore";
const userStore = useUserStore();
</script>
<style></style>
