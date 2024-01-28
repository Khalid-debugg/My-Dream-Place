<template>
  <div
    class="bg-Gray bg-opacity-50 fixed inset-0 z-10 flex justify-center items-center"
  >
    <div
      class="bg-white flex flex-col items-center gap-10 p-8 rounded-md w-full sm:w-[27rem]"
    >
      <div
        class="w-[240px] bg-[#6FCF97] bg-opacity-20 rounded-md p-8 flex justify-center items-center"
      >
        <img src="../assets/images/successfull.png" alt="" />
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="font-[600] text-[20px] text-center">Booking Successful</h1>
        <p class="text-center text-[#4F4F4F]">
          Congratulations your reservation has been made. You will be notified 2
          days prior the date.
        </p>
      </div>
      <button
        class="text-white font-[500] text-[15px] bg-[#2F80ED] w-full p-3 rounded"
        @click="
          $emit('closeModal');
          router.push('/trips');
        "
      >
        View Trip
      </button>
    </div>
  </div>
</template>

<script setup>
import router from "../router";
</script>

<style lang="scss" scoped></style>
