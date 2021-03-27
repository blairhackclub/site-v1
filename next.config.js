module.exports = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/GFHPKUSnj5',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/blairhackclub',
        permanent: true,
      },
    ]
  },
}