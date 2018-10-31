<template>
  <div class="contact p-3">
    <h1 data-cy="page-title">
      Contact
    </h1>

    <b-container>
      <b-row>
        <b-col sm="6" offset-sm="3">

          <b-form
            @submit.prevent="submitForm"
            novalidate
          >
            <b-form-group
              v-for="field in form.fields"
              :key="field.id"
              :label="field.label"
              label-for="field.id"
              :data-cy="`form-group-${field.id}`"
            >
              <component
                :is="field.component"
                :name="field.id"
                v-bind="field"
                v-model="form.model[field.model]"
                v-validate="field.rules"
                :data-cy="`form-input-${field.id}`">
              </component>

              <span
                v-if="form.isSubmitted"
                class="text-danger"
                :data-cy="`form-input-msg-${field.id}`"
              >
                {{ errors.first(field.id) }}
              </span>
            </b-form-group>

            <div
              v-if="form.isValid && form.isSubmitted"
              class="text-success mb-3"
              data-cy="form-msg-success"
            >
              The form has been submitted
            </div>

            <b-button
              type="submit"
              variant="primary"
              data-cy="form-submit-btn"
            >
              Submit
            </b-button>
          </b-form>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        isSubmitted: false,
        isValid: false,
        model: {
          firstname: null,
          lastname: null,
          email: null
        },
        fields: [
          {
            component: 'b-form-input',
            id: 'firstname',
            type: 'text',
            label: 'First Name',
            model: 'firstname',
            rules: 'required'
          },
          {
            component: 'b-form-input',
            id: 'lastname',
            type: 'text',
            label: 'Last Name',
            model: 'lastname',
            rules: 'required'
          },
          {
            component: 'b-form-input',
            id: 'email',
            type: 'email',
            label: 'Email',
            model: 'email',
            rules: 'required|email'
          }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$validator
        .validate().then(isValid => {
          this.form.isSubmitted = true
          this.form.isValid = isValid

          // if (isValid) {

          // }
        })
    }
  }
}
</script>
