<script setup>
defineProps({
  toasts: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['remove'])
</script>

<template>
  <div class="toast-stack" aria-live="polite">
    <div v-for="toast in toasts" :key="toast.id" class="toast" :class="toast.type">
      <button type="button" aria-label="Fechar notificação" @click="emit('remove', toast.id)">×</button>
      <strong>{{ toast.type.toUpperCase() }}</strong>
      <p>{{ toast.message }}</p>
    </div>
  </div>
</template>
