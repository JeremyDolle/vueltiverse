<template>
  <search-input
    v-model="name"
    class="-mt-12"
    @search="handleSearch"
  />

  <span class="fixed p-3 bg-indigo-600 right-0 z-10 shadow-xl shadow-indigo-500/50 text-white rounded-l-lg">
    <span class="flex items-center justify-center">
      <pulse-state state="Alive" />
      <span class="ml-3">
        {{ nbAlive }} character(s) alive
      </span>
    </span>

  </span>

  <div class="flex flex-wrap justify-between px-20">
    <template
      v-for="({ id, image, name, species, status }) in data"
      :key="`character-card-${id}`"
    >
      <router-link :to="{ name: 'details', params: { id } }">
        <character-card
          :image="image"
          :title="name"
          :subtitle="species"
          :state="status"
        />
      </router-link>
    </template>
    <div class="flex w-full justify-end mr-6 mb-10">
      <button
        :class="{ 'bg-gray-100 cursor-not-allowed	': !hasPrevious, 'hover:bg-gray-700': hasPrevious }"
        class="bg-gray-500 mr-6 text-white font-bold py-2 px-4"
        @click="handlePrevious"
      >
        Previous page
      </button>

      <button
        :class="{ 'bg-green-100 cursor-not-allowed	': !hasNext, 'hover:bg-green-700': hasNext }"
        class="bg-green-500 text-white font-bold py-2 px-4 "
        @click="handleNext"
      >
        Next page
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";

// COMPONENTS
import SearchInput from "../components/SearchInput.vue";
import CharacterCard from '../components/CharacterCard.vue';
import PulseState from "../components/PulseState.vue";

const store = useStore();

onMounted(() => {
  store.dispatch('getCharacters');
});

const data = computed(() => {
  return store.state.charactersModule.data;
});

const hasNext = computed(() => {
  return store.state.charactersModule.pageInfo.hasNextPage;
});

const hasPrevious = computed(() => {
  return store.state.charactersModule.pageInfo.hasPreviousPage;
});

const nbAlive = computed(() => {
  return data.value.filter(
    (character) => character.status === 'Alive',
  ).length || 0;
});

const name = ref('');

// Bonus Debounce
// const debounceTimeout = ref<null | number>(null);
//
// watch(name, (value) => {
//   if (debounceTimeout.value) {
//     clearTimeout(debounceTimeout.value);
//   }
//   debounceTimeout.value = setTimeout(() => {
//     store.dispatch('getCharacters', { name: value });
//   }, 500);
// });

const handleSearch = () => {
  store.dispatch('getCharacters', { name: name.value });
};

const handlePrevious = () => {
  store.dispatch('getCharacters', { page: store.state.charactersModule.pageInfo.page - 1 });
};

const handleNext = () => {
  store.dispatch('getCharacters', { page: Number(store.state.charactersModule.pageInfo.page) + 1 });
};

</script>
