<template>
  <div class="flex flex-col p-4 items-start form-container">
    <p
      class="p-white mb-7 max-w-[60%] text-left font-bold text-[3em] form-title"
    >
      {{ $t("faq.form.title") }}
    </p>
    <ValidationObserver v-slot="{ invalid }" slim ref="formValidator">
      <form @submit.prevent="submitForm" class="max-w-md rounded-md">
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

        <!-- <ValidationProvider
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
        </ValidationProvider> -->

        <button
          type="submit"
          :disabled="invalid || isSubmitting"
          :class="{
            'casual-blue-button border-0 ease-in-out hover:border-0 hover:px-12 duration-500  border-transparent submit-btn':
              !invalid,
            'casual-grey-button border-0 submit-btn': invalid || isSubmitting,
          }"
        >
          {{ $t("faq.form.button") }}
        </button>

        <div v-if="showModal" class="modal-overlay">
          <div class="modal">
            <p v-if="isSubmitting">{{ $t("faq.form.submitting") }}</p>
            <p v-if="showSuccess">
              {{ $t("faq.form.successfulSubmit") }}
            </p>
            <p v-if="showError">{{ $t("faq.form.errorSubmit") }}</p>
          </div>
        </div>
      </form>
    </ValidationObserver>
    <p class="text-l p-white font-bold mb-5 text-[1em] form-text">
      {{ $t("faq.form.quotation") }}
    </p>
    <p class="text-xl p-white pb-3 font-bold text-[2em] form-text">
      {{ $t("faq.form.esg") }}
    </p>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required, email, numeric } from "vee-validate/dist/rules";
import axios from "axios";

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
      showSuccess: false,
      showError: false,
      isSubmitting: false,
      showModal: false,
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.showModal = true;

      try {
        const response = await axios.post(
          "https://embneusys-website-backend.onrender.com/feed/form",
          this.form
        );

        this.showSuccess = true;

        setTimeout(() => {
          this.showSuccess = false;
          this.showModal = false;
        }, 4000);
        console.log("Form submitted successfully:", response.data);
        this.resetForm();
      } catch (error) {
        this.showError = true;

        setTimeout(() => {
          this.showError = false;
          this.showModal = false;
        }, 4000);
        console.error("Error submitting form:", error);
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.form = {
        companyName: "",
        email: "",
        location: "",
        mineSize: "",
        pitOrUnderground: "",
        level: "",
        machineries: "",
      };
      this.$nextTick(() => {
        this.$refs.formValidator.reset(); // Reset the ValidationObserver
      });
    },
  },
};
</script>

<style></style>
