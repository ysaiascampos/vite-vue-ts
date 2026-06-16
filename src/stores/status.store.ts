import { defineStore } from 'pinia'
import { getStatus } from '@/services/status.service'

export const useStatusStore = defineStore('status', {
  state: () => ({
    status: null as string | null,
    loading: false,
  }),

  actions: {
    async fetchStatus() {
      this.loading = true

      try {
        this.status = await getStatus()
      } catch {
        this.status = 'API no disponible'
      } finally {
        this.loading = false
      }
    },
  },
})