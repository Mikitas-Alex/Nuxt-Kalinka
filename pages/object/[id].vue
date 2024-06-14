<template>
  <Header />
  <div class="container">
    <BtnLangBack :currentLang="currentLang" @switchLang="switchLang" />
    <ObjectHeader :object="object" />
    <ObjectDescription :object="object" :currentLang="currentLang" />
    <ObjectImageList :object="object" />
  </div>
</template>

<script setup>

const route = useRoute()
const { data: object } = await useFetch(`https://kalinka.phuket.forsale/objects/${route.params.id}`)
const currentLang = ref('en')

function switchLang() {
  currentLang.value = currentLang.value === 'ru'? 'en' : 'ru'
}
</script>

<style>

.image-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.img {
  width: 40%;
  height: 40%;
}

.title {
  margin-bottom: 20px;
  font-size: 42px;
  color: coral;
  font-weight: 600;
}

.text {
  margin-bottom: 10px;
}

.lang-wrap {
  display: flex;
  justify-content: end;
  gap: 20px;
}

.en, .ru {
  font-size: 24px;
  font-weight: bold;
  margin-top: 0;
}

.ru {
  color: red;
}

.desqr {
  line-height: 2;
  font-size: 16px;
  margin-bottom: 20px;
}

.lang-switch {
  background-color: coral;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.lang-switch:hover {
  background-color: brown;
}
</style>
