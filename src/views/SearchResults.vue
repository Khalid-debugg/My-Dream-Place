<template>
  <div class="">
    <div
      class="bg-gradient-to-b from-[#2969BF] to-[#144E9D] h-[200px] absolute top-0 w-full"
    ></div>
    <SearchBar class="relative top-[5.5rem]" />
    <div class="w-[85%] mx-auto mt-48">
      <aside class="w-[295px] flex flex-col gap-5">
        <section class="bg-[#F2F2F2] flex flex-col gap-5 p-6 rounded-md">
          <p class="font-[500]">Search by property name</p>
          <div class="flex gap-2 p-3 rounded bg-white">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 18L13.875 14.375"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <input type="text" placeholder="eg. Beach westpalm" />
          </div>
        </section>
        <p class="font-[600] text-[18px] px-5">Filter by</p>
        <section class="rounded-md border">
          <p class="bg-[#F2F2F2] font-[500] p-5">Your budget per day</p>
          <div class="flex flex-col gap-2 bg-white p-5 rounded-b-md">
            <label
              v-for="(option, index) in budgets"
              :key="index"
              class="flex items-center gap-2"
            >
              <input
                class="w-5 h-5 rounded-md"
                type="checkbox"
                :checked="option === selectedBudget"
                @change="handleBudgetChange(option)"
              />
              ${{ option.min }} - ${{ option.max }}
            </label>
          </div>
        </section>
        <section class="rounded-md border">
          <p class="bg-[#F2F2F2] font-[500] p-5">Rating</p>
          <div class="flex flex-col gap-2 bg-white p-5 rounded-b-md">
            <p class="text-[14px]">Show only ratings more than</p>
            <div class="flex rounded-md border">
              <button
                v-for="starIndex in 5"
                :key="starIndex"
                @click="rate(starIndex)"
                class="flex justify-center items-center gap-1 border w-[50px] h-[46px]"
              >
                <p>{{ starIndex }}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_685)">
                    <path
                      d="M8.99993 12.75L4.59143 15.4425L5.78993 10.4175L1.86743 7.0575L7.01618 6.645L8.99993 1.875L10.9837 6.645L16.1332 7.0575L12.2099 10.4175L13.4084 15.4425L8.99993 12.75Z"
                      :fill="starIndex <= selectedStars ? '#F2994A' : '#f2f2f2'"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_685">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </aside>
      <main></main>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const budgets = ref([
  { min: 0, max: 200 },
  { min: 200, max: 500 },
  { min: 500, max: 1000 },
  { min: 1000, max: 2000 },
  { min: 2000, max: 5000 },
]);
const selectedStars = ref(5);
const selectedBudget = ref(null);

const handleBudgetChange = (option) => {
  if (selectedBudget.value === option) {
    selectedBudget.value = null;
  } else {
    selectedBudget.value = option;
  }
  console.log(selectedBudget.value);
};
const rate = (stars) => {
  selectedStars.value = stars;
};
</script>
<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  components: { SearchBar },
};
</script>
<style lang="scss" scoped>
</style>