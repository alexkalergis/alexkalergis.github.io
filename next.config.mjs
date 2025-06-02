/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export with next/image
  },
  // Optional: If you continue to have build issues related to linting or TypeScript,
  // you can uncomment these, but it's better to fix the underlying issues.
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
