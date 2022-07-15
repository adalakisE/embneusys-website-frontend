
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import '@/assets/css/hamburger.css';
import VueI18n from 'vue-i18n'
import el from "@/assets/lang/el";
import en from "@/assets/lang/en"
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.use(VueI18n)
Vue.config.productionTip = false


const messages = {
  en,
  el
}

Vue.mixin({
  data(){
    return{
      email: 'info@embneusys.com'
    }
  }
})
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  seo: true,
  messages
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
