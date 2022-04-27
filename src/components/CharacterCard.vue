<template>
  <a class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 hover:drop-shadow-2xl cursor-pointer">
    <div class="px-6">
      <img
        :alt="title"
        :src="image"
        class="rounded-xl shadow-lg max-w-full h-auto align-middle border-none m-auto"
      >
      <div class="pt-1 text-center">
        <h1 class="text-gray-900 text-xl font-bold leading-normal">{{ title }}</h1>
        <p class="text-blue-gray-700 text-base font-light leading-relaxed -mt-2 mb-6">{{ subtitle }}</p>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
});
</script>
