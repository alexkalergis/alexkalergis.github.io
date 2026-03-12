"use client";

import dynamic from "next/dynamic";

const HeaderPlaceholder = () => (
  <header className="header">
    <div className="header__inner">
      <a href="/" className="header__logo">
        Alex Kalergis
      </a>
    </div>
  </header>
);

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
