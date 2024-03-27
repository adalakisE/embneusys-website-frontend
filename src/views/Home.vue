<template>
  <div id="home">
    <hero />
    <div class="bg-blue py-4">
      <div class="container">
        <div class="md:flex items-center justify-center">
          <div
            class="w-fit bg-white mb-2 md:mb-0 px-2 py-1 text-sm flex-shrink-0 mr-3"
          >
            {{ $t("marquee.title") }}
          </div>

          <div class="text-sm text-white mt-1">
            <marquee
              direction="left"
              scrollamount="6"
              loop="-1"
              truespeed
              behavior="scroll"
              onmouseover="this.stop();"
              onmouseout="this.start();"
            >
              {{ $t("marquee.text") }}
            </marquee>
          </div>
        </div>
      </div>
    </div>
    <features id="features" />
    <easy id="easy" />
    <efficiency id="efficiency" />
    <solutions id="solutions" />
    <testimonials id="testimonials" />
    <team id="team" />
    <faq id="faq" />
    <img
      src="@/assets/images/espa.webp"
      alt="espa logo"
      class="fixed bottom-2 right-0 cursor-pointer w-[250px] md:w-[20vw] block mt-3"
      @click="openEspaBanner"
    />

    <div
      v-show="showEspa"
      class="pop-up fixed flex justify-center items-center top-0 left-0 right-0 bottom-0"
    >
      <div
        class="overlay bg-black opacity-30 absolute top-0 left-0 bottom-0 right-0"
        @click.self="showEspa = false"
      ></div>
      <div
        class="bg-white w-[400px] max-w-[100%] mx-auto z-20 rounded-xl py-4 px-6"
      >
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
import Team from "@/components/home/Team";

export default {
  name: "Home",
  components: {
    Hero,
    Features,
    Efficiency,
    Easy,
    Faq,
    Solutions,
    Testimonials,
    Team,
  },
  data() {
    return {
      showEspa: false,
    };
  },
  methods: {
    openEspaBanner() {
      const lang = this.$i18n.locale;

      if (lang === "en") window.open("/espa_en.pdf");
      else window.open("/espa_el.pdf");
    },
  },
};
</script>
