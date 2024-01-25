<template>
  <div class="flex gap-3">
    <div class="flex">
      <svg
        v-for="star in props.reviewScore - (props.reviewScore % 1)"
        :key="star"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_1_979)">
          <path
            d="M9.99995 14.1666L5.10162 17.1583L6.43328 11.575L2.07495 7.84165L7.79578 7.38331L9.99995 2.08331L12.2041 7.38331L17.9258 7.84165L13.5666 11.575L14.8983 17.1583L9.99995 14.1666Z"
            fill="#F2994A"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_979">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="(props.reviewScore % 1) * 20"
        height="20"
        :viewBox="`0 0 ${(props.reviewScore % 1) * 20} 20`"
        fill="none"
      >
        <g clip-path="url(#clip0_1_979)">
          <path
            d="M9.99995 14.1666L5.10162 17.1583L6.43328 11.575L2.07495 7.84165L7.79578 7.38331L9.99995 2.08331L12.2041 7.38331L17.9258 7.84165L13.5666 11.575L14.8983 17.1583L9.99995 14.1666Z"
            fill="#F2994A"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_979">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <p>{{ props.reviewScore }}{{ ` (${props.reviewCount}) Reviews` }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const props = defineProps(["reviewCount", "reviewScore"]);
</script>

<style lang="scss" scoped></style>
