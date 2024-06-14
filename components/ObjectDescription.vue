<template>
  <div class="desqr" v-html="(object.description[currentLang])"></div>
</template>

<script setup>
defineProps({
  object: {
    type: Object,
    required: true
  },
  currentLang: {
    type: String,
    required: true
  }
})
</script>
