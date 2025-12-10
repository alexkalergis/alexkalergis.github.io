"use client";

import dynamic from "next/dynamic";

// This is a static placeholder. It's crucial that it uses a plain `<a>` tag
// instead of Next's `<Link>` to ensure it's 100% server-renderable without client-side hooks.
const HeaderPlaceholder = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between">
      <a href="/" className="flex items-center">
        <span className="font-bold text-xl font-mono">Alex Kalergis</span>
      </a>
    </div>
  </header>
);

// We use `next/dynamic` to load the interactive Header component.
// `ssr: false` is the key: it prevents this component from being rendered on the server.
const DynamicHeader = dynamic(
  () => import("@/components/header/header").then((mod) => mod.Header),
  {
    ssr: false,
    loading: () => <HeaderPlaceholder />,
  }
);

export function InteractiveHeader() {
  return <DynamicHeader />;
}
