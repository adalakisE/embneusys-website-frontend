
<template>
  <div class="container">
    <div class="grid md:grid-cols-2 items-center py-24">
      <div class="order-2 md:order-1 text-center md:text-left">

        <h1 class="text-2xl md:text-3xl text-title font-bold mb-6 md:mb-12">
          {{$t('title1')}} <br> {{$t('title2')}}
        </h1>

        <p class="text-sm mb-3 md:mb-6"> {{$t('agnostic')}}
        </p>
        <p class="md:max-w-[90%]">
          {{$t('hero1')}}
        </p>
        <p class="mb-14">
          {{$t('hero2')}}
        </p>

        <a :href="`mailto:${email}`" class="casual-blue-button border-0 ease-in-out hover:border-0 hover:px-12">{{ $t('viewDemo') }}</a>
      </div>


      <div class="md:flex items-end justify-end mb-6 md:mb-12 md:mb-0 order-1 md:order-2">
        <img src="@/assets/images/home.webp" alt="construction building"  class="mx-auto md:mx-0 hidden md:block max-w-[80%] xl:max-w-[60%]" loading="lazy"/>

        <div style="background-image:url('./home.webp')" class="bg-center rounded-3xl bg-cover h-[255px] block md:hidden "/>
<!--        <img src="@/assets/images/espa-vertical.webp" alt="espa logo"  class="hidden md:block max-w-[35px] ml-3 "/>-->
      </div>
    </div>
  </div>

</template>

<script>
export default{

}
</script>