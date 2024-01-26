<template>
  <div class="bg-Gray">
    <div class="w-[88%] max-w-[1440px] mx-auto py-14 flex flex-col gap-10">
      <h1 class="font-[600] text-[32px]">Secure your reservation</h1>
      <Restriction />
      <main class="flex flex-wrap">
        <section class="xl:w-[65%] w-full flex flex-col gap-10">
          <div class="rounded-md overflow-hidden">
            <div
              class="flex flex-wrap bg-[#2F80ED] py-3 px-5 text-white gap-3 items-center"
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
                      <img src="../assets/images/Australia.png" alt="" />
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
              class="flex flex-wrap bg-[#2F80ED] py-3 px-5 text-white gap-3 items-center"
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
                    <img src="../assets/images/Mastercard.png" alt="" />
                  </div>
                  <div
                    class="w-[60px] h-[40px] rounded flex items-center justify-center bg-Gray"
                  >
                    <img src="../assets/images/Visa.png" alt="" />
                  </div>
                  <div
                    class="w-[60px] h-[40px] rounded flex items-center justify-center bg-Gray"
                  >
                    <img src="../assets/images/AmericanExpress.png" alt="" />
                  </div>
                  <div
                    class="w-[60px] h-[40px] rounded flex items-center justify-center bg-Gray"
                  >
                    <img src="../assets/images/Discover.png" alt="" />
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
                  <div class="flex gap-4">
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
                <div class="flex gap-4">
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
        </section>
        <section></section>
      </main>
    </div>
  </div>
</template>

<script setup></script>
<script>
import Restriction from "../components/Restriction.vue";
export default {
  components: { Restriction },
};
</script>
<style lang="scss" scoped></style>
