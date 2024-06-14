<template>
  <div class="slider">
    <div class="slider-wrapper">
      <div class="slider-slide" v-for="(image, index) in object.images" :key="index" :class="{ 'active': currentIndex === index }">
        <img :src="image" alt="Object image" />
      </div>
    </div>
    <div class="slider-controls">
      <button @click="prevSlide(object)" class="slider-prev">Предыдущая</button>
      <button @click="nextSlide(object)" class="slider-next">Следущая</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  object: {
    type: Object,
    required: true
  }
})

const currentIndex = ref(0)

function prevSlide(object) {
  currentIndex.value = (currentIndex.value - 1 + object.images.length) % object.images.length
}

function nextSlide(object) {
  currentIndex.value = (currentIndex.value + 1) % object.images.length
}
</script>

<style>
.slider {
  position: relative;
  width: 100%;
  height: 650px;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slider-slide {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(0);
}

.slider-slide.active {
  transform: translateX(0);
}

.slider-slide:not(.active) {
  transform: translateX(-100%);
}

.slider-controls {
  display: flex;
  gap: 20px;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
}

.slider-prev,.slider-next {
  background-color: coral;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

</style>
