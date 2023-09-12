<template>
  <section class="climate">
    <h2>let's shine a light on climate</h2>
    <h3>
      ACTI
      <span class="nowrap">
        <figure>
          <img class="img-sun" src="../assets/images/icons8-sunrays-48 (1).png" alt="" />
        </figure>
      </span>
      N
    </h3>
    <p>Together, we can create a thriving country powered by sun.</p>
    <div class="btn__container">
      <router-link :to="{ name: 'donate' }">
        <button class="btnn btnn-primary btn-margin btn--width">Donate</button>
      </router-link>
      <button class="btnn btnn-primary btn--width">Get Involved</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.climate {
  max-height: 800px;
  // max-width: 100%;
  color: #fff;
  padding: 30px;
  text-align: center;
  background: #000;
  padding: 5rem;
  line-height: 1.4;

  h2 {
    font-size: 50px;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      font-size: 30px;
      margin-bottom: 2rem;
    }
  }
  h3 {
    font-size: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }

    .nowrap {
      figure {
        .img-sun {
          margin-top: 5rem;
          width: 140px;

          @media screen and (max-width: 768px) {
            width: 49px;
            margin-top: 2rem;
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      font-size: 60px;
    }
  }

  p {
    margin: 30px 0px;
    font-size: 26px;
    font-weight: 300;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }

  .btn__container {
    .btn {
      // padding: 18px 37.5px;
      // font-size: 16px;
      // border-radius: 40px;
    }
    .btn-margin {
      margin-right: 2rem;

      @media screen and (max-width: 768px) {
        margin-right: 0;
      }
    }
    .btnn-primary {
      background: #ffdd00;
    }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
.nowrap {
  white-space: nowrap;
}
</style>
