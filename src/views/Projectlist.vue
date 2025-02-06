<script setup>
import { ref } from "vue";
import ProjectCards from "../components/ProjectCards.vue";
import SortableList from "../components/SortableList.vue";

const selectedSortOption = ref("Most Popular");
const activeFilters = ref([]);

// Update functions to receive emitted events
function updateSortOption(option) {
  selectedSortOption.value = option;
}

function updateFilters(filters) {
  activeFilters.value = filters;
}
</script>

<template>
  <div class="min-h-screen py-8 bg-transparent">
    <div class="mx-auto space-y-4 max-w-7xl">
      <SortableList
        @update:sortOption="updateSortOption"
        @update:filters="updateFilters"
      />
      <ProjectCards :sortOption="selectedSortOption" :filters="activeFilters" />
    </div>
  </div>
</template>
