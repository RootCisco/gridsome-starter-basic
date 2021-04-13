<template lang="pug">
picture
  template(v-if='media')
    source(type='image/webp', :srcset='require(`@images/${filename}-pc.webp`)', :media='mediaString')
    source(:srcset='require(`@images/${filename}-pc.${extention}`)', :media='mediaString')
  source(type='image/webp', :srcset='require(`@images/${filename}.webp`)')
  img(:src='require(`@images/${imagePath}`)', :alt='alt', :loading='loading', :decoding='decodingAsync')
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      default: 'test.jpg'
    },
    alt: {
      type: String,
      default: 'text'
    },
    loading: {
      type: [Boolean, String],
      default: 'lazy'
    },
    media: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return {
      filename: '',
      extention: '',
      mediaString: '(min-width: 834px)'
    };
  },
  computed: {
    decodingAsync() {
      return this.loading ? false : 'async';
    }
  },
  created() {
    const splitPath = this.imagePath.split('.');
    this.filename = splitPath[0];
    this.extention = splitPath[1];
  }
};
</script>
