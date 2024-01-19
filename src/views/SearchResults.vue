<template>
  <div class="">
    <div
      class="bg-gradient-to-b from-[#2969BF] to-[#144E9D] h-[200px] absolute top-0 w-full"
    ></div>
    <SearchBar class="relative top-[5.5rem]" />
    <div
      class="w-[88%] max-w-[1440px] mx-auto mt-[10rem] flex flex-col md:flex-row gap-5"
    >
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
            <input
              v-model="propertyInput"
              type="text"
              placeholder="eg. Beach westpalm"
              class="outline-0"
            />
          </div>
        </section>
        <p class="font-[600] text-[18px] px-5">Filter by</p>
        <section class="rounded-md border flex flex-col gap-2">
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
          <div class="flex justify-between px-5 mb-2">
            <p>Set your own budget</p>
            <Switch
              v-model="isBudgetCustom"
              :class="isBudgetCustom ? 'bg-blue-600' : 'bg-gray-200'"
              class="relative inline-flex h-6 w-11 items-center rounded-full"
            >
              <span class="sr-only">Enable notifications</span>
              <span
                :class="isBudgetCustom ? 'translate-x-6' : 'translate-x-1'"
                class="inline-block h-4 w-4 transform rounded-full bg-white transition"
              />
            </Switch>
          </div>
          <div
            class="flex flex-col gap-2 px-5 py-3 border-dashed border w-[257px] mx-auto mb-3"
            v-if="isBudgetCustom"
          >
            <div class="flex justify-center gap-3">
              <input
                v-model="customMinBudget"
                @keypress.enter="updateBudget"
                type="number"
                min="0"
                class="border p-3 rounded-md text-[12px] w-[103px]"
                placeholder="Min budget"
              />
              <input
                v-model="customMaxBudget"
                @keypress.enter="updateBudget"
                type="number"
                min="0"
                class="border p-3 rounded-md text-[12px] w-[103px]"
                placeholder="Max budget"
              />
            </div>
            <p class="text-[12px]">Press Enter to filter</p>
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
      <main class="flex flex-col w-full">
        <div class="flex items-center justify-between">
          <h2 class="text-[24px] font-[600]">
            {{ filteredHotels ? filteredHotels[0]?.property.wishlistName : "" }}
            :
            <span v-if="filteredHotels?.length > 0">{{
              searchStore.totalHotelsNumber
            }}</span>
            <span v-else>0</span>
            search results found
          </h2>
          <Menu as="div" class="relative inline-block text-left rounded-lg">
            <MenuButton
              class="flex items-center w-full justify-center gap-x-5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <div class="flex flex-col gap-[0.3rem] items-start text-left">
                <p class="font-[500] text-[12px] text-[#918f8f]">Sort by</p>
                <p class="font-[400] text-[14px] leading-[18px]">
                  {{ sortTitle }}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </MenuButton>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem
                  v-for="sortOption in sortOptions"
                  :key="sortOption.name"
                  v-slot="{ active }"
                >
                  <button
                    @click="
                      sortID = sortOption.id;
                      sortTitle = sortOption.title;
                    "
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 w-full  text-left',
                    ]"
                  >
                    {{ sortOption.title }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div v-if="filteredHotels?.length > 0">
          <HotelCard
            class="my-5"
            v-for="hotel in filteredHotels"
            :key="hotel.id"
            :name="hotel.property.name"
            :reviewScore="hotel.property.reviewScore"
            :reviewCount="hotel.property.reviewCount"
            :photoUrl="hotel.property.photoUrls[0]"
            :hotelID="hotel.property.id"
            :hotelDescription="hotel.accessibilityLabel"
          />
        </div>

        <div v-else>No results found</div>
        <vue-awesome-paginate
          class="my-5"
          v-if="filteredHotels"
          :total-items="searchStore.totalHotelsNumber"
          :items-per-page="20"
          :max-pages-shown="5"
          v-model="currentPage"
          :on-click="pageHandler"
          type="link"
          link-url="/search/results?page=[page]"
        />
      </main>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import router from "@/router/index";
import { useSearchStore } from "@/stores/searchStore";
const route = useRoute();
const budgets = ref([
  { min: 0, max: 200 },
  { min: 200, max: 500 },
  { min: 500, max: 1000 },
  { min: 1000, max: 2000 },
  { min: 2000, max: 5000 },
]);
const searchStore = useSearchStore();
const dropDown = ref(false);
const propertyInput = ref("");
const sortOptions = ref([
  { id: "recommended", title: "Recommended" },
  { id: "upsort_bh", title: "Entire homes & apartments first" },
  { id: "popularity", title: "Popularity" },
  { id: "distance", title: "Distance from city centre" },
  { id: "closest_beach_distance", title: "Distance from closest beach" },
  { id: "class_descending", title: "Star rating (highest first)" },
  { id: "class_ascending", title: "Star rating (lowest first)" },
  { id: "bayesian_review_score", title: "Best reviewed first" },
  { id: "price", title: "Price (lowest first)" },
]);
const sortID = ref(null);
const sortTitle = ref("Recommended");
const _currentPage = ref(parseInt(useRoute().query.page) || 1);
const currentPage = computed({
  get() {
    return _currentPage.value;
  },
  set(val) {
    _currentPage.value = val;
  },
});
const selectedStars = ref(5);
const selectedBudget = ref(null);
const isBudgetCustom = ref(false);
const customMinBudget = ref(null);
const customMaxBudget = ref(null);
const minPrice = ref(null);
const maxPrice = ref(null);
const originalHotels = computed(() => searchStore.searchResults.data?.hotels);
const filteredHotels = computed(() =>
  originalHotels.value?.filter(
    (hotel) =>
      hotel.property.name
        .toLowerCase()
        .includes(propertyInput.value.toLowerCase()) &&
      hotel.property.reviewScore >= selectedStars.value
  )
);
watch(filteredHotels, () => {
  if (route.query.page) return;
  currentPage.value = 1;
});
watch([currentPage, minPrice, maxPrice, sortID], async (newValue) => {
  await searchStore.sendSearchRequest(...newValue);
});

function pageHandler(page) {
  router.push({ path: "/search/results", query: { page } });
}
const handleBudgetChange = (option) => {
  if (selectedBudget.value === option) {
    selectedBudget.value = null;
  } else {
    selectedBudget.value = option;
  }
  minPrice.value = selectedBudget.value?.min || null;
  maxPrice.value = selectedBudget.value?.max || null;
};
const updateBudget = () => {
  if (customMinBudget.value > customMaxBudget.value) {
    alert("Please enter a valid budget");
    return;
  }
  selectedBudget.value = null;
  minPrice.value = customMinBudget.value;
  maxPrice.value = customMaxBudget.value;
};
const rate = (stars) => {
  selectedStars.value = stars;
};
</script>
<script>
import SearchBar from "../components/SearchBar.vue";
import HotelCard from "../components/HotelCard.vue";
import { Switch } from "@headlessui/vue";
import { storeToRefs } from "pinia";

export default {
  components: { SearchBar, Switch, HotelCard },
};
</script>
<style>
.pagination-container {
  display: flex;
  justify-content: center;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
