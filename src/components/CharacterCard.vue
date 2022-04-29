<template>
  <span class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mx-0 hover:drop-shadow-2xl cursor-pointer">
    <div class="flex flex-col px-6">
      <img
        :alt="title"
        :src="image"
        class="rounded-xl shadow-lg max-w-full h-auto align-middle border-none m-auto"
      >
      <div class="pt-1 text-center">
        <h1 class="text-gray-900 text-xl font-bold leading-normal">
          {{ title }}
        </h1>
        <div class="flex justify-center">
          <p class="text-blue-gray-700 text-base font-light leading-relaxed -mt-2 mb-6">
            {{ subtitle }}
          </p>
          <pulse-state :state="state" />
        </div>
      </div>
    </div>
  </span>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import PulseState from "./PulseState.vue";

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
