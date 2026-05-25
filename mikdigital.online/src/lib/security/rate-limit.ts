// In-memory rate limiter — resets on cold start, suitable for Netlify serverless
const store = new Map<string, { count: number; resetAt: number }>()

export function rateLimit(
  ip: string,
  limit: number,
  windowMs: number
): { ok: boolean; remaining: number } {
  const now = Date.now()
  const entry = store.get(ip)

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + windowMs })
    return { ok: true, remaining: limit - 1 }
  }

  if (entry.count >= limit) {
    return { ok: false, remaining: 0 }
  }

  entry.count++
  return { ok: true, remaining: limit - entry.count }
}
