"use client"

import { useState, useEffect, type ComponentType } from "react"
import Link from "next/link"

// A simple, static placeholder that is safe to render on the server.
const HeaderPlaceholder = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center">
        <span className="font-bold text-xl font-mono">Alex Kalergis</span>
      </Link>
    </div>
  </header>
)

export function HeaderWrapper() {
  const [Header, setHeader] = useState<ComponentType | null>(null)

  useEffect(() => {
    // This dynamic import runs only on the client, after the component mounts.
    // This prevents the real Header and its hooks from being part of the server bundle.
    import("@/components/header")
      .then((module) => {
        setHeader(() => module.Header)
      })
      .catch((err) => console.error("Failed to load interactive header:", err))
  }, [])

  // Render the interactive Header once it's loaded on the client,
  // otherwise, render the static placeholder.
  return Header ? <Header /> : <HeaderPlaceholder />
}
