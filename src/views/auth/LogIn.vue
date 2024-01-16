<template>
  <form
    class="flex flex-col max-w-[401px] mx-auto gap-8 mt-[3rem]"
    novalidate
    @submit.prevent="handleSubmit"
  >
    <h1 class="text-center font-[600] text-[28px]">Sign in</h1>
    <div>
      <label for="Email" class="font-[500] block">Email address</label>
      <input
        v-model="emailInput"
        type="email"
        name=""
        id="Email"
        class="bg-[#F2F2F2] py-2 px-4 w-full"
      />
      <div class="text-red-500">{{ emailError }}</div>
    </div>
    <div>
      <label for="password" class="font-[500] block"> Password</label>
      <div class="relative">
        <input
          v-model="passwordInput"
          :type="visiblePassword ? 'text' : 'password'"
          name=""
          id="password"
          class="bg-[#F2F2F2] py-2 px-4 w-full"
        />
        <button
          type="button"
          class="absolute top-3 right-3"
          @click="visiblePassword = !visiblePassword"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M12.9835 10.5C12.9835 12.15 11.6502 13.4833 10.0002 13.4833C8.35018 13.4833 7.01685 12.15 7.01685 10.5C7.01685 8.85 8.35018 7.51666 10.0002 7.51666C11.6502 7.51666 12.9835 8.85 12.9835 10.5Z"
              stroke="#4F4F4F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.0001 17.3917C12.9418 17.3917 15.6834 15.6583 17.5918 12.6583C18.3418 11.4833 18.3418 9.50834 17.5918 8.33334C15.6834 5.33334 12.9418 3.60001 10.0001 3.60001C7.05845 3.60001 4.31678 5.33334 2.40845 8.33334C1.65845 9.50834 1.65845 11.4833 2.40845 12.6583C4.31678 15.6583 7.05845 17.3917 10.0001 17.3917Z"
              stroke="#4F4F4F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div class="text-red-500">{{ passwordError }}</div>
    </div>
    <div>
      <input
        type="checkbox"
        id="keepMe"
        name="checkbox"
        v-model="keepMeLoggedIn"
      />
      <label for="keepMe"> Keep me logged in</label>
    </div>
    <button class="text-center bg-[#2F80ED] rounded-md text-white p-2">
      Sign in
    </button>
    <div class="text-center">
      Don't have an account?
      <a href="/auth/signup" class="text-[#2F80ED]">Register</a>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
const visiblePassword = ref(false);
const emailInput = ref("");
const passwordInput = ref("");
const emailError = ref(null);
const passwordError = ref(null);
const keepMeLoggedIn = ref(false);
function handleSubmit() {
  emailError.value = null;
  passwordError.value = null;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.value = "Invalid email address";
    return;
  }

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.value =
      "Password must have at least 8 characters, 1 special character, 1 uppercase letter, and 1 number";
    return;
  }

  console.log("Form submitted successfully");
}
</script>

<style lang="scss" scoped></style>
