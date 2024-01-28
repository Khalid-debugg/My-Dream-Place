<template>
  <div class="bg-Gray flex flex-col-reverse flex-1 justify-between">
    <Restriction class="w-[88%] mx-auto max-w-[1440px]" />
    <div
      v-if="userStore.trips.length > 0"
      class="w-[88%] mx-auto max-w-[1440px] py-10 flex flex-col gap-5"
    >
      <TripCard
        v-for="trip in userStore.trips"
        :hotel-name="trip.hotelName"
        :check-in-date="trip.checkInDate"
        :check-out-date="trip.checkOutDate"
        :photo-url="trip.photoUrl"
        :review-count="trip.reviewCount"
        :review-score="trip.reviewScore"
        :price-breakdown="trip.priceBreakDown"
      />
    </div>
    <div v-else class="text-center font-[600] text-[32px] py-10">
      No trips added yet
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";
const userStore = useUserStore();
</script>
<script>
import Restriction from "../components/Restriction.vue";
import TripCard from "../components/TripCard.vue";
export default {
  components: { Restriction, TripCard },
};
</script>
<style lang="scss" scoped></style>
