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
import http from '@/http/client'

const appStore = useAppStore()
const status = ref<string | null>(null)

onMounted(async () => {
  try {
    const response = await http.get('/status')
    status.value = response.data.status
  } catch {
    status.value = 'API no disponible'
  }
})
</script>