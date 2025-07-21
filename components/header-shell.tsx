/* SERVER-SAFE (no "use client") – only plain markup & links */
import Link from "next/link"
import { Menu } from "lucide-react"

/* minimal static header that renders while the page is prerendered */
export default function HeaderShell() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl font-mono">
          Alex Kalergis
        </Link>
        {/* mobile burger (static icon) */}
        <Menu className="md:hidden h-6 w-6 text-muted-foreground" />
      </div>
    </header>
  )
}
