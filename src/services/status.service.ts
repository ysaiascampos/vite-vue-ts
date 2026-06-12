import http from '@/http/client'

export async function getStatus(): Promise<string> {
  const response = await http.get('/status')
  return response.data.status
}