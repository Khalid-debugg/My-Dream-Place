<template>
  <div
    class="flex flex-wrap justify-center items-center gap-2 text-[13px] bg-white max-w-[1030px] min-w-[170px] w-[85%] mx-auto font-workSans shadow-lg p-3 rounded-lg relative"
  >
    <Menu as="div" class="relative inline-block text-left w-[230px] rounded-lg">
      <MenuButton
        :class="[
          { selected: searchStore.city, 'blue-flash': !isInputValid },
          'flex w-full items-center justify-between rounded-md px-3 py-2 text-gray-900 shadow-sm bg-Gray hover:bg-gray-50 h-[43px]',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.9999 11.1917C10.3413 11.1917 10.6794 11.1244 10.9949 10.9938C11.3103 10.8631 11.5969 10.6716 11.8384 10.4302C12.0798 10.1887 12.2713 9.90212 12.402 9.58668C12.5327 9.27123 12.5999 8.93314 12.5999 8.5917C12.5999 8.25026 12.5327 7.91217 12.402 7.59672C12.2713 7.28128 12.0798 6.99465 11.8384 6.75322C11.5969 6.51179 11.3103 6.32027 10.9949 6.18961C10.6794 6.05895 10.3413 5.9917 9.9999 5.9917C9.31034 5.9917 8.64902 6.26563 8.16142 6.75322C7.67383 7.24082 7.3999 7.90214 7.3999 8.5917C7.3999 9.28126 7.67383 9.94258 8.16142 10.4302C8.64902 10.9178 9.31034 11.1917 9.9999 11.1917V11.1917Z"
            :stroke="searchStore.city ? '#2f80ed' : '#828282'"
            stroke-width="1.5"
          />
          <path
            d="M3.01675 7.07508C4.65842 -0.141583 15.3501 -0.13325 16.9834 7.08342C17.9417 11.3168 15.3084 14.9001 13.0001 17.1168C12.1935 17.8947 11.1165 18.3294 9.99592 18.3294C8.87529 18.3294 7.79835 17.8947 6.99175 17.1168C4.69175 14.9001 2.05842 11.3084 3.01675 7.07508V7.07508Z"
            :stroke="searchStore.city ? '#2f80ed' : '#828282'"
            stroke-width="1.5"
          />
        </svg>
        <p>
          {{
            searchStore.city ? searchStore.city.name : "Where are you going ?"
          }}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
            :stroke="searchStore.city ? '#2f80ed' : '#828282'"
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
          <input
            type="text"
            v-model="cityInput"
            class="text-center border p-2 w-full"
            @input="getCityOptions"
          />
          <MenuItem
            v-for="(cityOption, index) in cityOptions.value"
            :key="cityOption.name"
            v-slot="{ active }"
          >
            <button
              @click="searchStore.city = cityOption"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-center w-full',
              ]"
            >
              {{ cityOption.name }}, {{ cityOption.country }}
            </button>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
    <div
      class="flex gap-2 items-center p-4 rounded-lg bg-Gray hover:bg-gray-50 max-w-[147px] max-h-[43px]"
      :class="{
        selected: searchStore.checkInDate,
        'blue-flash': !isInputValid,
      }"
    >
      <VueDatePicker
        v-model="searchStore.checkInDate"
        placeholder="Check in date"
        :enable-time-picker="false"
        :format="format"
        :min-date="new Date()"
        text-input
        required
      >
        <template #input-icon>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.6665 1.66675V4.16675"
              :stroke="searchStore.checkInDate ? '#2f80ed' : '#828282'"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.3335 1.66675V4.16675"
              :stroke="searchStore.checkInDate ? '#2f80ed' : '#828282'"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.9165 7.5752H16.0832"
              :stroke="searchStore.checkInDate ? '#2f80ed' : '#828282'"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 7.08341V14.1667C16.5 16.6667 15.25 18.3334 12.3333 18.3334H5.66667C2.75 18.3334 1.5 16.6667 1.5 14.1667V7.08341C1.5 4.58341 2.75 2.91675 5.66667 2.91675H12.3333C15.25 2.91675 16.5 4.58341 16.5 7.08341Z"
              :stroke="searchStore.checkInDate ? '#2f80ed' : '#828282'"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0791 11.4167H12.0866"
              :stroke="searchStore.checkInDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0791 13.9167H12.0866"
              :stroke="searchStore.checkInDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.99561 11.4167H9.00394"
              :stroke="searchStore.checkInDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.99561 13.9167H9.00394"
              :stroke="searchStore.checkInDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.91162 11.4167H5.91995"
              :stroke="searchStore.checkInDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.91162 13.9167H5.91995"
              :stroke="searchStore.checkInDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
        <template #clear-icon="{ clear }"> </template
      ></VueDatePicker>
    </div>
    <button
      class="flex gap-2 items-center p-4 rounded-lg bg-Gray hover:bg-gray-50 max-w-[147px] max-h-[43px]"
      :class="{
        selected: searchStore.checkOutDate,
        'blue-flash': !isInputValid,
      }"
    >
      <VueDatePicker
        class=""
        :format="format"
        v-model="searchStore.checkOutDate"
        placeholder="Check out date"
        :enable-time-picker="false"
        :min-date="
          searchStore.checkInDate
            ? new Date(
                searchStore.checkInDate.getFullYear(),
                searchStore.checkInDate.getMonth(),
                searchStore.checkInDate.getDate() + 1
              )
            : new Date()
        "
        text-input
        required
      >
        <template #input-icon>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.6665 1.66675V4.16675"
              :stroke="searchStore.checkOutDate ? '#2f80ed' : '#828282'"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.3335 1.66675V4.16675"
              :stroke="searchStore.checkOutDate ? '#2f80ed' : '#828282'"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.9165 7.5752H16.0832"
              :stroke="searchStore.checkOutDate ? '#2f80ed' : '#828282'"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 7.08341V14.1667C16.5 16.6667 15.25 18.3334 12.3333 18.3334H5.66667C2.75 18.3334 1.5 16.6667 1.5 14.1667V7.08341C1.5 4.58341 2.75 2.91675 5.66667 2.91675H12.3333C15.25 2.91675 16.5 4.58341 16.5 7.08341Z"
              :stroke="searchStore.checkOutDate ? '#2f80ed' : '#828282'"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0791 11.4167H12.0866"
              :stroke="searchStore.checkOutDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0791 13.9167H12.0866"
              :stroke="searchStore.checkOutDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.99561 11.4167H9.00394"
              :stroke="searchStore.checkOutDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.99561 13.9167H9.00394"
              :stroke="searchStore.checkOutDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.91162 11.4167H5.91995"
              :stroke="searchStore.checkOutDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.91162 13.9167H5.91995"
              :stroke="searchStore.checkOutDate ? '#2f80ed' : '#828282'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
        <template #clear-icon="{ clear }"> </template
      ></VueDatePicker>
    </button>
    <button
      class="flex gap-2 items-center p-4 rounded-lg bg-Gray hover:bg-gray-50 min-w-[147px] max-h-[43px]"
      @click="isGuestsSelected = true"
      :class="{ selected: isGuestsSelected, 'blue-flash': !isInputValid }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_5563_84)">
          <path
            d="M15.1166 18.0168C14.3833 18.2335 13.5166 18.3335 12.5 18.3335H7.49997C6.4833 18.3335 5.61663 18.2335 4.8833 18.0168C5.06663 15.8502 7.29163 14.1418 9.99997 14.1418C12.7083 14.1418 14.9333 15.8502 15.1166 18.0168V18.0168Z"
            :stroke="isGuestsSelected ? '#2f80ed' : '#828282'"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.4998 1.66675H7.49984C3.33317 1.66675 1.6665 3.33341 1.6665 7.50008V12.5001C1.6665 15.6501 2.6165 17.3751 4.88317 18.0167C5.0665 15.8501 7.2915 14.1417 9.99984 14.1417C12.7082 14.1417 14.9332 15.8501 15.1165 18.0167C17.3832 17.3751 18.3332 15.6501 18.3332 12.5001V7.50008C18.3332 3.33341 16.6665 1.66675 12.4998 1.66675ZM9.99984 11.8084C8.34984 11.8084 7.0165 10.4667 7.0165 8.81675C7.0165 7.16675 8.34984 5.83341 9.99984 5.83341C11.6498 5.83341 12.9832 7.16675 12.9832 8.81675C12.9832 10.4667 11.6498 11.8084 9.99984 11.8084Z"
            :stroke="isGuestsSelected ? '#2f80ed' : '#828282'"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.9833 8.81683C12.9833 10.4668 11.6499 11.8085 9.99993 11.8085C8.34993 11.8085 7.0166 10.4668 7.0166 8.81683C7.0166 7.16683 8.34993 5.8335 9.99993 5.8335C11.6499 5.8335 12.9833 7.16683 12.9833 8.81683Z"
            :stroke="isGuestsSelected ? '#2f80ed' : '#828282'"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_5563_84">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div v-if="isGuestsSelected">
        <input
          type="number"
          min="1"
          class="w-10 border-2"
          v-model="searchStore.adults"
        />
        <span>adults, </span>

        <input
          type="number"
          min="0"
          class="w-10 border-2"
          v-model="searchStore.children"
        />
        <span>children</span>
      </div>
      <span v-else>Guests</span>
    </button>
    <button
      class="relative flex gap-2 items-center p-4 rounded-lg bg-Gray hover:bg-gray-50 min-w-[147px] max-h-[43px]"
      @click="isRoomsSelected = true"
      :class="{ selected: isRoomsSelected, 'blue-flash': !isInputValid }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7.4375 17H6.625L6.09687 15.4286H5V11.4804C5 11.0482 5.15911 10.6815 5.47734 10.3804C5.79557 10.0792 6.17812 9.92857 6.625 9.92857V7.57143C6.625 7.13929 6.78411 6.76935 7.10234 6.46161C7.42057 6.15387 7.80312 6 8.25 6H14.75C15.1969 6 15.5794 6.15387 15.8977 6.46161C16.2159 6.76935 16.375 7.13929 16.375 7.57143V9.92857C16.8219 9.92857 17.2044 10.0824 17.5227 10.3902C17.8409 10.6979 18 11.0679 18 11.5V15.4286H16.9031L16.375 17H15.5625L15.0344 15.4286H7.96562L7.4375 17ZM12.3125 9.92857H14.75V7.57143H12.3125V9.92857ZM8.25 9.92857H10.6875V7.57143H8.25V9.92857ZM6.625 13.8571H16.375V11.5H6.625V13.8571Z"
          :fill="isRoomsSelected ? '#2f80ed' : '#828282'"
        />
        <rect
          x="2.75"
          y="2.75"
          width="17.5"
          height="17.5"
          rx="5.25"
          :stroke="isRoomsSelected ? '#2f80ed' : '#828282'"
          stroke-width="1.5"
        />
      </svg>
      <input
        v-model="searchStore.rooms"
        v-if="isRoomsSelected"
        type="number"
        class="w-10 border-2"
        min="1"
      />
      <span>Rooms</span>
    </button>
    <button
      type="submit"
      class="flex justify-center bg-Blue text-white items-center p-4 rounded-lg w-[134px] font-sfNormal font-[500] text-[15px] max-h-[43px]"
      @click="searchHotels"
    >
      Search
    </button>
  </div>
</template>

<script setup>
import config from "../../config";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useRoute } from "vue-router";
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useSearchStore } from "@/stores/searchStore";
import { storeToRefs } from "pinia";
import router from "../router/index";
const searchStore = useSearchStore();
const { searchResults } = storeToRefs(searchStore);
const dropDown = ref(false);
const isGuestsSelected = ref(searchStore.adults);
const isRoomsSelected = ref(searchStore.rooms);
const isInputValid = ref(true);
const cityInput = ref("");
const cityOptions = ref([]);

const getCityOptions = async () => {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${cityInput.value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": config.apiKey,
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.status >= 400 && response.status < 500) {
          throw new Error("The developer is currently broke, can't afford the premium api key 😢, contact here to refresh the freemium one ==> khalidsherif.dev@gmail.com , or buy your own and clone the project and inject it in the config file")
        }
    const data = await response.json();
    cityOptions.value = computed(() =>
      data?.data.filter((city) => city.search_type === "city")
    );
  } catch (error) {
    alert(error.message)
  }
};
const format = (date) => {
  if (!date) {
    return "";
  }
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${month}-${day}-${year}`;
};
const selectCity = (cityOption) => {
  searchStore.city = cityOption;
};
const searchHotels = async () => {
  // if (
  //   !searchStore.city ||
  //   !searchStore.checkInDate ||
  //   !searchStore.checkOutDate
  // ) {
  //   isInputValid.value = false;
  //   setTimeout(() => (isInputValid.value = true), 1000);
  //   return;
  // }
  sessionStorage.clear();
  router.push({ path: "/search/results" });
  await searchStore.sendSearchRequest();
};
</script>
<script>
export default {
  components: { VueDatePicker },
};
</script>

<style>
.dp__theme_light {
  --dp-text-color: #4f4f4f;
  --dp-border-color: none;
}
.dp__theme_light ::placeholder {
  color: #000;
  font-family: Work Sans;
  font-size: 13px;
}
.dp__input {
  background-color: inherit;
  padding: 0;
}
.dp__input_icon_pad {
  padding-inline-start: 1.5rem !important;
}
</style>
