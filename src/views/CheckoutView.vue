<template>
  <div class="bg-Gray">
    <div class="w-[88%] max-w-[1440px] mx-auto py-14 flex flex-col gap-10">
      <h1 class="font-[600] text-[32px]">Secure your reservation</h1>
      <Restriction />
      <main class="flex">
        <section class="w-[65%]">
          <div class="rounded-md overflow-hidden">
            <div
              class="flex bg-[#2F80ED] py-3 px-5 text-white gap-3 items-center"
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
              <div class="flex gap-10 items-center">
                <div>
                  <label for="firstName">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    class="bg-Gray focus:bg-white focus:outline-1 focus:outline-blue-500 block w-[240px] p-2"
                  />
                </div>
                <div>
                  <label for="lastName">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    class="bg-Gray focus:bg-white focus:outline-1 focus:outline-blue-500 block w-[240px] p-2"
                  />
                </div>
              </div>
              <div class="flex gap-5 items-center">
                <div>
                  <label for="firstName">Mobile number</label>
                  <div class="flex bg-Gray justify-between p-3 w-[150px]">
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
                  <label for="lastName" class="bg-white">.</label>
                  <input
                    type="text"
                    id="lastName"
                    class="bg-Gray focus:bg-white focus:outline-1 focus:outline-blue-500 block w-[240px] p-2 h-[48px]"
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
