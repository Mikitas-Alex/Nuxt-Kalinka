<template>
  <button class="lang-switch" @click="$emit('switchLang')">{{ currentLang === 'ru'? 'EN' : 'RU' }}</button>
</template>

<script setup>
defineProps({
  currentLang: {
    type: String,
    required: true
  }
})

defineEmits(['switchLang'])
</script>
