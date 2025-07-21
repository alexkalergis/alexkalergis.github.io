"use client"

import dynamic from "next/dynamic"

/* Dynamically load the real Header on the browser only */
const Header = dynamic(() => import("@/components/header").then((m) => m.Header), {
  ssr: false,
})

export default function ClientHeader() {
  return <Header />
}
