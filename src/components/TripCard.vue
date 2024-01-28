<template>
  <div
    class="flex flex-wrap items-center w-[80%] mx-auto rounded-md overflow-hidden bg-white gap-5 p-5"
  >
    <img
      :src="photoUrl"
      alt=""
      class="w-[285px] h-[200px] object-cover rounded-md"
    />
    <div class="flex flex-wrap justify-between flex-1">
      <div class="bg-white flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <p class="font-[500] text-[18px]">{{ hotelName }}</p>
          <Review :review-count="5" :review-score="5" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-red-400">Non refundable</p>
          <p>Check in: {{ formatCustomDate(checkInDate) }}</p>
          <p>Check out: {{ formatCustomDate(checkOutDate) }}</p>
          <p>{{ numberOfNights }} night stay</p>
        </div>
      </div>
      <div class="flex flex-col justify-end gap-3">
        <div>
          <div class="flex items-center gap-2 justify-end">
            <s
              v-if="strikeThroughAmount"
              class="text-[#EB5757] text-[14px] font-[500]"
              >${{ strikeThroughAmount }}</s
            >
            <p class="text-[#333] text-[20px] font-[500]">${{ grossAmount }}</p>
          </div>
          <p class="text-[14px] font-[300]">Includes taxes and fees</p>
        </div>
        <button
          class="text-white bg-[#2F80ED] p-3 rounded-md font-[500] text-[15px]"
        >
          View trip details
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";
import { ref, computed } from "vue";
const props = defineProps([
  "hotelName",
  "reviewCount",
  "reviewScore",
  "checkInDate",
  "checkOutDate",
  "priceBreakdown",
  "photoUrl",
]);

const strikeThroughAmount = ref(
  Math.round(props.priceBreakdown?.strikethroughPrice?.value)
);
const grossAmount = computed(() =>
  Math.round(props.priceBreakdown?.grossPrice?.value)
);
console.log(props.priceBreakdown);
function formatCustomDate(date) {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
}
function getDaysDifference(date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);
  const differenceInMilliseconds = date2 - date1;

  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  return Math.round(differenceInDays);
}
const numberOfNights = computed(() =>
  getDaysDifference(props.checkInDate, props.checkOutDate)
);
</script>

<script>
import Review from "./Review.vue";
export default {
  components: { Review },
};
</script>
<style lang="scss" scoped></style>
