<template>
  <p class="text">{{ formattedPrice }}</p>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  price: {
    type: Number,
    required: true
  }
})

function formatPrice(price) {
  return `${(price / 1000000).toFixed(1)} млн ₽`;
}

const formattedPrice = computed(() => formatPrice(props.price))
</script>
