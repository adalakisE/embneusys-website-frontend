<template>

  <footer id="footer">
    <div class="bg-grey_bg py-24">

      <div class="container">
        <div class="grid md:grid-cols-12">
          <div class="py-4 px-4 md:col-span-4">
            <img src="../assets/logo.png" alt="logo"  class="max-w-[250px]"/>

            <p class="text-title mt-4 md:pl-12">
              {{$t('copyright')}}
            </p>

          </div>

          <div class="py-4 px-4 md:col-span-3">

            <a v-for="item in menu" :key="item.hash" :href="item.hash" class="flex mb-6 hover:border-transparent text-normal">{{item.name}}</a>

          </div>
          <div class="py-4 px-4 md:col-span-4">
            <h3 class=" text-title mb-4">{{$t('contact')}}</h3>
            <a :href="`mailto:${email}`" target="_blank">{{ email }}</a>
            <img src="@/assets/images/espa.webp" alt="espa logo"  class="block w-[300px] mt-4 "/>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>

export default{

  data(){
    return{
      menu:[
        {
          name: this.$t('menu.solution'),
          hash: '#features'
        },
        {
          name: this.$t('menu.about'),
          hash: '#solutions'
        },
        {
          name: this.$t('menu.faq'),
          hash: '#faq'
        },

      ]
    }
  }
}
</script>