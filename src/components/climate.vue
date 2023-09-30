<template>
  <section class="climate">
    <h2>let's shine a light on climate</h2>
    <h3>
      ACTI
      <span class="nowrap">
        <figure>
          <img
            class="img-sun animate__animated animate__bounce"
            src="../assets/images/sun.svg"
            alt=""
          />
        </figure>
      </span>
      N
    </h3>
    <p>Together, we can create a thriving country powered by sun.</p>
    <div class="btn__container">
      <!-- <router-link :to="{ name: 'donate' }">
        <button class="btnn btnn-primary btn-margin btn--width">Donate</button>
      </router-link> -->
      <!-- <button class="btnn btnn-primary btn--width">Get Involved</button> -->

      <!-- Button trigger modal -->
      <button
        type="button"
        class="btnn btnn-primary btn-margin btn--width"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Donate
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-dark" id="staticBackdropLabel">DONATE</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="text-dark">
                <p>
                  We provide a option for you to contribute: You can donate through bank transfer.
                  Below is the bank account to make payment to. To make donations through crypto,
                  please click on 'DONATE' on the navigation link.
                </p>

                <p>Guaranty Trust Bank (GTB)</p>
                <p>Account Name: Illuminate Nigeria</p>
                <p>Account Type: Savings Account</p>
                <p>Account No: xxxxxxxx</p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-black text-bg-dark" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btnn-primary" data-bs-dismiss="modal">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-dark" id="staticBackdropLabel">GET INVOLVED</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p class="text-dark">
                Illuminate Nigeria partners with foundations, and others on communications
                campaigns, impact programs, product design, marketing, and project implementation.
                Contact us to learn more about getting involved with Illuminate Nigeria.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-black text-bg-dark" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btnn-primary" data-bs-dismiss="modal">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Button trigger modal -->
      <button
        type="button"
        class="btnn btnn-primary btn--width"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Get Involved
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">GET INVOLVED</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p class="text-dark">
                Illuminate Nigeria partners with foundations, and others on communications
                campaigns, impact programs, product design, marketing, and project implementation.
                Contact us to learn more about getting involved with Illuminate Nigeria.
              </p>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-black text-bg-dark" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btnn-primary">I understood</button>
            </div>
          </div>
        </div>
      </div>
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
      .animate__bounce {
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
      }
      figure {
        .img-sun {
          margin-top: -1rem;
          width: 130px;

          @media screen and (max-width: 768px) {
            width: 45px;
            margin-top: 0.2rem;
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
    @media screen and (max-width: 768px) {
      // padding: 0 10rem;
    }
    .btn {
    }
    .btn-margin {
      margin-right: 2rem;

      @media screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
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
      // width: 100%;
    }

    .btn--width {
      color: #000;
      letter-spacing: 1px;
      @media screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
      }

      .btn--width:hover {
        background: #f1db4d;
      }
    }
    .btn--width:hover {
      background: #f1db4d;
    }
  }
}
.nowrap {
  white-space: nowrap;
}
</style>
