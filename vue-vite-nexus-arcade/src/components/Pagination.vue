<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['page-change'])

const pages = computed(() => Array.from({ length: props.totalPages }, (_, index) => index + 1))

function goTo(page) {
  if (page < 1 || page > props.totalPages) return
  emit('page-change', page)
}
</script>

<template>
  <div class="pagination" aria-label="Paginação">
    <button type="button" :disabled="currentPage === 1" @click="goTo(currentPage - 1)">Anterior</button>
    <button
      v-for="page in pages"
      :key="page"
      type="button"
      :class="{ active: currentPage === page }"
      @click="goTo(page)"
    >
      {{ page }}
    </button>
    <button type="button" :disabled="currentPage === totalPages" @click="goTo(currentPage + 1)">Próxima</button>
  </div>
</template>
