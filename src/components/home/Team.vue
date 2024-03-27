<template>
  <div class="bg-grey_bg">
    <div class="container pb-28">
      <div class="flex flex-col items-start">
        <div class="mb-10">
          <div class="pr-[50px]">
            <h2
              class="text-white bg-secondary text-center pl-0 py-4 border-0 border-l-0 rounded-tr-[40px] rounded-br-[40px]"
            >
              {{ $t("team.title") }}
            </h2>
          </div>
          <div class="pr-[100px]">
            <h2
              class="text-blue border-secondary py-4 pr-8 pl-[45px] border-[3px] border-l-0 rounded-tr-[40px] rounded-br-[40px]"
            >
              {{ $t("team.subtitle") }}
            </h2>
          </div>
        </div>

        <div class="flex flex-row items-start max-lg:flex-wrap">
          <div
            v-for="person in persons"
            :key="'person' + person"
            class="flex flex-col justify-start items-center pb-4 mx-4 max-w-[350px] bg-white mb-8 md:col-span-9 rounded-xl py-8 px-12"
          >
            <div class="flex flex-col items-start mb-4">
              <img
                :src="getPhoto(person)"
                alt="logo text"
                class="inline ml-1"
                width="140"
              />
              <div
                class="text-white bg-blue border px-2 py-2 rounded-tr-[40px] rounded-br-[40px] mt-2"
              >
                <p class="text-white whitespace-nowrap pr-4">
                  {{ $t("team." + person + ".name") }}
                </p>
              </div>
            </div>
            <div class="flex flex-col items-center justify-start mb-4">
              <div class="text-blue mb-1">
                {{ $t("team." + person + ".linkedin") }}
              </div>
              <div>
                {{ $t("team." + person + ".text") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [1, 2, 3],
    };
  },
  methods: {
    getPhoto(person) {
      return require("@/assets/images/team/team-" + person + ".jpeg");
    },
  },
};
</script>
