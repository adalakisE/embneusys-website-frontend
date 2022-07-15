<template>

  <header id="header" class=" py-4">

    <div class="container">
      <div class="grid grid-cols-2 md:grid-cols-12 items-center">
        <div class="md:col-span-3">

          <img src="../assets/logo.png" alt="logo"  class="w-[220px] max-w-[100%] cursor-pointer" @click="scrollToTop"/>
        </div>
        <div class="md:col-span-9 flex justify-end items-center">

          <div class="desktop-menu hidden md:block">
            <a v-for="item in menu" :key="item.hash" :href="item.hash" class="mr-5">{{item.name}}</a>

          </div>

            <a v-for="(lang, i) in locales" :key="`Lang${i}`" :value="lang.code" class="lang-switch"
               :class="$i18n.locale === lang.code ? 'current' : ''" @click="changeLang(lang.code)">
              {{ lang.text }}
            </a>

          <div class="ml-5 block md:hidden relative" @click="showMobileMenu = !showMobileMenu">
            <button class="hamburger hamburger--slider" type="button" :class="showMobileMenu? 'is-active' :''">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
              </button>
          </div>


        </div>
      </div>
    </div>
    <div v-show="showMobileMenu" class="mobile-menu">
      <a v-for="item in menu" :key="item.hash" :href="item.hash"  @click="showMobileMenu = false" class="mr-5 block text-xl p-2 my-2">{{item.name}}</a>

    </div>

  </header>
</template>

<style>
#header{
  position:fixed;
  top:0;
  left:0;
  right:0;
  opacity:0.99;
  background-color: rgba(215, 215, 215, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

}
.mobile-menu{
  @apply absolute right-0 top-[80px] w-[100vw] px-12;
  background-color: rgba(245,245,245,0.95);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.lang-switch{
  @apply p-2 cursor-pointer border-b-0 hover:border-b-0 font-bold duration-500 ease-in-out;
}
a.current{
  @apply bg-white cursor-default font-normal;
}
</style>
<script>
export default{

  data(){
    return{
      locales: [{
        code: 'en',
        text: 'EN'
      },
        {
          code: 'el',
          text: 'EL'
        }],
      showMobileMenu: false,

      menu:[
        {
          name: this.$t('menu.solution'),
          hash: '#features'
        },

        {
          name: this.$t('menu.resources'),
          hash: '#efficiency'
        },
        {
          name: this.$t('menu.about'),
          hash: '#solutions'
        },
        {
          name: this.$t('menu.faq'),
          hash: '#faq'
        },
        {
          name: this.$t('menu.quote'),
          hash: '#contact'
        }

      ]
    }
  },
  mounted(){
    if(this.$route.query.lang) this.$i18n.locale = this.$route.query.lang;
  },
  methods:{
    changeLang(newLang){
      this.$i18n.locale = newLang;
      this.$router.push({ path: this.$route.path, query: { lang: newLang }})

    },
    scrollToTop(){
      window.scrollTo(0,0);
    }
  }
}


</script>