<template>
  <section class="block" data-aos="fade-up" data-aos-duration="3000">
    <figure>
      <img class="founder-img" src="../assets/images/unnamed.jpg" alt="" />
    </figure>
    <blockquote class="quote">
      <p class="quote__text animate__animated animate__bounce">
        Bringing solar energy to everyone is simple: <br />
        It starts with you. <br />
        Let's take the power of the future into our own hands.
      </p>
      <footer>
        <div class="media">
          <div class="media__body">
            <h3 class="media__title quote__author">Olaniran Fuja</h3>
            <p class="quote__organization">Founder</p>
          </div>
        </div>
        <div class="btn--center">
          <a href="https://api.whatsapp.com/send?phone=08132852593">
            <button class="btnn btn-primaryy btn--width">Meet Olaniran</button>
          </a>

          <a href="mailto:shilevelli@gmail.com">
            <button class="btnn btn-primaryy btn--width">Email Me</button>
          </a>
        </div>
      </footer>
    </blockquote>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init()
})
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 7px;
  box-shadow: 0 0 20px 10px #f3f3f3;
  width: 80%;
  justify-content: center;
  column-gap: 5rem;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;

  figure {
    .founder-img {
      width: 100%;
      height: 600px;
      object-fit: contain;
      border-radius: 7px;

      @media screen and (max-width: 768px) {
        height: 450px;
      }
    }
  }
  .quote {
    font-size: 2rem;
    font-style: italic;
    color: var(--color-body-darker);
    line-height: 1.3;

    .quote__text {
      margin-bottom: 2rem;
      margin-top: 1rem;
      font-weight: 300;

      @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-top: 0;
        text-align: center;
      }
    }
    .quote__text::before {
      content: open-quote;
    }
    .quote__text::after {
      content: close-quote;
    }

    .quote__organization {
      opacity: 0.4;
      font-style: normal;
      font-size: 2rem;
      // margin-bottom: 2rem;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }

    .media {
      .media__body {
        .quote__author {
          font-size: 3rem;
          font-weight: 300;
          font-style: normal;
          margin-bottom: 0;

          @media screen and (max-width: 768px) {
            font-size: 22px;
          }
        }

        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
    }
  }

  footer {
    .btn--center {
      :nth-of-type(1) {
        margin-right: 1rem;
      }
      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        :nth-of-type(1) {
          margin-right: 0;
        }
      }

      .btn--width {
        color: #000;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .block {
    flex-direction: column;
  }
}
</style>
