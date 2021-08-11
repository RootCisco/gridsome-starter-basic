// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const env = process.env.BUILD_ENV || 'prod';
const buildConfig = require('./build.config');

const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozJpeg = require('imagemin-mozjpeg');

module.exports = {
  siteName: 'site name',
  siteDescription: 'site description',
  siteUrl: buildConfig[env].siteUrl,
  titleTemplate: '%s',
  pathPrefix: buildConfig[env].pathPrefix,
  port: 3000,
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
        goesBothWays: true,
        svgo: [
          { removeUselessDefs: true },
          { removeDimensions: true },
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
    // resources styles
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => {
      addStyleResources(config.module.rule('stylus').oneOf(type));
    });

    // imagemin
    config.plugin('ImageminPlugin').use(ImageminPlugin, [
      {
        test: /\.(jpg|png|gif)$/i,
        disable: env === 'local',
        pngquant: { quality: '75' },
        plugins: [ImageminMozJpeg({ quality: 75, progressive: true })]
      }
    ]);
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
        path.resolve(__dirname, './src/assets/styles/global/*.styl')
      ]
    });
}
