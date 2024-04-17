<template>
  <div class="bg-grey_bg">
    <div class="container pb-28">
      <div class="flex flex-col items-start">
        <div class="mb-10">
          <div class="pr-[50px]">
            <h2
              class="text-white bg-secondary text-start pl-3 py-4 border-0 border-l-0 rounded-tr-[40px] rounded-br-[40px]"
            >
              {{ $t("team.title") }}
            </h2>
          </div>
          <div class="pr-[100px]">
            <h2
              class="text-blue bg-white border-white py-4 pr-8 pl-3 border-[3px] border-l-0 rounded-tr-[40px] rounded-br-[40px]"
            >
              {{ $t("team.subtitle") }}
            </h2>
          </div>
        </div>

        <div class="flex flex-row items-start gap-x-4 max-lg:flex-wrap">
          <div
            v-for="person in persons"
            :key="'person' + person"
            class="flex flex-col grow-1 shrink-1 basis-full justify-start items-start pb-4 bg-white mb-6 md:col-span-9 rounded-xl py-8 px-6"
          >
            <div class="flex flex-col items-start mb-4">
              <img
                :src="getPhoto(person)"
                alt="logo text"
                class="inline ml-1"
                width="140"
                max-height="140"
              />
              <div
                class="text-white bg-blue border px-2 py-2 rounded-tr-[40px] rounded-br-[40px] mt-2"
              >
                <p class="text-white pr-4 text-pretty">
                  {{ $t("team." + person + ".name") }}
                </p>
              </div>
            </div>
            <div class="flex flex-col items-start justify-start mb-4">
              <div class="text-blue mb-4">
                <a :href="$t('team.' + person + '.linkedin')" target="_blank">
                  <img
                    :src="require('@/assets/images/linkedin.png')"
                    alt="logo text"
                    class="inline ml-1"
                    width="35"
                  />
                </a>
                <!-- {{ $t("team." + person + ".linkedin") }} -->
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
