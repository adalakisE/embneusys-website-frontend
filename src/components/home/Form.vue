<template>
  <div class="flex flex-col p-4 items-start mt-[30%]">
    <p
      class="p-white mb-7 max-w-[60%] leading-10 text-left font-bold text-[3em]"
    >
      {{ $t("faq.form.title") }}
    </p>
    <ValidationObserver v-slot="{ invalid }" slim>
      <form @submit.prevent="submitForm" class="max-w-md rounded-md shadow-lg">
        <ValidationProvider
          name="Company name"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <div class="form-row">
            <label for="companyName" class="form-label">{{
              $t("faq.form.company")
            }}</label>
            <input
              v-model="form.companyName"
              type="text"
              id="companyName"
              class="form-input"
            />
            <!-- onkeypress="this.style.width = ((this.value.length + 1) * 10) + 'px';" -->
            <span v-if="errors[0]" class="form-error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="Email"
          rules="required|email"
          v-slot="{ errors }"
          slim
        >
          <div class="form-row">
            <label for="email" class="form-label">{{
              $t("faq.form.email")
            }}</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="form-input"
            />
            <span v-if="errors[0]" class="form-error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="location"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <div class="form-row">
            <label for="location" class="form-label">{{
              $t("faq.form.location")
            }}</label>
            <input
              v-model="form.location"
              type="text"
              id="location"
              class="form-input"
            />
            <span v-if="errors[0]" class="form-error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="mineSize"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <div class="form-row">
            <label for="mineSize" class="form-label">{{
              $t("faq.form.mineSize")
            }}</label>
            <input
              v-model="form.mineSize"
              type="text"
              id="mineSize"
              class="form-input"
            />
            <span v-if="errors[0]" class="form-error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="pitOrUnderground"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <div class="form-row">
            <label for="pitOrUnderground" class="form-label"
              >{{ $t("faq.form.pitOrUnderground") }}
            </label>
            <input
              v-model="form.pitOrUnderground"
              type="text"
              id="openpitOrUnderground"
              class="form-input"
            />
            <span v-if="errors[0]" class="form-error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="level"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <div class="form-row">
            <label for="level" class="form-label">{{
              $t("faq.form.multipleOrSingleLevel")
            }}</label>
            <input
              v-model="form.level"
              type="text"
              id="level"
              class="form-input"
            />
            <span v-if="errors[0]" class="form-error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="machineries"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <div class="form-row">
            <label for="machineries" class="form-label">{{
              $t("faq.form.numberOfMachineries")
            }}</label>
            <input
              v-model="form.machineries"
              type="text"
              id="machineries"
              class="form-input"
            />
            <span v-if="errors[0]" class="form-error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <button
          type="submit"
          :disabled="invalid"
          :class="{
            'casual-blue-button border-0 ease-in-out hover:border-0 hover:px-12 duration-500 border-b-[1px] border-transparent mt-4 mb-12':
              !invalid,
            'casual-grey-button border-0 border-b-[1px] border-grey-500 mt-4 mb-12':
              invalid,
          }"
        >
          {{ $t("faq.form.button") }}
        </button>
      </form>
    </ValidationObserver>
    <p class="text-l p-white font-bold mb-5 text-[1em]">
      {{ $t("faq.form.quotation") }}
    </p>
    <p class="text-xl p-white font-bold text-[2em]">
      {{ $t("faq.form.esg") }}
    </p>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required, email, numeric } from "vee-validate/dist/rules";

extend("required", required);
extend("email", email);
extend("numeric", numeric);

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      faqs: [1, 2, 3],
      activeFaqs: {},

      form: {
        companyName: "",
        email: "",
        location: "",
        mineSize: "",
        pitOrUnderground: "",
        level: "",
        machineries: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("submitted successfully");
      console.log(this.form);
    },
  },
};
</script>

<style></style>
