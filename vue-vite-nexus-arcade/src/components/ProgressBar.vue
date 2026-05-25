<script setup>
import { computed } from 'vue'

const props = defineProps({
  progress: {
    type: Number,
    required: true
  }
})

// Garante que a barra nunca renderize valores inválidos fora do intervalo 0-100.
const normalizedProgress = computed(() => Math.max(0, Math.min(100, props.progress)))
</script>

<template>
  <div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" :aria-valuenow="normalizedProgress">
    <div class="progress-fill" :style="{ width: `${normalizedProgress}%` }">
      {{ normalizedProgress }}%
    </div>
  </div>
</template>
