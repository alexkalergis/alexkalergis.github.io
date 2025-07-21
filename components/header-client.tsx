"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

/* Hydrate the real interactive Header only in the browser */
const RealHeader = dynamic(() => import("@/components/header").then((m) => m.Header), { ssr: false })

export default function HeaderClient() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    /* mount -> swap in the interactive header */
    setShow(true)
  }, [])

  if (!show) return null
  return <RealHeader />
}
