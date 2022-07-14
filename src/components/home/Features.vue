
<template>

  <div class="bg-grey_bg">
    <div class="container py-28">

      <h2 class="text-3xl text-paragraph text-center mb-12">{{$t('features.title')}}</h2>
      <div class="grid md:grid-cols-3">

        <div v-for="feature in features" :key="feature" class="my-4 md:pr-12">

          <img :src="getImgUrl('features-'+feature + '.webp')" alt="feature decoration image" class="w-[90px] -ml-3"/>
          <h3 class="text-2xl font-bold my-4">
            {{$t('features.' + feature + '.title')}}
          </h3>
          <p>
            {{$t('features.' + feature + '.paragraph')}}
          </p>

        </div>

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
  },
  methods:{
    getImgUrl(pic) {
      return require('../../assets/images/'+pic)
    }
  }

}
</script>