
<template>

  <div class="bg-grey_bg">

    <div class="container py-28">

      <h2 class=" text-paragraph text-center mb-12">{{$t('efficiency.title')}}</h2>
      <div class="grid md:grid-cols-3">

        <div v-for="feature in features" :key="feature" class="my-4 md:pr-12 text-center">

          <div class="my-5 text-center">
            <span class="text-3xl  p-4 font-extrabold rounded-3xl text-paragraph"  :style="`background-color:${$t('efficiency.' + feature + '.color')}` ">
              {{$t('efficiency.' + feature + '.title')}}
            </span>
          </div>

          <p class="md:max-w-[70%] md:mx-auto mt-12 font-light">
            {{$t('efficiency.' + feature + '.paragraph')}}
          </p>

        </div>


      </div>
      <div class="h-[200px] w-[100%] relative mb-6 block md:hidden">
        <img :src="require('@/assets/images/efficiency-'+activeTab+'.webp')" alt="worker clothes"
             class="w-[100%] h-[100%] object-cover rounded-3xl mx-auto mb-12"/>
      </div>
      <div class="my-12 grid grid-cols-1 md:grid-cols-12 max-w-[900px] mx-auto">

        <div class="col-span-8 order-2 md:order-1">
          <div v-for="tab in tabs" :key="'tab-'+tab" class="">

            <div v-if="activeTab === tab" class="max-w-[500px] mx-auto text-center  md:text-left">
              <div class="h-[250px] w-[100%] relative mb-6 hidden md:block">
                <img :src="require('@/assets/images/efficiency-'+activeTab+'.webp')" alt="worker clothes"
                     class="w-[100%] h-[100%] object-cover rounded-3xl mx-auto mb-12"/>

              </div>
              {{ $t('efficiency.tabs.'+tab + '.content') }}
            </div>

          </div>

        </div>
        <div class="col-span-4 order-1 md:order-2 mb-12 md:mb-0">

          <div class="grid grid-cols-1 gap-2 md:gap-8 ">
            <div v-for="tab in tabs" :key="'tab-'+tab" class="">
              <button class="block w-[100%] " :class="tab === activeTab ? 'casual-blue-button' : 'casual-white-button'" @click="activeTab = tab">
                {{ $t('efficiency.tabs.'+tab + '.title') }}

              </button>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default{

  data(){
    return{
      features: [1,2,3],
      tabs: [1,2,3,4],
      activeTab: 1
    }
  }
}
</script>