<template>
  <input
    :value="modelValue"
    type="text"
    @input="handleInput"
  >
  <p>You type : {{ modelValue }}</p>
</template>

<script setup>
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const handleInput = (e) => {
  const value = e.target.value;
  console.log(value);
  emit('update:modelValue', value);
};
</script>
