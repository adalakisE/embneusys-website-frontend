<template>

  <footer id="footer">
    <div class="bg-grey_bg py-24">

      <div class="container">
        <div class="grid md:grid-cols-3">
          <div>
            <img src="../assets/logo.png" alt="logo"  class="max-w-[250px]"/>

            <p class="text-title mt-4 md:pl-12">
              {{$t('copyright')}}
            </p>

          </div>

          <div>
          </div>
          <div>
            <h3 class="text-2xl text-title mb-4">{{$t('contact')}}</h3>
            <a :href="`mailto:${email}`" target="_blank">{{ email }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>

export default{

}
</script>