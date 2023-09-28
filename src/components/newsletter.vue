<template>
  <div>
    <section>
      <div class="newsletter">
        <h2>Sign up to our newsletter and stay informed.</h2>
        <Form
          @submit="onSubmit"
          action="https://formspree.io/f/mzblvrdd"
          method="POST"
          class="form-group"
          autocomplete="on"
        >
          <Field name="firstName" placeholder="First Name" :rules="validatefirstName" />
          <ErrorMessage class="error" name="firstName" />

          <Field placeholder="Last Name" name="name" :rules="validateName" />
          <ErrorMessage class="error" name="name" />

          <Field placeholder="Email" name="email" :rules="validateEmail" />
          <ErrorMessage class="error" name="email" />

          <button class="btn__news" type="submit">SUBMIT</button>
        </Form>
      </div>
    </section>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    onSubmit(values) {
      console.log(JSON.stringify(values, null, 2))
    },
    validatefirstName(value) {
      // if the field is empty
      if (!value) {
        return 'First Name is Required!'
      }

      // if the field is not a valid email
      // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      // if (!regex.test(value)) {
      //   return 'Your name can only be Aphanumeric!'
      // }
      // All is good
      return true
    },
    validateName(value) {
      // if the field is empty
      if (!value) {
        return 'Last Name is Required!'
      }

      // if the field is not a valid email
      // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      // if (!regex.test(value)) {
      //   return 'Your name can only be Aphanumeric!'
      // }
      // All is good
      return true
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'Email is Required!'
      }

      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if (!regex.test(value)) {
        return 'This field must be a valid Email!'
      }
      // All is good
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.newsletter {
  background: #ffdd00;
  width: 100%;
  overflow-x: hidden;
  padding: 7rem 4rem;

  @media screen and (max-width: 768px) {
  }

  h2 {
    margin-bottom: 30px;
    font-size: 40px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 22px;
      line-height: 1.3;
    }
  }
  .form-group {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;

    flex-direction: column;
    row-gap: 2rem;

    @media screen and (max-width: 820px) {
      flex-direction: column;
      row-gap: 2rem;
    }

    input {
      border: none;
      border-radius: 8px;
      padding: 15px 0 15px 10px;
      font-size: 16px;
      width: 50%;

      @media screen and (max-width: 820px) {
        width: 100%;
      }

      @media screen and (max-width: 768px) {
      }
    }

    textarea:focus,
    input:focus {
      outline: none;
    }

    .error {
      color: red;
      font-size: 14px;
      margin-top: -20px;
      width: 50%;
      @media screen and (max-width: 820px) {
        width: 100%;
      }
    }
  }
  .btn__news {
    border: none;
    font-size: 16px;
    background: #3d3d3d;
    cursor: pointer;
    border-radius: 8px;
    color: #fff;
    padding: 15px 40px;
    letter-spacing: 12px;
    width: 50%;

    @media screen and (max-width: 768px) {
      border-radius: 12px;
      width: 100%;
    }

    @media screen and (max-width: 820px) {
      width: 100%;
    }
  }

  .btn__news:hover {
    background: #514f4f;
  }
}
</style>
