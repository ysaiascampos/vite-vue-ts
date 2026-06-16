<template>
  <section>
    <h2>Home</h2>
    <p>App: {{ appStore.appName }}</p>

    <p v-if="statusStore.loading">Cargando...</p>
    <p v-else-if="statusStore.status">
      API status: {{ statusStore.status }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app.store'
import { useStatusStore } from '@/stores/status.store'

const appStore = useAppStore()
const statusStore = useStatusStore()

onMounted(() => {
  statusStore.fetchStatus()
})
</script>