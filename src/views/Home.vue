<template>
  <search-input class="-mt-12" />

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
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

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

const nbAlive = computed(() => {
  return data.value.filter(
    (character) => character.status === 'Alive',
  ).length || 0;
});

</script>
