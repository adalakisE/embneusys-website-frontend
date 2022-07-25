<template>
  <div id="home">


    <hero/>
    <features id="features"/>
    <easy id="easy"/>
    <efficiency id="efficiency"/>
    <solutions id="solutions"/>
    <testimonials id="testimonials"/>
    <faq id="faq"/>
    <img src="@/assets/images/espa.webp" alt="espa logo"  class="fixed bottom-2 right-0 cursor-pointer w-[20vw] block mt-3 " @click="showEspa = !showEspa"/>

    <div v-show="showEspa" class="pop-up fixed flex justify-center items-center top-0 left-0 right-0 bottom-0">
      <div class="overlay bg-black opacity-30 absolute top-0 left-0 bottom-0 right-0" @click.self="showEspa = false">

      </div>
      <div class="bg-white w-[400px] max-w-[100%] mx-auto z-20 rounded-xl py-4 px-6">
        <div v-html="$t('espa')" class="text-sm text-center"></div>
      </div>
    </div>
  </div>



</template>

<script>
// @ is an alias to /src
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Efficiency from "@/components/home/Efficiency";
import Easy from "@/components/home/Easy";
import Faq from "@/components/home/Faq";
import Solutions from "@/components/home/Solutions";
import Testimonials from "@/components/home/Testimonials";

export default {
  name: 'Home',
  components: {
    Hero, Features, Efficiency, Easy, Faq, Solutions, Testimonials

  },
  data(){
    return{
      showEspa: false
    }
  }
}
</script>
