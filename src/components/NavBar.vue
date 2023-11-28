<template>
  <nav class="flex items-center px-[100px] py-[22px] justify-between">
    <header class="flex">
      <a href="#"
        ><img loading="lazy" src="../assets/images/Plane Icon.png" alt="plane"
      /></a>
    </header>
    <ul class="flex gap-[48px] hidden">
      <li><a href="#">Home</a></li>
      <li><a href="#">Discover</a></li>
      <li><a href="#">Activities</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div class="flex gap-[22px] hidden">
      <button>
        <img
          loading="lazy"
          src="../assets/images/Notification.png"
          alt="notification"
        />
      </button>
      <button>
        <img
          loading="lazy"
          src="../assets/images/Profile.png"
          alt="notification"
        />
      </button>
    </div>
    <button class="bg-Blue text-white py-2 px-5 rounded-[6px]">Login</button>
  </nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>