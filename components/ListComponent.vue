<template>
  <ul class="main-list">
    <li class="main-item" v-for="(object, index) in visibleObjects" :key="object.id"
      :style="object.images.length > 0? { 
        'height': '200px', 
        'width': '250px', 
        '--image-url': `url(${object.images[0]})`
      } : {}">

      <div class="main-item-wrap">
        <span class="type" :class="{ 'type-condo': object.type.includes('Condo'), 'type-villa': object.type.includes('Villa') }">{{ object.type.join('') }}</span>
        <div class="item-wrap">
          <a class="link" :href="`/object/${object.id}`">{{ object.title.en }}</a>
          <PriceComponent :price="object.price" />
        </div>
      </div>
    </li>
  </ul>
  <div v-if="hasMoreObjects" @click="loadMoreObjects">Load more...</div>
</template>

<script setup>
import PriceComponent from './PriceComponent.vue'
import { ref, watch } from 'vue'

const props = defineProps({
  objects: {
    type: Array,
    required: true
  }
})

const visibleObjects = ref([])
const pageSize = 6
const hasMoreObjects = ref(true)

watch(() => props.objects, (newObjects) => {
  visibleObjects.value = []
  loadMoreObjects()
})

onMounted(() => {
  loadMoreObjects()
})

function loadMoreObjects() {
  const startIndex = visibleObjects.value.length
  const endIndex = startIndex + pageSize
  const newObjects = props.objects.slice(startIndex, endIndex)
  visibleObjects.value = [...visibleObjects.value, ...newObjects]
  hasMoreObjects.value = endIndex < props.objects.length
}
</script>

<style scoped>
.main-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.main-item {
  margin: 20px;
  border: 1px solid coral;
  border-radius: 10px;
  width: 250px;
  height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.main-item::before {
  content: "";
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-image: var(--image-url);
  filter: brightness(70%);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}


.main-item-wrap {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px 20px;
  height: 100%;

}

.item-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

}

.main-item:hover {
  box-shadow: 0 0 10px brown;
}

.type {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  max-width: 50px;
  font-size: 12px;
  border-radius: 20px;
  color: #fff;
}

.type-condo {
background-color: cornflowerblue;
}

.type-villa {
  background-color: indianred;
}

.link {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.text {
  color: #fff;
}

.link:hover {
color: antiquewhite;
}

h2 {
  margin-bottom: 10px;
  color: #fff;
}
</style>

