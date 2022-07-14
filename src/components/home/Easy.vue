
<template>

  <div class="container py-28">

    <div class="grid md:grid-cols-12 items-center">

      <div class="md:col-span-8">

        <h2 class="text-3xl text-paragraph">{{$t('easy.title')}}</h2>
        <h6 class="text-primary text-normal mt-4">{{$t('easy.subtitle')}}</h6>

        <div class="mt-12">
          <div v-for="step in steps" :key="step" class="my-6 md:pr-12 md:max-w-[70%]">

            <h3 class="text-2xl font-bold my-4">
              {{$t('easy.' + step + '.title')}}
            </h3>
            <p>
              {{$t('easy.' + step + '.paragraph')}}
            </p>

          </div>
        </div>

      </div>

      <div class="md:col-span-4">

        <img src="@/assets/images/easy.jpg" alt="worker drilling"  class="max-w-[80%]"/>


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