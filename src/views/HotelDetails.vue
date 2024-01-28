<template>
  <div class="bg-gradient-to-t from-white to-Gray border-b-2 pt-5">
    <div class="flex gap-5 justify-center flex-wrap">
      <img src="../assets/images/room1.png" alt="" />
      <div class="flex flex-col gap-5 mx-auto xl:mx-0">
        <img src="../assets/images/room2.png" alt="" />
        <img src="../assets/images/room3.png" alt="" />
      </div>
    </div>
    <nav class="bg-white pt-5 px-3 flex gap-3 w-[88%] mx-auto max-w-[1440px]">
      <button
        v-for="icon in icons"
        :key="icon.label"
        @click="activateIcon(icon)"
        :class="[
          { ' !border-blue-500': icon.isActive },
          'p-2 border-b-4  border-white transition-all ease-in-out duration-500',
        ]"
      >
        {{ icon.label }}
      </button>
    </nav>
  </div>

  <main class="bg-Gray">
    <div
      class="w-[88%] mx-auto max-w-[1440px] py-6 flex flex-wrap justify-between"
    >
      <div class="xl:w-[65%] flex flex-col gap-8 my-4">
        <div class="flex flex-col gap-3">
          <h1 class="font-[600] text-[32px]">
            {{ hotelDetails?.hotel_name || "loading..." }}
          </h1>
          <Review :reviewCount="reviewCount" :reviewScore="reviewScore" />
          <div class="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.9999 11.1917C10.3413 11.1917 10.6794 11.1244 10.9949 10.9938C11.3103 10.8631 11.5969 10.6716 11.8384 10.4302C12.0798 10.1887 12.2713 9.90212 12.402 9.58668C12.5327 9.27123 12.5999 8.93314 12.5999 8.5917C12.5999 8.25026 12.5327 7.91217 12.402 7.59672C12.2713 7.28128 12.0798 6.99465 11.8384 6.75322C11.5969 6.51179 11.3103 6.32027 10.9949 6.18961C10.6794 6.05895 10.3413 5.9917 9.9999 5.9917C9.31034 5.9917 8.64902 6.26563 8.16142 6.75322C7.67383 7.24082 7.3999 7.90214 7.3999 8.5917C7.3999 9.28126 7.67383 9.94258 8.16142 10.4302C8.64902 10.9178 9.31034 11.1917 9.9999 11.1917V11.1917Z"
                stroke="#2F80ED"
                stroke-width="1.5"
              />
              <path
                d="M3.01675 7.07484C4.65842 -0.141828 15.3501 -0.133494 16.9834 7.08317C17.9417 11.3165 15.3084 14.8998 13.0001 17.1165C12.1935 17.8945 11.1165 18.3292 9.99592 18.3292C8.87529 18.3292 7.79835 17.8945 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484V7.07484Z"
                stroke="#2F80ED"
                stroke-width="1.5"
              />
            </svg>
            <p>{{ address?.join(", ") || ".." }}.</p>
          </div>
        </div>
        <div id="Overview" class="bg-white rounded-md">
          <div class="flex flex-col gap-5 p-8">
            <h2 class="font-[500] text-[18px]">Overview</h2>
            <p>
              {{ hotelDescription ? hotelDescription[0].description : "..." }}
            </p>
            <p>
              {{ hotelDescription ? hotelDescription[1].description : "..." }}
            </p>
          </div>
          <div class="border-b-2"></div>
          <div class="flex flex-col gap-5 p-8">
            <h2 class="font-[500] text-[18px]">Top facilities</h2>
            <div class="flex flex-col flex-wrap h-[7.5rem] sm:w-[30rem] gap-5">
              <div
                v-for="benefit in hotelBenefits"
                :key="hotelBenefits.icon"
                class="flex items-center gap-1"
              >
                <img
                  :src="`../src/assets/images/icons/${benefit.icon}.svg`"
                  alt=""
                />
                <p>{{ benefit.translated_name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-8">
        <iframe
          class="rounded-md w-[300px] sm:w-[400px]"
          width="400"
          height="240"
          frameborder="0"
          style="border: 0"
          referrerpolicy="no-referrer-when-downgrade"
          :src="`https://www.google.com/maps/embed/v1/view?key=${
            config.mapKey
          }&center=${hotelDetails?.latitude || 0},${
            hotelDetails?.longitude || 0
          }&zoom=12`"
          allowfullscreen
        >
        </iframe>
        <h3 class="font-[500] text-[18px]">Explore the area</h3>
        <div class="flex flex-col gap-2">
          <div
            v-for="landmark in nearbyLandmarks?.slice(0, 5)"
            :key="landmark.tag"
            class="flex justify-between"
          >
            <div class="flex items-center gap-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99974 1.6665C6.32391 1.6665 3.33308 4.65734 3.33308 8.329C3.30891 13.6998 9.74641 18.1532 9.99974 18.3332C9.99974 18.3332 16.6906 13.6998 16.6664 8.33317C16.6664 4.65734 13.6756 1.6665 9.99974 1.6665ZM9.99974 11.6665C8.15808 11.6665 6.66641 10.1748 6.66641 8.33317C6.66641 6.4915 8.15808 4.99984 9.99974 4.99984C11.8414 4.99984 13.3331 6.4915 13.3331 8.33317C13.3331 10.1748 11.8414 11.6665 9.99974 11.6665Z"
                  fill="#4F4F4F"
                />
              </svg>
              <p>{{ landmark.tag }}</p>
            </div>
            <p>{{ calcDriveTime(landmark.distance) }} min drive</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[88%] mx-auto max-w-[1440px]" id="Rooms">
      <h2 class="font-[600] text-[24px]">Available rooms</h2>
      <div class="flex flex-wrap gap-5 py-6">
        <div
          class="w-[400px] h-[340px] bg-gradient-to-t from-[#2366BF] to-[#4796FF] rounded-md flex items-center justify-center"
        >
          <div
            class="flex flex-col gap-5 relative left-[2.5rem] bottom-[1.5rem]"
          >
            <div class="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.414 13.7779C2.5 13.9999 2 15.1919 2 15.1919C2 15.1919 5.398 15.6259 6.949 17.3129C8.5 18.9999 9.071 22.2629 9.071 22.2629C9.071 22.2629 10.47 22.6979 10.485 20.8489C10.5 18.9999 9.778 17.3129 9.778 17.3129L13.091 13.9999L16.701 21.7039C16.701 21.7039 18.08 22.2299 18.04 20.3649C18 18.4999 16.85 10.2419 16.85 10.2419L19.678 7.41294C19.869 7.22845 20.0214 7.00776 20.1262 6.76375C20.231 6.51974 20.2862 6.2573 20.2885 5.99174C20.2908 5.72619 20.2402 5.46283 20.1396 5.21703C20.0391 4.97124 19.8906 4.74794 19.7028 4.56015C19.515 4.37237 19.2917 4.22386 19.0459 4.1233C18.8001 4.02274 18.5368 3.97213 18.2712 3.97444C18.0056 3.97675 17.7432 4.03192 17.4992 4.13674C17.2552 4.24156 17.0345 4.39392 16.85 4.58494L13.947 7.48794C13.947 7.48794 6.148 6.09394 3.824 6.29694C1.5 6.49994 2.559 7.56294 2.559 7.56294L10.203 11.2329L6.95 14.4859C6.95 14.4859 4.328 13.5559 3.414 13.7779Z"
                  fill="white"
                />
              </svg>
              <p class="text-white">my Dream Place</p>
            </div>
            <p class="font-[700] text-[24px] text-white w-[240px]">
              20% off <br />
              Use Promotional Coupon Code:
              <span class="text-[#FFD723]">Orlando</span>
            </p>
          </div>
          <img
            src="../assets/images/Frame-2.png"
            class="w-[177px] h-[291px] relative right-[2.5rem]"
            alt=""
          />
        </div>
        <RoomCard
          v-for="roomIndex in Object.keys(hotelRooms || {})"
          :roomDescreption="hotelRooms[roomIndex].description"
          :roomPhoto="hotelRooms[roomIndex].photos[1].url_640x200"
          :roomHighlights="hotelRooms[roomIndex].highlights"
        />
      </div>
    </div>
    <Restriction class="w-[88%] mx-auto max-w-[1440px] mt-28" />
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import config from "../../config";
import { useSearchStore } from "../stores/searchStore";
const hotelID = computed(() => useRoute().params.id);
const hotelDetails = ref(null);
const hotelDescription = ref(null);
const nearbyLandmarks = ref(null);
const hotelBenefits = ref(null);
const hotelRooms = ref(null);
const searchStore = useSearchStore();
const reviewCount = useRoute().query.reviewCount;
const reviewScore = useRoute().query.reviewScore;
const address = computed(() =>
  [
    hotelDetails.value?.address,
    hotelDetails.value?.district,
    hotelDetails.value?.city,
    hotelDetails.value?.country_trans,
  ].filter(Boolean)
);
const icons = ref([
  { label: "Overview", isActive: true },
  { label: "Rooms", isActive: false },
]);
const activateIcon = (clickedIcon) => {
  icons.value.forEach((icon) => {
    icon.isActive = icon === clickedIcon;
  });
  document
    .getElementById(clickedIcon.label)
    .scrollIntoView({ behavior: "smooth" });
};
const calcDriveTime = (distance) => {
  return Math.ceil((distance * 60) / 50);
};
onMounted(async () => {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails?hotel_id=${
    hotelID.value
  }&arrival_date=${searchStore.formatDate(
    searchStore.checkInDate
  )}&departure_date=${searchStore.formatDate(
    searchStore.checkOutDate
  )}&adults=${searchStore.adults || 1}&children_age=${
    searchStore.children || 0
  }%2C17&room_qty=${
    searchStore.rooms || 1
  }&languagecode=en-us&currency_code=USD`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": config.apiKey,
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    hotelDetails.value = result.data;
    hotelBenefits.value = hotelDetails.value.top_ufi_benefits;
  } catch (error) {
    console.error(error);
  }
});
onMounted(async () => {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/getDescriptionAndInfo?hotel_id=${hotelID.value}&languagecode=en-us`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": config.apiKey,
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    hotelDescription.value = result.data;
  } catch (error) {
    console.error(error);
  }
});
onMounted(async () => {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/getPopularAttractionNearBy?hotel_id=${hotelID.value}&languagecode=en-us`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": config.apiKey,
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    nearbyLandmarks.value = result.data.popular_landmarks;
  } catch (error) {
    console.error(error);
  }
});
onMounted(async () => {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/getRoomList?hotel_id=${
    hotelID.value
  }&arrival_date=${searchStore.formatDate(
    searchStore.checkInDate
  )}&departure_date=${searchStore.formatDate(
    searchStore.checkOutDate
  )}&adults=${searchStore.adults || 1}&children_age=${
    searchStore.children || 0
  }%2C17&room_qty=${
    searchStore.rooms || 1
  }&languagecode=en-us&currency_code=USD`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": config.apiKey,
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    hotelRooms.value = result.data.rooms;
  } catch (error) {
    console.error(error);
  }
});
</script>
<script>
import RoomCard from "../components/RoomCard.vue";
import Restriction from "../components/Restriction.vue";
import Review from "../components/Review.vue";
export default {
  components: { RoomCard, Restriction, Review },
};
</script>
<style lang="scss" scoped></style>
