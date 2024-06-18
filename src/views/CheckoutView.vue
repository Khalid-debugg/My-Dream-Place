<template>
  <div class="bg-Gray">
    <BookingModal
      v-if="showSuccessfullBookingModal"
      @close-modal="closeModal"
    />
    <div
      class="w-[88%] max-w-[1440px] mx-auto pt-14 pb-28 flex flex-col gap-10"
    >
      <h1 class="font-[600] text-[32px]">Secure your reservation</h1>
      <Restriction />
      <main class="flex flex-wrap justify-between">
        <section class="md:w-[65%] w-full flex flex-col gap-8 py-5 md:py-0">
          <div class="rounded-md overflow-hidden">
            <div
              class="flex flex-wrap bg-[#2F80ED] py-4 px-5 text-white gap-3 items-center"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5835 4.79502L15.7618 2.61335C14.7935 2.25169 13.2068 2.25169 12.2385 2.61335L6.41685 4.79502C5.07518 5.29669 3.97852 6.88335 3.97852 8.30669V16.975C3.97852 18.3517 4.88852 20.16 5.99685 20.9884L11.0135 24.7334C12.6585 25.97 15.3652 25.97 17.0102 24.7334L22.0268 20.9884C23.1352 20.16 24.0452 18.3517 24.0452 16.975V8.30669C24.0218 6.88335 22.9252 5.29669 21.5835 4.79502ZM13.9185 8.20169C15.2952 8.20169 16.4152 9.32169 16.4152 10.6984C16.4152 12.0517 15.3535 13.1367 14.0118 13.1834H13.8952C12.4952 13.1367 11.4452 12.0517 11.4452 10.6984C11.4335 9.32169 12.5535 8.20169 13.9185 8.20169ZM16.5552 19.0867C15.8435 19.5534 14.9218 19.7984 14.0002 19.7984C13.0785 19.7984 12.1452 19.565 11.4452 19.0867C10.7802 18.6434 10.4185 18.0367 10.4068 17.3717C10.4068 16.7184 10.7802 16.0884 11.4452 15.645C12.8568 14.7117 15.1552 14.7117 16.5668 15.645C17.2318 16.0884 17.6052 16.695 17.6052 17.36C17.5935 18.0134 17.2202 18.6434 16.5552 19.0867Z"
                  fill="white"
                />
              </svg>
              <p class="text-[18px]">Room1</p>
              <p class="text-[16px]">
                2 adults, 1 double bed and 1 twin bed, Non-smoking
              </p>
            </div>
            <div class="p-8 bg-white flex flex-col gap-7">
              <div class="flex flex-wrap gap-6 items-center">
                <div>
                  <label for="firstName" class="font-[500]">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    class="bg-Gray focus:bg-white focus:outline-1 focus:outline-blue-500 block w-[240px] p-2 rounded"
                  />
                </div>
                <div>
                  <label for="lastName" class="font-[500]">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    class="bg-Gray focus:bg-white focus:outline-1 focus:outline-blue-500 block w-[240px] p-2 rounded"
                  />
                </div>
              </div>
              <div class="flex flex-wrap gap-5 items-center">
                <div>
                  <label for="firstName" class="font-[500]"
                    >Mobile number</label
                  >
                  <div
                    class="flex bg-Gray justify-between items-center p-3 w-[150px] hover:cursor-pointer rounded"
                  >
                    <div class="flex gap-2">
                      <img src="/assets/images/Australia.png" alt="" />
                      <p>+61</p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
                        stroke="#4F4F4F"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <label for="" class="bg-white text-white">.</label>
                  <input
                    type="text"
                    id=""
                    class="bg-Gray focus:bg-white focus:outline-1 focus:outline-blue-500 block w-[338px] p-2 h-[48px] rounded"
                  />
                </div>
              </div>
              <div class="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name=""
                  id="Recieve"
                  class="w-[20px] h-[20px]"
                />
                <label for="Recieve"
                  >Receive text alerts about this trip.</label
                >
              </div>
            </div>
          </div>
          <div class="rounded-md overflow-hidden">
            <div
              class="flex flex-wrap bg-[#2F80ED] py-4 px-5 text-white gap-3 items-center"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1667 17.5C19.5883 17.5 17.5 19.5883 17.5 22.1667C17.5 23.0417 17.745 23.87 18.1767 24.57C18.588 25.2612 19.1722 25.8335 19.8718 26.2303C20.5714 26.6272 21.3623 26.835 22.1667 26.8333C23.87 26.8333 25.3517 25.9233 26.1567 24.57C26.5883 23.87 26.8333 23.0417 26.8333 22.1667C26.8333 19.5883 24.745 17.5 22.1667 17.5ZM24.5817 21.665L22.0967 23.9633C21.9333 24.115 21.7117 24.1967 21.5017 24.1967C21.28 24.1967 21.0583 24.115 20.8833 23.94L19.7283 22.785C19.5656 22.6203 19.4743 22.3982 19.4743 22.1667C19.4743 21.9352 19.5656 21.713 19.7283 21.5483C20.0667 21.21 20.6267 21.21 20.965 21.5483L21.525 22.1083L23.3917 20.3817C23.7417 20.055 24.3017 20.0783 24.6283 20.4283C24.955 20.7783 24.9317 21.3267 24.5817 21.665Z"
                  fill="white"
                />
                <path
                  d="M25.6668 8.80602V9.33102C25.6668 9.97269 25.1418 10.4977 24.5002 10.4977H3.50016C2.8585 10.4977 2.3335 9.97269 2.3335 9.33102V8.79436C2.3335 6.12269 4.49183 3.96436 7.1635 3.96436H20.8252C23.4968 3.96436 25.6668 6.13436 25.6668 8.80602Z"
                  fill="white"
                />
                <path
                  d="M2.3335 13.4144V19.2011C2.3335 21.8728 4.49183 24.0311 7.1635 24.0311H14.4668C15.1435 24.0311 15.7268 23.4594 15.6685 22.7828C15.5052 20.9978 16.0768 19.0611 17.6635 17.5211C18.3168 16.8794 19.1218 16.3894 19.9968 16.1094C21.4552 15.6428 22.8668 15.7011 24.1152 16.1211C24.2907 16.1824 24.4783 16.201 24.6624 16.1751C24.8465 16.1493 25.0217 16.0798 25.1735 15.9725C25.3253 15.8652 25.4493 15.7232 25.5351 15.5583C25.6209 15.3934 25.6661 15.2103 25.6668 15.0244V13.4028C25.6668 12.7611 25.1418 12.2361 24.5002 12.2361H3.50016C2.8585 12.2478 2.3335 12.7728 2.3335 13.4144ZM9.3335 20.1228H7.00016C6.52183 20.1228 6.12516 19.7261 6.12516 19.2478C6.12516 18.7694 6.52183 18.3728 7.00016 18.3728H9.3335C9.81183 18.3728 10.2085 18.7694 10.2085 19.2478C10.2085 19.7261 9.81183 20.1228 9.3335 20.1228Z"
                  fill="white"
                />
              </svg>
              <p class="text-[18px]">Payment options</p>
            </div>
            <div class="divide-y-2 bg-white">
              <div class="px-8 inline-block">
                <p class="px-2 py-3 border-b-2 border-b-blue-500 text-[14px]">
                  Debit/Credit Card
                </p>
              </div>
              <div class="p-8 flex flex-col gap-5">
                <div class="flex gap-3">
                  <div
                    class="w-[60px] h-[40px] rounded flex items-center justify-center bg-Gray"
                  >
                    <img src="/assets/images/Mastercard.png" alt="" />
                  </div>
                  <div
                    class="w-[60px] h-[40px] rounded flex items-center justify-center bg-Gray"
                  >
                    <img src="/assets/images/Visa.png" alt="" />
                  </div>
                  <div
                    class="w-[60px] h-[40px] rounded flex items-center justify-center bg-Gray"
                  >
                    <img src="/assets/images/AmericanExpress.png" alt="" />
                  </div>
                  <div
                    class="w-[60px] h-[40px] rounded flex items-center justify-center bg-Gray"
                  >
                    <img src="/assets/images/Discover.png" alt="" />
                  </div>
                </div>
                <div>
                  <label for="cardName" class="font-[500]">Name on card</label>
                  <input
                    type="text"
                    id="cardName"
                    class="bg-Gray focus:bg-white focus:outline-1 focus:outline-blue-500 block w-[500px] p-2 rounded"
                  />
                </div>
                <div>
                  <label for="cardNumber" class="font-[500]"
                    >Debit/Credit card number</label
                  >
                  <input
                    type="text"
                    id="cardNumber"
                    class="bg-Gray focus:bg-white focus:outline-1 focus:outline-blue-500 block w-[500px] p-2 rounded"
                  />
                </div>
                <div>
                  <label for="cardNumber" class="font-[500]"
                    >Expiration Date</label
                  >
                  <div class="flex gap-4 cursor-pointer">
                    <div
                      class="flex justify-between items-center bg-Gray w-[150px] p-3 rounded"
                    >
                      <p>April</p>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
                          stroke="#4F4F4F"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      class="flex justify-between items-center bg-Gray w-[150px] p-3 rounded"
                    >
                      <p>2026</p>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
                          stroke="#4F4F4F"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex gap-4 cursor-pointer">
                  <div>
                    <label for="securityCode" class="font-[500]"
                      >Security Code</label
                    >
                    <input
                      type="text"
                      id="securityCode"
                      class="bg-Gray focus:bg-white focus:outline-1 focus:outline-blue-500 block w-[240px] p-2 rounded"
                    />
                  </div>
                  <div>
                    <label for="zipC240" class="font-[500]"
                      >Billing Zip code</label
                    >
                    <input
                      type="text"
                      id="zipC240"
                      class="bg-Gray focus:bg-white focus:outline-1 focus:outline-blue-500 block w-[240px] p-2 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md overflow-hidden">
            <div
              class="bg-[#F2C94C] py-4 px-5 items-center font-[500] text-[18px]"
            >
              Important information about your booking
            </div>
            <div class="flex flex-col bg-white px-6 py-8 gap-6">
              <p>
                1. This rate is non-refundable. If you change or cancel your
                booking you will not get a refund or credit to use for a future
                stay. <br />
                2. Stay extensions will require a new reservation. <br />
                3. Front desk staff will greet guests on arrival <br />
                4. No refunds will be issued for late check-in or early
                check-out. <br />
              </p>
              <p>
                By clicking the button below, I acknowledge that I have reviewed
                the <span class="text-blue-500">Privacy Statement</span> and
                have reviewd and accept the
                <span class="text-blue-500">Rules and Restrictions</span> and
                <span class="text-blue-500">Terms of Use.</span>
              </p>
              <button
                class="w-[160px] text-white bg-[#2F80ED] rounded-md p-3"
                :disabled="!userStore.shoppingCart"
                @click="
                  userStore.trips.push(userStore.shoppingCart);
                  userStore.shoppingCart = null;
                  showSuccessfullBookingModal = true;
                "
              >
                Complete Booking
              </button>
              <div class="flex gap-2 items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 7.75C10.11 7.75 9.75 8.54 9.75 10V10.62H14.25V10C14.25 8.54 13.89 7.75 12 7.75Z"
                    fill="#219653"
                  />
                  <path
                    d="M11.998 15.0979C12.2897 15.0979 12.5695 14.9821 12.7758 14.7758C12.9821 14.5695 13.098 14.2897 13.098 13.9979C13.098 13.7062 12.9821 13.4264 12.7758 13.2201C12.5695 13.0138 12.2897 12.8979 11.998 12.8979C11.7063 12.8979 11.4265 13.0138 11.2202 13.2201C11.0139 13.4264 10.898 13.7062 10.898 13.9979C10.898 14.2897 11.0139 14.5695 11.2202 14.7758C11.4265 14.9821 11.7063 15.0979 11.998 15.0979Z"
                    fill="#219653"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.38 14.5C17.38 16.7 16.7 17.38 14.5 17.38H9.5C7.3 17.38 6.62 16.7 6.62 14.5V13.5C6.62 11.79 7.03 11 8.25 10.73V10C8.25 9.07 8.25 6.25 12 6.25C15.75 6.25 15.75 9.07 15.75 10V10.73C16.97 11 17.38 11.79 17.38 13.5V14.5Z"
                    fill="#219653"
                  />
                </svg>
                <p>
                  We use secure transmission and encrypted storage to protect
                  your personal information
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="md:w-[32%] w-full flex flex-col gap-8 py-5 md:py-0">
          <div v-if="userStore.shoppingCart" class="rounded-md overflow-hidden">
            <img
              :src="userStore.shoppingCart.photoUrl"
              alt=""
              class="w-full h-[180px] object-cover"
            />
            <div class="p-5 bg-white flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <p class="font-[500] text-[18px]">
                  {{ userStore.shoppingCart.hotelName }}
                </p>
                <Review
                  :review-count="userStore.shoppingCart.reviewCount"
                  :review-score="userStore.shoppingCart.reviewScore"
                />
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-red-400">Non refundable</p>
                <p>
                  Check in:
                  {{ formatCustomDate(userStore.shoppingCart?.checkInDate) }}
                </p>
                <p>
                  Check out:
                  {{ formatCustomDate(userStore.shoppingCart?.checkOutDate) }}
                </p>
                <p>
                  {{ numberOfNights }}
                  night stay
                </p>
              </div>
            </div>
          </div>
          <div class="rounded-md overflow-hidden">
            <div
              class="bg-[#85E0AB] py-4 px-5 items-center font-[500] text-[16px]"
            >
              Price Details
            </div>
            <div class="bg-white divide-y-2">
              <div
                v-if="userStore.shoppingCart"
                class="flex flex-col gap-3 p-5"
              >
                <div class="flex justify-between">
                  <p>1 room X {{ numberOfNights }} nights</p>
                  <p>
                    $
                    {{ cost }}
                  </p>
                </div>
                <div class="flex justify-between">
                  <p>Tax and service fees</p>
                  <p>$ {{ taxes }}</p>
                </div>
              </div>
              <div class="flex justify-between items-center p-5">
                <p class="font-[500] text-[16px]">Total</p>
                <p class="font-[600] text-[20px]">
                  $ <span v-if="userStore.shoppingCart">{{ total }}</span>
                  <span v-else>0</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useUserStore } from "../stores/userStore";
const userStore = useUserStore();
const showSuccessfullBookingModal = ref(false);
const cost = ref(
  parseFloat(userStore.shoppingCart?.priceBreakDown.grossPrice.value.toFixed(2))
);
const taxes = computed(() => parseFloat(((cost.value * 14) / 100).toFixed(2)));
const total = computed(() => cost.value + taxes.value);
const numberOfNights = computed(() =>
  getDaysDifference(
    userStore.shoppingCart?.checkInDate,
    userStore.shoppingCart?.checkOutDate
  )
);
function formatCustomDate(date) {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
function getDaysDifference(date1, date2) {
  const differenceInMilliseconds = date2 - date1;

  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  return Math.round(differenceInDays);
}
function closeModal() {
  showSuccessfullBookingModal.value = false;
}
</script>
<script>
import Restriction from "../components/Restriction.vue";
import Review from "../components/Review.vue";
import BookingModal from "../components/BookingModal.vue";
import { computed } from "vue";
export default {
  components: { Restriction, Review, BookingModal },
};
</script>
<style lang="scss" scoped></style>
