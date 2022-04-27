<template>
  <hero-banner class="-mb-12" />

  <search-input />

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

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import HeroBanner from './components/HeroBanner.vue';
import CharacterCard from './components/CharacterCard.vue';
import SearchInput from "./components/SearchInput.vue";

export default defineComponent({
  components: {
    SearchInput,
    HeroBanner, CharacterCard,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('getCharacters');
    });

    const data = computed(() => {
      return store.state.charactersModule.data;
    });

    return {
      data,
    };
  },
});
</script>
