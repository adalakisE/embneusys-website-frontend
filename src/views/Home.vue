<template>
  <div id="home">


    <hero/>
    <features id="features"/>
    <easy id="easy"/>
    <efficiency id="efficiency"/>
    <solutions id="solutions"/>
    <testimonials id="testimonials"/>
    <faq id="faq"/>

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

  }
}
</script>
