<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['select'])
const isOpen = ref(false)
const dropdownRef = ref(null)

function toggle() {
  isOpen.value = !isOpen.value
}

function selectOption(option) {
  emit('select', option)
  isOpen.value = false
}

function closeOnOutsideClick(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', closeOnOutsideClick))
onBeforeUnmount(() => document.removeEventListener('click', closeOnOutsideClick))
</script>

<template>
  <div ref="dropdownRef" class="dropdown">
    <button class="dropdown-button" type="button" @click.stop="toggle">Filtrar humor ▾</button>
    <div v-if="isOpen" class="dropdown-list">
      <button v-for="option in props.options" :key="option.value" class="dropdown-item" type="button" @click="selectOption(option)">
        {{ option.label }}
      </button>
    </div>
  </div>
</template>
