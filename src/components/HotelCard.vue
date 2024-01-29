<template>
  <div
    class="flex flex-col border rounded-md p-5 gap-4 xl:flex-row overflow-hidden"
  >
    <img
      class="min-w-[285px] h-[200px] rounded-md object-cover"
      :src="photoUrl"
      alt=""
    />
    <div class="flex flex-col w-full">
      <div class="flex items-center justify-between flex-wrap">
        <p class="text-[20px] font-[500] max-w-[25rem]">{{ name }}</p>
        <div
          class="bg-red-500 text-white rounded-md px-2 py-1 text-[13px] font-[500]"
          v-if="strikeThroughAmount"
        >
          Book now and recieve {{ discountRatio }}% off
        </div>
      </div>
      <div class="flex flex-col justify-between h-full">
        <Review :reviewCount="reviewCount" :reviewScore="reviewScore" />
        <div class="flex justify-between items-center flex-wrap">
          <div>
            <p class="max-w-[25rem] text-[13px]">
              {{ hotelDescription }}
            </p>
          </div>
          <div
            class="bg-[#219653] text-white rounded-md inline-flex items-center max-h-6 p-2"
            v-if="strikeThroughAmount"
          >
            {{ discountRatio }}% off
          </div>
        </div>
        <div class="flex justify-between items-center flex-wrap">
          <button
            @click="
              userStore.currentHotel = {
                reviewCount: reviewCount,
                reviewScore: reviewScore,
                hotelName: name,
                priceBreakDown: priceBreakDown,
                checkInDate: new Date(searchStore.checkInDate),
                checkOutDate: new Date(searchStore.checkOutDate),
                photoUrl: photoUrl,
              };
              router.push({
                path: `/hotel/${hotelID}`,
                query: {
                  reviewScore: reviewScore,
                  reviewCount: reviewCount,
                },
              });
            "
            class="bg-Blue text-white text-[14px] font-[500] rounded-md inline-flex px-[18px] py-[10px] max-h-[40px] items-center"
          >
            See availability
          </button>
          <div>
            <div class="flex items-center gap-2 justify-end">
              <s
                v-if="strikeThroughAmount"
                class="text-[#EB5757] text-[14px] font-[500]"
                >${{ strikeThroughAmount }}</s
              >
              <p class="text-[#333] text-[20px] font-[500]">
                ${{ grossAmount }}
              </p>
            </div>
            <p class="text-[14px] font-[300]">Includes taxes and fees</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "../router";
import { computed, onMounted, ref } from "vue";
import { useUserStore } from "../stores/userStore";
import { useSearchStore } from "../stores/searchStore";
const userStore = useUserStore();
const searchStore = useSearchStore();
const props = defineProps([
  "name",
  "reviewScore",
  "reviewCount",
  "photoUrl",
  "hotelID",
  "hotelDescription",
  "priceBreakDown",
]);
const strikeThroughAmount = ref(
  Math.round(props.priceBreakDown.strikethroughPrice?.value)
);
const grossAmount = computed(() =>
  Math.round(props.priceBreakDown.grossPrice?.value)
);
const discountRatio = computed(() =>
  Math.round(
    ((strikeThroughAmount.value - grossAmount.value) /
      strikeThroughAmount.value) *
      100
  )
);
</script>
<script>
import Review from "./Review.vue";
export default {
  components: { Review },
};
</script>
<style lang="scss" scoped></style>
