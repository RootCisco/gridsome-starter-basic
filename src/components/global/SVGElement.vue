<template lang="pug">
component(:is='icon')
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    icon: function () {
      const target = require(`~/assets/svg/${this.name}.svg`);
      return target;
    }
  }
};
</script>
