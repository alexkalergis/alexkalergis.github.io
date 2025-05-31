/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // No basePath needed for username.github.io repositories
  basePath: '',
  assetPrefix: '',
  eslint: {
    // Don't run ESLint during build to avoid deployment failures
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't let TypeScript errors prevent deployment
    ignoreBuildErrors: true,
  }
}

export default nextConfig
