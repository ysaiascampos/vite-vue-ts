import type { AxiosError, AxiosResponse } from 'axios'

export function onResponse(response: AxiosResponse) {
  return response
}

export function onResponseError(error: AxiosError) {
  const status = error.response?.status

  // SOLO observamos y normalizamos
  if (status === 401) {
    console.warn('HTTP 401 – No autenticado')
  }

  if (status === 419) {
    console.warn('HTTP 419 – CSRF expirado')
  }

  if (status && status >= 500) {
    console.error('HTTP 5xx – Error del servidor')
  }

  // IMPORTANTE: siempre propagamos el error
  return Promise.reject(error)
}