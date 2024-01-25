<template>
  <div class="rounded-md overflow-hidden w-[400px] min-h-[480px]">
    <img
      :src="props.roomPhoto"
      alt=""
      class="w-[400px] h-[200px] object-cover"
    />
    <div class="p-5 bg-white flex flex-col justify-between min-h-[280px]">
      <h3 class="font-[500] text-[18px]">
        {{ props.roomDescreption.split(".")[0].split(",")[0] }}.
      </h3>
      <div class="flex flex-col gap-2">
        <div
          class="flex items-center gap-2"
          v-for="highlight in props.roomHighlights.slice(0, 3)"
          :key="highlight.id"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2334 15.2916L8.81673 17.2916C9.15006 17.6249 9.90006 17.7916 10.4001 17.7916H13.5667C14.5667 17.7916 15.6501 17.0416 15.9001 16.0416L17.9001 9.95823C18.3167 8.79156 17.5667 7.79156 16.3167 7.79156H12.9834C12.4834 7.79156 12.0667 7.37489 12.1501 6.79156L12.5667 4.12489C12.7334 3.37489 12.2334 2.54156 11.4834 2.29156C10.8167 2.04156 9.9834 2.37489 9.65006 2.87489L6.2334 7.95823"
              stroke="#828282"
              stroke-width="1.2"
              stroke-miterlimit="10"
            />
            <path
              d="M1.9834 15.2915V7.12484C1.9834 5.95817 2.4834 5.5415 3.65007 5.5415H4.4834C5.65007 5.5415 6.15007 5.95817 6.15007 7.12484V15.2915C6.15007 16.4582 5.65007 16.8748 4.4834 16.8748H3.65007C2.4834 16.8748 1.9834 16.4582 1.9834 15.2915Z"
              stroke="#828282"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="text-[14px]">{{ highlight.translated_name }}</p>
        </div>
      </div>
      <button class="bg-[#2F80ED] text-white p-2 rounded-md">
        Reserve suit
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["roomDescreption", "roomPhoto", "roomHighlights"]);
</script>

<style lang="scss" scoped></style>
