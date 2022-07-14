
<template>
  <div class="container">
    <div class="grid md:grid-cols-2 items-center py-24">
      <div class="order-2 md:order-1">

        <h1 class="text-3xl text-title font-bold mb-12">
          {{$t('title1')}} <br> {{$t('title2')}}
        </h1>

        <p class="text-sm mb-6"> {{$t('agnostic')}}
        </p>
        <p class="mb-8">
          {{$t('hero1')}}
        </p>

        <a :href="`mailto:${email}`" class="casual-blue-button border-0 ease-in-out hover:border-0 hover:px-12">{{ $t('viewDemo') }}</a>
      </div>


      <div class="md:flex items-end justify-center mb-12 md:mb-0 order-1 md:order-2">
        <img src="@/assets/images/home.webp" alt="construction building"  class="mx-auto md:mx-0 max-w-[75%]" loading="lazy"/>
        <img src="@/assets/images/espa-vertical.webp" alt="espa logo"  class="hidden md:block max-w-[35px] ml-3 "/>
        <img src="@/assets/images/espa.webp" alt="espa logo"  class="block md:hidden block mx-auto max-w-[90%] mt-3 "/>
      </div>
    </div>
  </div>

</template>

<script>
export default{

}
</script>