<template lang="pug">
picture
  template(v-if='media')
    source(type='image/webp', :srcset='require(`@images/${filename}_pc.webp`)', :media='mediaString')
    source(:srcset='require(`@images/${filename}_pc.${extention}`)', :media='mediaString')
  source(type='image/webp', :srcset='require(`@images/${filename}.webp`)')
  img(:src='require(`@images/${path}`)', :alt='alt', :loading='loading', :decoding='decodingAsync', :width='width', :height='height')
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: 'test.jpg'
    },
    alt: {
      type: String,
      default: ''
    },
    loading: {
      type: [Boolean, String],
      default: 'lazy'
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
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
      decodingAsync: this.loading ? false : 'async',
      mediaString: '(min-width: 835px)'
    };
  },
  created() {
    const splitPath = this.path.split('.');
    this.filename = splitPath[0];
    this.extention = splitPath[1];
  }
};
</script>
