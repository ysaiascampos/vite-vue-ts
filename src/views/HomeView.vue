<template>
  <section>
    <h2>Home</h2>
    <p>App: {{ appStore.appName }}</p>
    <p v-if="status">API status: {{ status }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAppStore } from '@/stores/app.store'
import { getStatus } from '@/services/status.service'

const appStore = useAppStore()
const status = ref<string | null>(null)

onMounted(async () => {
  try {
    status.value = await getStatus()
  } catch {
    status.value = 'API no disponible'
  }
})
</script>