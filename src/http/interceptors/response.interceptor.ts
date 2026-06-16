import type { AxiosError, AxiosResponse } from 'axios'
import { emit } from '@/core/events'

export function onResponse(response: AxiosResponse) {
  return response
}

export function onResponseError(error: AxiosError) {
  const status = error.response?.status

  if (status === 401) {
    console.warn('HTTP 401 – No autenticado')
    emit('unauthorized')
  }

  if (status === 419) {
    console.warn('HTTP 419 – CSRF expirado')
    emit('csrf_expired')
  }

  if (status && status >= 500) {
    console.error('HTTP 5xx – Error del servidor')
  }

  return Promise.reject(error)
}