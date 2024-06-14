<template>
  <input class="search" type="text" :placeholder="placeholder" v-model="searchText" @input="$emit('update:searchText', searchText)">
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
    default: 'Введите название'
  }
})

defineEmits(['update:searchText'])

const searchText = ref('')
</script>

<style>
.search {
  margin-bottom: 20px;
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid coral;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.search:focus-visible {
  outline: 1px solid brown;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.search::placeholder {
  color: coral;
}</style>
