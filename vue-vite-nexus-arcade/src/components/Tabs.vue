<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true
  }
})

const activeIndex = ref(0)
</script>

<template>
  <div class="tabs">
    <div class="tabs-nav" role="tablist">
      <button
        v-for="(tab, index) in props.tabs"
        :key="tab.title"
        class="tab-button"
        type="button"
        :class="{ active: activeIndex === index }"
        @click="activeIndex = index"
      >
        {{ tab.title }}
      </button>
    </div>

    <div class="tab-panel">
      <p>{{ props.tabs[activeIndex].content }}</p>
    </div>
  </div>
</template>
