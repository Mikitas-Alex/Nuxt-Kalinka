<template>
  <div class="pagination">
    <button class="prev" :disabled="currentPage === 1" @click="prevPage">Предыдущая</button>
    <span>{{ currentPage }} из {{ totalPages }}</span>
    <button class="next" :disabled="currentPage >= totalPages" @click="nextPage">Следующая</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['update:currentPage']);

const prevPage = () => {
  if (props.currentPage > 1) {
    emit('update:currentPage', props.currentPage - 1);
  }
};

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit('update:currentPage', props.currentPage + 1);
  }
};
</script>

