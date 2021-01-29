<template lang="pug">
router-view
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription,
    siteUrl,
    ogBase {
      locale,
      type,
      image
    }
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    const { siteName, siteDescription, siteUrl, ogBase } = this.$static.metadata;
    const ogImagePath = siteUrl + ogBase.image;

    const metaInfo = {
      title: siteName,
      link: [{ key: 'canonical', rel: 'canonical', href: siteUrl }],
      meta: [
        { key: 'og:locale', property: 'og:locale', content: ogBase.locale },
        { key: 'og:type', property: 'og:type', content: ogBase.type },
        { key: 'og:site_name', property: 'og:site_name', content: siteName },
        { key: 'og:title', property: 'og:title', content: siteName },
        { key: 'og:description', property: 'og:description', content: siteDescription },
        { key: 'og:url', property: 'og:url', content: siteUrl },
        { key: 'og:image', property: 'og:image', content: ogImagePath },
        { key: 'og:image:secure_url', property: 'og:image:secure_url', content: ogImagePath },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    };

    return metaInfo;
  }
};
</script>

