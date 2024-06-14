<template>
  <div class="lang-wrap">
    <a class="lang-switch" href="/">назад</a>
    <button class="lang-switch" @click="$emit('switchLang')">{{ currentLang === 'ru'? 'EN' : 'RU' }}</button>
  </div>
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
