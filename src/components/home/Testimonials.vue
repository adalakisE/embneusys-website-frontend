
<template>

  <div class="bg-grey_bg">

    <div class="container py-28">

      <h2 class=" text-paragraph text-center mb-12">
        <img src="@/assets/images/logo-icon.png"  alt="logo icon" class="inline mr-3" width="40"/>
        {{$t('testimonials.title')}}
        <img src="@/assets/logo-text.webp" alt="logo text"  class="inline ml-1" width="140"/>
      </h2>


      <div class="grid md:grid-cols-12 gap-4 max-w-[1000px] mx-auto mt-24 mb-12">
        <div :style="`background-image:url('./testimonials-img-1.webp')`" class="rounded-xl h-[250px] md:col-span-3 bg-cover bg-no-repeat bg-center"></div>
        <div class="bg-white h-[250px] md:col-span-6 rounded-xl p-6">
          <img src="@/assets/images/testimonials/canonic.jpg" alt="canonic logo" width="150"/>
          <p class="font-medium text-sm mt-6">
            {{$t('testimonials.1.content')}}
          </p>
          <p class="font-bold mt-2 text-sm">
            {{$t('testimonials.1.person')}}
          </p>

        </div>
        <div class="bg-white h-[250px] md:col-span-3 rounded-xl p-4">

          <img src="@/assets/images/testimonials/DEMIRTZAKIS@2x.jpg" alt="demirtzakis logo" width="100"/>
          <p class="font-medium text-sm mt-4">
            {{$t('testimonials.2.content')}}

          </p>

          <p class="font-bold mt-2 text-sm">
            {{$t('testimonials.2.person')}}
          </p>

        </div>
        <div class="bg-white h-[250px] md:col-span-9 rounded-xl py-8 px-12">
          <img src="@/assets/images/testimonials/TEKNMON@2x.jpg" alt="teknmon logo" width="150"/>
          <p class="font-medium mt-6">
            {{$t('testimonials.3.content')}}

          </p>

          <p class="font-bold mt-2 text-sm">
            {{$t('testimonials.3.person')}}
          </p>
        </div>
        <div :style="`background-image:url('./testimonials-img-2.webp')`" class="rounded-xl h-[250px] md:col-span-3 bg-cover bg-no-repeat bg-center"></div>

      </div>


    </div>
  </div>

</template>

<script>
export default{

  data(){
    return{
      features: [1,2,3]
    }
  }
}
</script>