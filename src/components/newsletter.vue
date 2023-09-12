<template>
  <div>
    <section>
      <div class="newsletter">
        <h2>Sign up to our newsletter and stay informed.</h2>
        <form class="form-group">
          <div>
            <input id="name" type="text" placeholder="First Name" />
          </div>
          <div>
            <input id="name" type="text" placeholder="Last Name" />
          </div>
          <div>
            <input id="email" type="email" placeholder="Email" />
          </div>
        </form>
        <button class="btn__news" type="reset">Submit</button>
      </div>
    </section>

    <!-- <section>
      <div class="aiti__bootcamp__registration__wrapper" id="register">
        <div class="bootcamp__registration">
          <div class="aiti--heading">
            <h1>
              Don't miss out on this amazing opportunity to learn from the best in the industry.
              Register today to get shortlisted!
            </h1>
          </div>
          <div class="bootcamp__registration--form">
            <vee-form :validation-schema="regSchema" @submit="register">
              <div class="container">
                <div class="input--container">
                  <label for="first_name" class="form-label">First Name</label>
                  <vee-field
                    type="text"
                    class="form-control"
                    id="first_name"
                    name="first_name"
                    placeholder="Your first name"
                  />
                  <error-message class="text-danger" name="first_name" />
                </div>
                <div class="input--container">
                  <label for="last_name" class="form-label">Last Name</label>
                  <vee-field
                    type="text"
                    class="form-control"
                    id="last_name"
                    name="last_name"
                    placeholder="Your last name"
                  />
                  <error-message class="text-danger" name="last_name" />
                </div>
                <div class="input--container">
                  <label for="email" class="form-label">Email address</label>
                  <vee-field
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                  />
                  <error-message class="text-danger" name="email" />
                </div>
                <div class="input--container">
                  <label for="phone" class="form-label">WhatsApp Number</label>
                  <vue-tel-input
                    v-model="phone"
                    ref="phone"
                    @input="checkPhone"
                    name="phone"
                    mode="international"
                  ></vue-tel-input>
                </div>
               
                <div class="d-grid gap-2">
                  <button class="btn aiti-btn text-center" type="submit" :disabled="!phone">
                    <span v-if="!loading"> Register Now</span>

                    <div v-else class="spinner-border text-light" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </button>
                </div>
              </div>
            </vee-form>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      regSchema: {
        first_name: 'required|min:3|max:100|alpha_spaces',
        last_name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.newsletter {
  padding-top: 5rem;
  text-align: center;
  // padding: 85px;
  background: #ffdd00;
  // width: 100%;
  padding-bottom: 5rem;

  @media screen and (max-width: 768px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  h2 {
    margin-bottom: 30px;
    font-size: 40px;
    font-weight: 300;

    @media screen and (max-width: 768px) {
      font-size: 22px;
      line-height: 1.3;
    }
  }
  .form-group {
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      row-gap: 2rem;
    }

    input {
      margin: 20px;
      // padding: 10px;
      border: none;
      // max-width: 221px;
      // height: 50px;
      padding: 20px;
      font-size: 16px;

      @media screen and (max-width: 768px) {
        margin-right: 0;
      }
    }

    textarea:focus,
    input:focus {
      outline: none;
    }
  }
  .btn__news {
    border: none;
    font-size: 16px;
    background: #3d3d3d;
    cursor: pointer;
    margin-top: 2rem;
    color: #fff;
    padding: 16px 37.5px;
    border-radius: 25px;
  }
}

@media screen and (max-width: 768px) {
}
</style>
