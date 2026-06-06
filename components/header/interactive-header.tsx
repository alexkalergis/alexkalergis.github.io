import { Header } from "@/components/header/header";

// Kept as a thin wrapper so existing call sites stay unchanged.
// The header is server-rendered for SEO; only its scroll/menu state hydrates on the client.
export function InteractiveHeader() {
  return <Header />;
}
