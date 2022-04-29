<template>
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
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type State = 'Alive' | 'Dead' | 'unknown';

const props = defineProps({
  state: {
    type: String as () => State,
    required: true,
  },
});
</script>
