/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // <-- Required for static HTML export
  trailingSlash: true,        // <-- Ensures every route has a trailing slash (important for GitHub Pages)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
