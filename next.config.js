const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')()

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return []
  },
  publicRuntimeConfig: {
    mapbox: process.env.MAPBOX_API_TOKEN,
  },
  experimental: {
    turboMode: true,
  },
  future: {
    strictPostcssConfiguration: true,
  },
  images: {
    domains: ['images.pexels.com', 'i.scdn.co'],
  },
}

module.exports = withPlugins(
  [
    withMDX({
      pageExtensions: ['ts', 'tsx', 'mdx'],
      remarkPlugins: [
        require('remark-slug'),
        require('remark-code-titles'),
        require('remark-toc'),
      ],
      rehypePlugins: [require('mdx-prism')],
    }),
  ],
  nextConfig,
)
