<template>
  <div class="container py-28">
    <div class="text-center">
      <h2 class="text-paragraph">{{ $t("faq.title") }}</h2>
      <h6 class="text-primary uppercase font-bold mt-4">
        {{ $t("faq.subtitle") }}
        <img
          src="@/assets/logo-text.webp"
          alt="logo text"
          class="inline ml-1"
          width="100"
        />
      </h6>
    </div>
    <div
      class="faq-wrapper max-w-[1000px] my-20 mx-auto ease-in-out duration-500"
    >
      <div
        v-for="faq in faqs"
        :key="'faq-' + faq"
        class="pb-2 border-b-[1px] mb-7"
      >
        <div
          class="flex cursor-pointer items-center mb-2"
          @click="activeFaqs[faq] = !activeFaqs[faq]"
        >
          <h2 class="text-xl text-title cursor-pointer">
            {{ $t("faq." + faq + ".title") }}
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2B2A29"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather ml-auto ease-in-out duration-200 feather-chevron-down -rotate-90"
            :style="activeFaqs[faq] ? 'transform: rotate(0);' : ''"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <transition name="slide">
          <div
            :key="faq"
            class="faq"
            :class="activeFaqs[faq] ? 'expanded' : ''"
          >
            <p class="text-title">
              {{ $t("faq." + faq + ".content") }}
            </p>
          </div>
        </transition>
      </div>
    </div>
    <div id="contact" class="text-center mt-12">
      <h4 class="text-xl text-paragraph">{{ $t("faq.partnership") }}</h4>
      <img
        src="@/assets/images/logos-v2.jpg"
        alt="partnership logos"
        class="mt-12 mb-20 md:max-w-[650px] lg:max-w-[800px] mx-auto"
      />
      <h2 class="text-primary mx-auto mt-8 mb-8 max-w-[600px]">
        {{ $t("faq.why") }}
      </h2>

      <div class="inline-block overflow-hidden relative w-full">
        <img
          class="pointer-events-none absolute w-full h-full z-[-1] object-none"
          src="@/assets/images/contact-1.png"
        />
        <img
          src="@/assets/images/ripos-1.png"
          class="absolute top-0 right-[50px] w-[300px] form-ripos"
        />
        <div class="flex items-start">
          <Form />
        </div>
      </div>

      <img
        src="@/assets/images/logo-icon.png"
        alt="logo icon"
        class="max-w-[60px] my-8 mx-auto"
      />

      <a
        :href="`mailto:${email}`"
        class="casual-blue-button border-0 ease-in-out hover:border-0 hover:px-12"
        >{{ $t("faq.scheduleDemo") }}</a
      >
      <p class="mt-6">
        {{ $t("faq.or") }}
        <a
          href="mailto:info@embneusys.com"
          target="_blank"
          class="text-blue hover:border-blue"
          >{{ $t("faq.contact") }}</a
        >
      </p>
    </div>
  </div>
</template>

<style>
.faq {
  @apply opacity-0 h-0 invisible ease-out duration-500;
}

.expanded {
  @apply py-6 visible h-auto opacity-100;
}
</style>

<script>
import Vue from "vue";
import Form from "@/components/home/Form.vue";

export default {
  components: {
    Form,
  },
  data() {
    return {
      faqs: [1, 2, 3],
      activeFaqs: {},
    };
  },
  mounted() {
    // initialize with false opened state
    for (let faq of this.faqs) {
      Vue.set(this.activeFaqs, faq, false);
    }
  },
};
</script>
