<template>
  <div class="w-full flex items-center justify-center mb-8">
    <label class="relative w-1/2 flex items-center">
      <span class="absolute inset-y-0 left-4 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <button class="absolute right-3 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-4 px-4 rounded">Search</button>
      <input
        class="w-full placeholder:text-slate-400 text-lg shadow-xl shadow-indigo-500/50 appearance-none border-4 border-indigo-500 rounded-lg py-6 pl-16 pr-28 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search for a character"
      >
    </label>
  </div>
</template>

<script setup lang="ts">
</script>
