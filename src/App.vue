<template>
  <div id="app">
    <!-- <the-header/> -->
    <router-view class="mt-12" />
    <!-- <the-footer/> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
export default {
  metaInfo() {
    return {
      title: "Home",
      titleTemplate: "%s — Embneusys",
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },
};
</script>
