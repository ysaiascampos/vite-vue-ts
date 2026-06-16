type Callback = () => void

const listeners: Record<string, Callback[]> = {}

export function on(event: string, callback: Callback) {
  if (!listeners[event]) {
    listeners[event] = []
  }

  listeners[event].push(callback)
}

export function emit(event: string) {
  if (!listeners[event]) return

  listeners[event].forEach((cb) => cb())
}