class BgWebp {
  constructor() {
    this.isSupportWebp = false;

    try {
      const elm = document.createElement('canvas');
      this.isSupportWebp = elm.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('This browser not support Webp!');
    }
  }

  install(Vue, config) {
    Vue.directive('bgwebp', (el, binding, vnode) => {
      // const bindValue = binding.value.src.toString();

      // const src = this.isSupportWebp ? bindValue.replace(/(\.jpg|\.png)/g, '.webp') : bindValue;
      // el.style.backgroundImage = `url(${src})`;
      const className = this.isSupportWebp ? 'webp' : 'nowebp';
      el.classList.add(className);
    });
  }
}

module.exports = new BgWebp();
