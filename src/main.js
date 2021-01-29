// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { router, head, isClient }) {
  // head settings
  head.htmlAttrs.lang = 'ja';
  head.meta.find((el) => el.key === 'viewport').content = 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0';

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
