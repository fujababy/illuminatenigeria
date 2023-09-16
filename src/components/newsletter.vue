<template>
  <div>
    <section>
      <div class="newsletter">
        <h2>Sign up to our newsletter and stay informed.</h2>
        <form action="https://formspree.io/f/mzblvrdd" method="POST" class="form-group">
          <input id="name" type="text" placeholder="First Name" name="name" />
          <input id="name" type="text" placeholder="Last Name" name="name" />
          <input id="email" type="text" placeholder="Email" name="email" />
          <button class="btn__news" type="submit">Submit</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.newsletter {
  padding-top: 7rem;
  text-align: center;
  // padding: 85px;
  background: #ffdd00;
  width: 100%;
  padding-bottom: 7rem;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    // padding-right: 2rem;
    // padding-left: 2rem;
  }

  h2 {
    margin-bottom: 30px;
    font-size: 40px;
    font-weight: 300;

    @media screen and (max-width: 768px) {
      font-size: 22px;
      line-height: 1.3;
      padding: 0 2rem;
    }
  }
  .form-group {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      row-gap: 2rem;
    }

    input {
      // margin: 20px;

      border: none;
      // border-radius: 8px;
      padding: 15px 0 15px 10px;
      font-size: 16px;

      @media screen and (max-width: 820px) {
        // margin-right: 0;
      }

      @media screen and (max-width: 768px) {
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // margin: 0;
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
    // margin-top: 2rem;
    color: #fff;
    padding: 15px 40px;

    @media screen and (max-width: 768px) {
      border-radius: 12px;
    }
  }

  .btn__news:hover {
    background: #454242;
  }
}
</style>
