// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const env = process.env.BUILD_ENV || 'prod';
const buildConfig = require('./build.config');

const path = require('path');

module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'Smaple Description',
  siteUrl: buildConfig[env].siteUrl,
  titleTemplate: '',
  pathPrefix: buildConfig[env].pathPrefix,
  port: 3000,
  metadata: {
    ogBase: {
      locale: 'ja_JP',
      type: 'website',
      image: 'og.png'
    }
  },
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32]
    },
    touchicon: {
      src: './src/favicon.png',
      sizes: [180, 192],
      precomposed: true
    }
  },
  plugins: [
    { use: 'gridsome-plugin-pug' },
    {
      use: 'gridsome-plugin-svg',
      options: {
        svgo: [
          { removeUselessDefs: true },
          { removeAttrs: { attrs: ['fill', 'id', 'class', 'data-name'] } },
          { removeStyleElement: true },
          { convertPathData: true },
          { convertTransform: true }
        ]
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        sourceMap: false,
        plugins: [
          require('autoprefixer')({
            flexbox: 'no-2009',
            grid: 'autoplace'
          })
        ]
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@images': '@/assets/images'
      }
    }
  },
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => {
      addStyleResources(config.module.rule('stylus').oneOf(type));
    });
  }
};

// common style using.
function addStyleResources(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // global styl (variables, mixin, palette...etc)
        path.resolve(__dirname, './src/assets/styles/global.styl'),
        path.resolve(__dirname, './src/assets/styles/index.styl')
      ]
    });
}
