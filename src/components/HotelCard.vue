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
        <div class="flex gap-3 flex-wrap">
          <div class="flex">
            <svg
              v-for="star in reviewScore - (reviewScore % 1)"
              :key="star"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_1_979)">
                <path
                  d="M9.99995 14.1666L5.10162 17.1583L6.43328 11.575L2.07495 7.84165L7.79578 7.38331L9.99995 2.08331L12.2041 7.38331L17.9258 7.84165L13.5666 11.575L14.8983 17.1583L9.99995 14.1666Z"
                  fill="#F2994A"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_979">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :width="(reviewScore % 1) * 20"
              height="20"
              :viewBox="`0 0 ${(reviewScore % 1) * 20} 20`"
              fill="none"
            >
              <g clip-path="url(#clip0_1_979)">
                <path
                  d="M9.99995 14.1666L5.10162 17.1583L6.43328 11.575L2.07495 7.84165L7.79578 7.38331L9.99995 2.08331L12.2041 7.38331L17.9258 7.84165L13.5666 11.575L14.8983 17.1583L9.99995 14.1666Z"
                  fill="#F2994A"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_979">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p>{{ reviewScore }} ({{ reviewCount }} reviews)</p>
        </div>
        <div class="flex justify-between items-center flex-wrap">
          <div>
            <p class="max-w-[25rem] text-[13px]">
              {{ hotelDescription.split("•")[1] }}
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
import { computed, onMounted, ref } from "vue";
import { useSearchStore } from "../stores/searchStore";
const searchStore = useSearchStore();
console.log(searchStore);
const strikeThroughAmount = ref(0);
const grossAmount = ref(0);
const discountRatio = ref(0);
const props = defineProps([
  "name",
  "reviewScore",
  "reviewCount",
  "photoUrl",
  "hotelID",
  "hotelDescription",
]);

const hotelDescriptionLoading = ref(true);
onMounted(async () => {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails?hotel_id=${
    props.hotelID
  }&arrival_date=${searchStore.formatDate(
    searchStore.checkInDate
  )}&departure_date=${searchStore.formatDate(
    searchStore.checkOutDate
  )}&adults=${searchStore.adults}&children_age=${
    searchStore.children
  }%2C17&room_qty=${searchStore.rooms}&languagecode=en-us&currency_code=USD`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "81f2f93730msh80a1ac51a85a5f7p1702afjsna6704a34c178",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
    strikeThroughAmount.value = Math.round(
      result.data.product_price_breakdown.strikethrough_amount?.value
    );
    grossAmount.value = Math.round(
      result.data.product_price_breakdown.gross_amount.value
    );
    discountRatio.value = Math.round(
      ((strikeThroughAmount.value - grossAmount.value) /
        strikeThroughAmount.value) *
        100
    );
  } catch (error) {
    console.error(error);
  }
});
// onMounted(async () => {
//   const url =
//     "https://booking-com15.p.rapidapi.com/api/v1/hotels/getDescriptionAndInfo?hotel_id=5955189&languagecode=en-us";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "577e54071bmsh0386513e6c5bc31p16f6a7jsn7ab94d9a7f87",
//       "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     hotelDescription.value = result.data;
//     console.log(result);
//     hotelDescriptionLoading.value = false;

//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// });
</script>

<style lang="scss" scoped>
</style>
