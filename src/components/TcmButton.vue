<template>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "TcmButton",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
