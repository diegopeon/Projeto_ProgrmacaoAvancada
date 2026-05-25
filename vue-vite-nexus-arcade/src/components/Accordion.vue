<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const openIndex = ref(0)

function toggle(index) {
  // Mantém apenas um item aberto por vez, deixando o acordeão mais limpo.
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="accordion">
    <div v-for="(item, index) in props.items" :key="item.title" class="accordion-item">
      <button class="accordion-trigger" type="button" @click="toggle(index)">
        <span>{{ item.title }}</span>
        <span>{{ openIndex === index ? '−' : '+' }}</span>
      </button>
      <div class="accordion-content" :class="{ open: openIndex === index }">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
