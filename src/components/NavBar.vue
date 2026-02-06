<template>
  <nav
    class="flex items-center w-[85%] max-w-[1240px] mx-auto py-[22px] justify-between relative z-10"
    :class="{
      'text-white': layout === 'Search',
    }"
  >
    <header>
      <a @click="router.push('/')" class="flex gap-1 cursor-pointer"
        ><svg
          v-if="layout !== 'Search'"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z"
            fill="#2F80ED"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.414 13.778C2.5 14 2 15.192 2 15.192C2 15.192 5.398 15.626 6.949 17.313C8.5 19 9.071 22.263 9.071 22.263C9.071 22.263 10.47 22.698 10.485 20.849C10.5 19 9.778 17.313 9.778 17.313L13.091 14L16.701 21.704C16.701 21.704 18.08 22.23 18.04 20.365C18 18.5 16.85 10.242 16.85 10.242L19.678 7.413C19.869 7.22851 20.0214 7.00782 20.1262 6.76381C20.231 6.5198 20.2862 6.25736 20.2885 5.99181C20.2908 5.72625 20.2402 5.46289 20.1396 5.21709C20.0391 4.9713 19.8906 4.748 19.7028 4.56021C19.515 4.37243 19.2917 4.22392 19.0459 4.12336C18.8001 4.0228 18.5368 3.97219 18.2712 3.9745C18.0056 3.97681 17.7432 4.03198 17.4992 4.1368C17.2552 4.24162 17.0345 4.39398 16.85 4.585L13.947 7.488C13.947 7.488 6.148 6.09401 3.824 6.297C1.5 6.5 2.559 7.563 2.559 7.563L10.203 11.233L6.95 14.486C6.95 14.486 4.328 13.556 3.414 13.778Z"
            fill="white"
          />
        </svg>
        <span class="font-[500] text-[18px]">my Dream Place</span>
      </a>
    </header>
    <ul class="font-sfNormal lg:flex gap-[48px] hidden">
      <li><a @click="router.push('/')" class="cursor-pointer">Home</a></li>
      <li><a @click="router.push('/search/results')" class="cursor-pointer">Discover</a></li>
      <li><a href="#">Activities</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div class="flex gap-[22px] hidden">
      <button>
        <img
          loading="lazy"
          src="/assets/images/Notification.png"
          alt="notification"
        />
      </button>
      <button>
        <img
          loading="lazy"
          src="/assets/images/Profile.png"
          alt="notification"
        />
      </button>
    </div>
    <button
      v-if="!userStore.isAuthenticated"
      @click="router.push('/auth/login')"
      class="bg-Blue text-white py-2 px-5 rounded-[6px]"
    >
      Login
    </button>
    <div v-else class="flex items-center">
      <svg
        v-if="props.layout === 'Search'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.81998C17.9387 7.70401 17.6216 6.61119 17.0252 5.66795C16.4288 4.72471 15.5776 3.9696 14.5699 3.48998C14.3128 3.03332 13.9376 2.65412 13.4838 2.39201C13.0299 2.1299 12.514 1.99451 11.9899 1.99998C10.8999 1.99998 9.91994 2.58998 9.39994 3.51998C7.44994 4.48998 6.09994 6.49998 6.09994 8.81998V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
          fill="white"
        />
        <path
          d="M14.8299 20.01C14.6196 20.5922 14.2352 21.0954 13.7289 21.4515C13.2226 21.8075 12.6189 21.999 11.9999 22C11.2099 22 10.4299 21.68 9.87993 21.11C9.55993 20.81 9.31993 20.41 9.17993 20C9.30993 20.02 9.43993 20.03 9.57993 20.05C9.80993 20.08 10.0499 20.11 10.2899 20.13C10.8599 20.18 11.4399 20.21 12.0199 20.21C12.5899 20.21 13.1599 20.18 13.7199 20.13C13.9299 20.11 14.1399 20.1 14.3399 20.07L14.8299 20.01Z"
          fill="white"
        />
        <circle
          cx="17"
          cy="6"
          r="5"
          fill="#EB5757"
          stroke="#2867BC"
          stroke-width="2"
        />
      </svg>

      <svg
        v-else
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.81998C17.9387 7.70401 17.6216 6.61119 17.0252 5.66795C16.4288 4.72471 15.5776 3.9696 14.5699 3.48998C14.3128 3.03332 13.9376 2.65412 13.4838 2.39201C13.0299 2.1299 12.514 1.99451 11.9899 1.99998C10.8999 1.99998 9.91994 2.58998 9.39994 3.51998C7.44994 4.48998 6.09994 6.49998 6.09994 8.81998V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
          fill="#828282"
        />
        <path
          d="M14.8299 20.01C14.6196 20.5922 14.2352 21.0954 13.7289 21.4515C13.2226 21.8075 12.6189 21.999 11.9999 22C11.2099 22 10.4299 21.68 9.87993 21.11C9.55993 20.81 9.31993 20.41 9.17993 20C9.30993 20.02 9.43993 20.03 9.57993 20.05C9.80993 20.08 10.0499 20.11 10.2899 20.13C10.8599 20.18 11.4399 20.21 12.0199 20.21C12.5899 20.21 13.1599 20.18 13.7199 20.13C13.9299 20.11 14.1399 20.1 14.3399 20.07L14.8299 20.01Z"
          fill="#828282"
        />
        <circle
          cx="17"
          cy="6"
          r="5"
          fill="#EB5757"
          stroke="white"
          stroke-width="2"
        />
      </svg>
      <Menu as="div" class="relative inline-block text-left rounded-lg">
        <MenuButton
          class="flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900"
        >
          <img src="/assets/images/Profile.png" alt="" />
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
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active
                    ? 'bg-gray-100 rounded-md text-gray-900'
                    : 'text-gray-700',
                  'block px-4 py-2 w-full text-left flex items-center gap-2',
                ]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_2182)">
                    <path
                      d="M15.1171 18.0168C14.3838 18.2335 13.5171 18.3335 12.5005 18.3335H7.50046C6.48379 18.3335 5.61712 18.2335 4.88379 18.0168C5.06712 15.8502 7.29212 14.1418 10.0005 14.1418C12.7088 14.1418 14.9338 15.8502 15.1171 18.0168V18.0168Z"
                      stroke="#4F4F4F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5003 1.66675H7.50033C3.33366 1.66675 1.66699 3.33341 1.66699 7.50008V12.5001C1.66699 15.6501 2.61699 17.3751 4.88366 18.0167C5.06699 15.8501 7.29199 14.1417 10.0003 14.1417C12.7087 14.1417 14.9337 15.8501 15.117 18.0167C17.3837 17.3751 18.3337 15.6501 18.3337 12.5001V7.50008C18.3337 3.33341 16.667 1.66675 12.5003 1.66675ZM10.0003 11.8084C8.35033 11.8084 7.01699 10.4667 7.01699 8.81675C7.01699 7.16675 8.35033 5.83341 10.0003 5.83341C11.6503 5.83341 12.9837 7.16675 12.9837 8.81675C12.9837 10.4667 11.6503 11.8084 10.0003 11.8084Z"
                      stroke="#4F4F4F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.9833 8.81683C12.9833 10.4668 11.6499 11.8085 9.99993 11.8085C8.34993 11.8085 7.0166 10.4668 7.0166 8.81683C7.0166 7.16683 8.34993 5.8335 9.99993 5.8335C11.6499 5.8335 12.9833 7.16683 12.9833 8.81683Z"
                      stroke="#4F4F4F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2182">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p>Manage account</p>
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                @click="router.push('/trips')"
                :class="[
                  active
                    ? 'bg-gray-100 rounded-md text-gray-900'
                    : 'text-gray-700',
                  'block px-4 py-2 w-full text-left flex items-center gap-2',
                ]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.50033 15H17.5003V16.6667H2.50033V15ZM17.9245 7.10583C17.8121 6.76825 17.5702 6.48913 17.252 6.32988C16.9338 6.17064 16.5654 6.1443 16.2278 6.25667L12.5003 7.5L5.83366 5L4.16699 5.83333L9.16699 9.16667L5.83366 10.8333L2.50033 9.16667L1.66699 10L5.00033 13.3333L17.1228 8.7875C17.4481 8.66539 17.7133 8.42196 17.8628 8.10835C18.0123 7.79475 18.0344 7.4354 17.9245 7.10583Z"
                    fill="#4F4F4F"
                  />
                </svg>

                <p>My trips</p>
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active
                    ? 'bg-gray-100 rounded-md text-gray-900'
                    : 'text-gray-700',
                  'block px-4 py-2 w-full text-left flex items-center gap-2',
                ]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.834 9.29175H5.83398"
                    stroke="#4F4F4F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.66699 9.2917V5.4417C1.66699 3.7417 3.04199 2.3667 4.74199 2.3667H9.42533C11.1253 2.3667 12.5003 3.42503 12.5003 5.12503"
                    stroke="#4F4F4F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.567 10.1667C14.1503 10.5667 13.9503 11.1833 14.117 11.8167C14.3253 12.5917 15.092 13.0833 15.892 13.0833H16.667V14.2917C16.667 16.1333 15.1753 17.625 13.3337 17.625H5.00033C3.15866 17.625 1.66699 16.1333 1.66699 14.2917V8.45833C1.66699 6.61667 3.15866 5.125 5.00033 5.125H13.3337C15.167 5.125 16.667 6.625 16.667 8.45833V9.66667H15.767C15.3003 9.66667 14.8753 9.85 14.567 10.1667V10.1667Z"
                    stroke="#4F4F4F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3338 10.5167V12.2334C18.3338 12.7001 17.9505 13.0834 17.4755 13.0834H15.8672C14.9672 13.0834 14.1422 12.4251 14.0672 11.5251C14.0172 11.0001 14.2172 10.5084 14.5672 10.1667C14.8755 9.85008 15.3005 9.66675 15.7672 9.66675H17.4755C17.9505 9.66675 18.3338 10.0501 18.3338 10.5167V10.5167Z"
                    stroke="#4F4F4F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Reward and wallet</p>
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                @click="
                  userStore.logOut();
                  router.push('/');
                "
                :class="[
                  active
                    ? 'bg-gray-100 rounded-md text-gray-900'
                    : 'text-gray-700',
                  'block px-4 py-2 w-full text-left flex items-center gap-2',
                ]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.584 13.7C12.3257 16.7 10.784 17.925 7.40898 17.925L7.30065 17.925C3.57565 17.925 2.08398 16.4334 2.08398 12.7084L2.08399 7.27505C2.08399 3.55005 3.57565 2.05838 7.30065 2.05838L7.40899 2.05838C10.759 2.05838 12.3007 3.26672 12.5757 6.21672"
                    stroke="#4F4F4F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.50006 10L16.9834 10"
                    stroke="#4F4F4F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.1253 12.7917L17.917 10.0001L15.1253 7.20841"
                    stroke="#4F4F4F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Sign out</p>
              </button>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </nav>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { useUserStore } from "../stores/userStore";
import router from "../router";

const props = defineProps(["layout"]);
const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
