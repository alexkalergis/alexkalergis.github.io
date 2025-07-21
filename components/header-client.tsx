"use client"

import { useEffect, useState, type ComponentType } from "react"

export default function HeaderClient() {
  const [Header, setHeader] = useState<ComponentType | null>(null)

  // Lazy-load the interactive Header only after hydration (client side)
  useEffect(() => {
    import("@/components/header").then((m) => setHeader(() => m.Header))
  }, [])

  if (!Header) return null
  return <Header />
}
