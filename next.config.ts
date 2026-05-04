import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Accept local /public/images/ with optimisation
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow external images if you add CDN later:
    remotePatterns: [
      // { protocol: 'https', hostname: 'your-cdn.com' },
    ],
  },
  compress: true,
  poweredByHeader: false,
}

export default nextConfig