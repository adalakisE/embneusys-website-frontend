<template>
  <div>
    <the-header showItems="none" />
    <img
      class="pointer-events-none absolute w-full h-[1120px] z-[-1] object-cover"
      src="@/assets/images/contact-1.png"
    />
    <div class="flex items-start contact-container">
      <Form />

      <img
        src="@/assets/images/ripos-1.png"
        class="absolute top-0 mt-[70px] right-[50px] w-[300px] form-ripos"
      />
    </div>
    <the-footer showItems="none" />
  </div>
</template>

<script>
import Form from "@/components/contact/Form.vue";
import TheHeader from "@/components/Head.vue";
import TheFooter from "@/components/Footer.vue";

export default {
  name: "Contact",
  components: {
    Form,
    TheHeader,
    TheFooter,
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    goToLandingPage() {
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/" });
      } else {
        this.scrollToTop();
      }
    },
  },
};
</script>

<style></style>
