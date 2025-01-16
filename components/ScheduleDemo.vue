<template>
  <div class="schedule-demo">
    <!-- Bileşen içeriği buraya gelecek -->
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: ''
  }
})

defineEmits(['close'])
</script>

<style scoped lang="scss">
.schedule-demo {
  // Stil tanımlamaları buraya gelecek
}
</style> 