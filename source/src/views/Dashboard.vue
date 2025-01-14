<script setup>
import SimpleCards from "../components/SimpleCards.vue";
import DetailCards from "../components/DetailCards.vue";
</script>

<template>
  <div class="min-h-screen py-8 bg-pale-gray">
    <!-- Opaque container for the dashboard content -->
    <div class="p-8 mx-auto mb-8 bg-white rounded-lg shadow-lg max-w-7xl">
      <SimpleCards />
    </div>
    <div class="p-8 mx-auto bg-white rounded-lg shadow-lg max-w-7xl">
      <DetailCards />
    </div>
  </div>
</template>
