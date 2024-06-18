<template>
  <main
    class="w-[88%] max-w-[1240px] mx-auto font-sfNormal flex flex-col gap-10"
  >
    <WelcomeModal v-if="userStore.showModal" />
    <div class="relative text-center overflow-hidden">
      <img
        loading="lazy"
        src="/assets/images/View.png"
        alt="city view"
        class="mx-auto w-[1240px] h-[500px] object-cover"
      />
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
      >
        <h2 class="font-[700] text-[2em] leading-[38.19px] mb-4">
          Enjoy Your Dream Vacation
        </h2>
        <p class="font-[400] tracking-[0.02em] text-[1.125em] leading-[28px]">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>
    </div>
    <SearchBar class="top-[-75px] mb-[-60px]" />
    <Restriction />
    <section class="flex flex-col gap-4">
      <h2 class="text-[28px] font-[600]">Enjoy your dream vacation</h2>
      <p class="max-w-[610px]">
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
      <div class="flex flex-wrap gap-2">
        <Card
          placeName="Australia"
          imgLink="Australia.png"
          propertiesNum="2246"
        />
        <Card placeName="Japan" imgLink="Japan.png" propertiesNum="1278" />
        <Card
          placeName="New Zealand"
          imgLink="New-Zealand.png"
          propertiesNum="480"
        />
        <Card placeName="Greece" imgLink="Greece.png" propertiesNum="320" />
      </div>
    </section>
    <section class="flex flex-col gap-4">
      <h2 class="text-[28px] font-[600]">Get inspiration for your next trip</h2>
      <div class="flex flex-wrap gap-2">
        <LayeredCard
          header="Sydeny’s 10 most fashionable 5 star hotels"
          description="Browse the fastest growing tourism sector in the heart of Australia
        tourism capital ...."
          imgLink="Sydney.png"
        />
        <LayeredCard
          header="Top cities for Vegan Travellers"
          description="Top sites where you do not have to worry about being a vegan. Our tourist guide is here..."
          imgLink="Vegan.png"
        />
        <LayeredCard
          header="World’s top destinations during and post covid timeline"
          description="Pandemic is still intact and will be here for a longer time. Here’s where your next destination..."
          imgLink="Covid.png"
        />
      </div>
    </section>
    <section class="flex flex-col gap-4">
      <h2 class="text-[28px] font-[600]">Popular hotels</h2>
      <div class="flex flex-wrap gap-2">
        <Card
          placeName="Lakeside Motel Warefront"
          imgLink="Lakeside.png"
          propertiesNum="2246"
        />
        <Card
          placeName="Recce Graham resort"
          imgLink="Recce.png"
          propertiesNum="1278"
        />
        <Card
          placeName="Fireside Dinners"
          imgLink="Fireside.png"
          propertiesNum="480"
        />
        <Card
          placeName="Oculous Inn Stay"
          imgLink="Oculous.png"
          propertiesNum="320"
        />
      </div>
    </section>
    <div class="relative overflow-hidden min-h-[280px] mt-2 rounded-lg">
      <img
        src="/assets/images/Home/Rectangle 18.png"
        class="object-cover min-h-[280px]"
        alt=""
      />
      <img
        src="/assets/images/Home/smart-phone.png"
        class="smart-phone absolute top-[-100px] right-[20px] object-cover hidden sm:block"
        alt=""
      />
      <div
        class="flex flex-col justify-start gap-[30px] max-w-[580px] text-white font-[500] absolute top-[64px] left-[69px] mx-auto"
      >
        <p class="leading-[140%] sm:text-[28px] text-[20px]">
          Download the mobile application for bonus coupons and travel codes
        </p>
        <button
          class="px-[12px] py-[18px] rounded-md bg-[#2F80ED] max-w-[182px]"
        >
          Download mobile app
        </button>
      </div>
    </div>
    <div class="flex flex-col mx-auto gap-4 text-center mt-4">
      <p class="text-[28px] font-[600]">
        Explore the world with My Dream place
      </p>
      <p class="text-[#2F80ED]">Discover new places and experiences</p>
    </div>
  </main>
</template>

<script setup>
const userStore = useUserStore();
</script>
<script>
import { useUserStore } from "../stores/userStore";
import SearchBar from "../components/SearchBar.vue";
import Restriction from "../components/Restriction.vue";
import Card from "../components/Card.vue";
import LayeredCard from "../components/LayeredCard.vue";
import WelcomeModal from "../components/WelcomeModal.vue";
export default {
  components: { SearchBar, Restriction, Card, LayeredCard, WelcomeModal },
};
</script>

<style lang="scss" scoped></style>
