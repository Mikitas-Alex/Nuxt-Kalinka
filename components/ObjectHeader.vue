<template>
  <h2 class="title">{{ object.type.en }}</h2>
  <h2 class="title">{{ object.title.en }}</h2>
  <p class="text">{{ object.type[0].replace(/"/g, "").replace("[", "").replace("]", "") }}</p>
  <PriceComponent :price="object.price" />

</template>

<script setup>
import PriceComponent from './PriceComponent.vue'

defineProps({
  object: {
    type: Object,
    required: true
  }
})
</script>
