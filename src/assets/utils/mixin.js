import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);

export default {
  data() {
    return {};
  },
  computed: {
    $gsap() {
      return gsap;
    },
    $ScrollTrigger() {
      return ScrollTrigger;
    }
  },
  methods: {
    // body-scroll-lock
    $contentsLock: disableBodyScroll,
    $contentsUnLock: enableBodyScroll,
    $clearLock: clearAllBodyScrollLocks,
    /* my custom */
    // ScrolllTrigger kill by id（作るときにid振るの必須）
    killScrollTrigger(id) {
      const trigger = this.$ScrollTrigger.getById(id);
      if (trigger) trigger.kill();
    },
    setMeta(data) {
      const baseTitleTemp = this.$root.$options.metaInfo.titleTemplate;
      const url = data.siteUrl + this.$route.path;

      const title = data.title || data.siteName;
      const description = data.description || data.siteDescription;
      const titleTemplate = data.titleTemplate || baseTitleTemp;

      // og
      const ogType = data.ogType || 'article';
      const ogTitle = titleTemplate.replace('%s', title);
      const ogImage = data.ogImage || data.siteUrl + '/assets/og.png';

      const metaInfo = {
        title: title,
        // htmlAttrs: { lang: lang },
        titleTemplate: titleTemplate,
        link: [{ rel: 'canonical', href: url }],
        meta: [
          { name: 'description', content: description },
          { property: 'og:locale', content: 'ja_JP' },
          { property: 'og:type', content: ogType },
          { property: 'og:site_name', content: data.siteName },
          { property: 'og:title', content: ogTitle },
          { property: 'og:description', content: description },
          { property: 'og:url', content: url },
          { property: 'og:image', content: ogImage },
          { property: 'og:image:secure_url', content: ogImage },
          { name: 'twitter:card', content: 'summary_large_image' }
        ]
      };

      return metaInfo;
    }
  }
};
