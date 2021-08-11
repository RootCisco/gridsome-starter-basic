// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import SvgElement from '~/components/global/SvgElement.vue';
import PictureElement from '~/components/global/PictureElement.vue';
import DefaultLayout from '~/layouts/Default.vue';
import BgWebp from '~/assets/utils/bg-webp';
import mixin from '~/assets/utils/mixin';
import store from '~/store/index';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// css
import '@fortawesome/fontawesome-svg-core/styles.css';
import '~/assets/styles/index.styl';

// fontawesome register
config.autoAddCss = false;
library.add(faTwitter, faInstagram);

export default function (Vue, { appOptions, router, head, isClient }) {
  // remove meta generator
  const gIndex = head.meta.findIndex((e) => e.name === 'generator');
  if (gIndex !== -1) head.meta.splice(gIndex, 1);

  // head settings
  head.htmlAttrs.lang = 'ja';
  head.meta = head.meta.filter((meta) => meta.name !== 'viewport');

  // web fonts
  // const fontsLinks = [
  //   { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  // ];
  // fontsLinks.forEach((value) => head.link.push(value));

  // global components
  const components = {
    FontAwesomeIcon,
    SvgElement,
    PictureElement
  };
  Object.entries(components).forEach(([name, component]) => Vue.component(name, component));

  // global layout
  Vue.component('Layout', DefaultLayout);

  // background-image webp
  Vue.use(BgWebp);

  // mixins
  Vue.mixin(mixin);

  // vuex store
  appOptions.store = store;
}
