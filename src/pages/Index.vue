<template lang="pug">
Layout
  .home-image
    //- Learn how to use images here: https://gridsome.org/docs/images
    g-image(alt='Example image', src='~/favicon.png', width='135')

  h1 Hello, world!

  p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores

  p.home-links
    a(href='https://gridsome.org/docs/', target='_blank', rel='noopener') Gridsome Docs
    a(href='https://github.com/gridsome/gridsome', target='_blank', rel='noopener') GitHub

  .svg-test
    Fb
</template>

<script>
import Fb from '@/assets/svg/facebook.svg';

export default {
  metaInfo: {
    title: 'Hello, world!',
    titleTemplate: ''
  },
  components: {
    Fb
  }
};
</script>

<style lang="stylus">
.home-image img
  width: 135px

.home-links a
  margin-right: 1rem

.svg-test
  width: 100px
</style>
