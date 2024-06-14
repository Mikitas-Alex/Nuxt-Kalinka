<template>
  <Header />
  <div class="container">
    <h1>Список</h1>
    <SearchInput v-model:searchText="searchText" />
    <ListComponent v-if="filteredObjects.length > 0" :objects="paginatedObjects" />
    <div v-else-if="searchText" class="error">Ничего не найдено</div>
    <div v-else class="loading">Загрузка...</div>
    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      :page-size="pageSize"
      :data="filteredObjects"
      @update:currentPage="updateCurrentPage"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const data = ref([])
const currentPage = ref(1)
const pageSize = 6
const searchText = ref('')
const totalPages = computed(() => Math.ceil(data.value.length / pageSize))

const fetchData = async (page, pageSize) => {
  const response = await fetch(`https://kalinka.phuket.forsale/objects?page=${page}&pageSize=${pageSize}`);
  const newData = await response.json();
  data.value = newData;
}

const loadData = async () => {
  const page = currentPage.value;
  await fetchData(page, pageSize);
}

onMounted(loadData)

const filteredObjects = computed(() => {
  if (!searchText.value) return data.value;
  return data.value.filter(object => object.title.includes(searchText.value));
})

const paginatedObjects = computed(() => filteredObjects.value.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize))

const updateCurrentPage = (page) => {
  currentPage.value = page
  loadData()
}
</script>

<style scoped>

h1 {
  margin-bottom: 10px;
}



</style>
