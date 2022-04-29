<template>
  <search-input class="-mt-12" />

  <div class="flex flex-wrap">
    <template
      v-for="({ image, name, species }, index) in data"
      :key="'character-card-' + index"
    >
      <character-card
        :image="image"
        :title="name"
        :subtitle="species"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

// COMPONENTS
import SearchInput from "../components/SearchInput.vue";
import CharacterCard from '../components/CharacterCard.vue';

const store = useStore();

onMounted(() => {
  store.dispatch('getCharacters');
});

const data = computed(() => {
  return store.state.charactersModule.data;
});

</script>
