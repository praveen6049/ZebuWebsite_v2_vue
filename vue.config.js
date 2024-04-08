const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

// const SitemapPlugin = require('sitemap-webpack-plugin').default
// const paths = [
//   {
//       path: '/',
//       lastmod: '2021-11-22',
//       priority: 1.0,
//       changefreq: 'yearly'
//   },
//   {
//       path: '/about/',
//       lastmod: '2021-11-22',
//       priority: 0.9,
//       changefreq: 'yearly'
//   }
// ]

// module.exports = {
//     configureWebpack: {
//         plugins: [
//             new SitemapPlugin({ base: 'https://zebuetrade-v2.web.app/', paths })
//         ]
//     },
    
    
// }


