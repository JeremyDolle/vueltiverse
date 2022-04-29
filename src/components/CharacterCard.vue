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
        <div class="flex justify-center">
          <p class="text-blue-gray-700 text-base font-light leading-relaxed -mt-2 mb-6">{{ subtitle }}</p>
          <span class="flex h-3 w-3 relative ml-3">
            <span
              :class="{
                'bg-green-400': state === 'Alive',
                'bg-red-400': state === 'Dead',
                'bg-gray-400': state === 'unknown',
              }"
              class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            />
            <span
              :class="{
                'bg-green-500': state === 'Alive',
                'bg-red-500': state === 'Dead',
                'bg-gray-500': state === 'unknown',
              }"
              class="inline-flex rounded-full h-3 w-3"
            />
          </span>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type State = 'Alive' | 'Dead' | 'unknown';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  state: {
    type: String as () => State,
    required: true,
  },
});
</script>
