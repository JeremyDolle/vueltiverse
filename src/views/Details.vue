<template>
  <div class="flex flex-wrap -mt-20 justify-center lg:justify-start">
    <character-card
      :image="data?.image"
      :title="data?.name"
      :subtitle="data?.species"
      :state="data?.status"
    />
    <div class="md:mt-24">
      <h1 class="text-7xl font-bold text-green-600">
        {{ data?.name }}
      </h1>
      <div class="flex items-baseline text-green-800">
        <h2 class="text-2xl">
          Location :
        </h2>
        <p class="ml-3">
          {{ data?.location?.name }}
        </p>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center mt-20">
    <h2 class="text-2xl font-bold mb-10">
      Present in the following episodes :
    </h2>
    <ul>
      <li
        v-for="episode in data?.episode"
        :key="episode"
        :title="episode"
      >
        {{ episode }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

// COMPONENTS
import CharacterCard from '../components/CharacterCard.vue';
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

onMounted(() => {
  store.dispatch('getCharacter', { id: route.params.id });
});

const data = computed(() => {
  return store.state.characterModule.data;
});

</script>
