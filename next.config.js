module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    path: 'https://jojocountdown.com',
    loader: 'imgix'
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': {
        page: '/'
      }
    }
  }
}
