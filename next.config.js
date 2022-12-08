
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/nextjs-blog/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig