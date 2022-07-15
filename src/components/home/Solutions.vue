
<template>

  <div class="container py-28 text-center">

      <h2 class=" text-paragraph ">{{$t('solutions.title')}}</h2>
    <h6 class="text-primary font-bold mt-4">{{$t('solutions.subtitle')}}</h6>

    <img src="@/assets/images/solutions.webp" alt="construction, integration, mining" class="mt-20 md:max-w-[60%] xl:max-w-[500px] mx-auto"/>

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