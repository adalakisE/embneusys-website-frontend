
<template>

  <div class="container py-28">
    <h2 class=" text-paragraph">{{$t('easy.title')}}</h2>
    <h6 class="text-primary uppercase font-bold mt-4">{{$t('easy.subtitle')}}</h6>

    <div class="grid md:grid-cols-12 items-center">

      <div class="md:col-span-8 order-2 md:order-1">


        <div class="mt-12">
          <div v-for="step in steps" :key="step" class="my-6 ml-3 flex my-6 md:pr-12 md:max-w-[70%]">
            <div class="shrink-0 mr-2">
              <img src="@/assets/images/bullet.png" class="w-[24px] mt-1 h-[24px]"/>
            </div>

            <div>
              <h3 class="font-bold mb-4 ">
                {{$t('easy.' + step + '.title')}}
              </h3>
              <p class="text-sm">
                {{$t('easy.' + step + '.paragraph')}}
              </p>
            </div>



          </div>
        </div>

      </div>

      <div class="md:col-span-4 mt-12 md:mt-0 order-1 md:order-2">

        <img src="@/assets/images/easy.jpg" alt="worker drilling"  class="mx-auto max-w-[80%]"/>


      </div>
    </div>
  </div>


</template>

<script>
export default{

  data(){
    return{
      steps: [1,2,3]
    }
  }

}
</script>