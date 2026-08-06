<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const progress = ref(0)

function updateProgress() {
  const height = document.documentElement.scrollHeight - window.innerHeight
  progress.value = height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
  window.addEventListener('resize', updateProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
})
</script>

<template>
  <div v-if="route.path !== '/'" class="reading-progress" aria-hidden="true">
    <span :style="{ width: `${progress}%` }" />
  </div>
</template>
