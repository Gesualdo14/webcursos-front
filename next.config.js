/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["webcursos.blob.core.windows.net"],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `style-src 'self' *.fontawesome.com fonts.cdnfonts.com`,
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
