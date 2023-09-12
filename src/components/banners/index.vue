<template>
  <Carousel :autoplay="5000" :wrap-around="true">
    <Slide v-for="slide in sliderContents" :key="slide.heading">
      <!-- <div class="carousel__item fourth" v-show="slide.id === 'fourth'">
        <div class="aiti__hero">
          <div class="aiti__hero__content">
            <h1 class="aiti__hero__content--heading">
              Create the <span class="color-turquoise">future</span>
              <span class="color-jaffa"> you see</span>
            </h1>
            <p class="aiti__hero__content--sub">
              {{ slide.description }}
            </p>
            <div class="cta">
              <button class="aiti-btn btn" @click="gotoSignUp">Enroll Now</button>
            </div>
          </div>

          <figure class="hero-image-container">
            <img :src="slide.imgSrc" alt="hero image" />
          </figure>
        </div>
      </div> -->

      <!-- <div class="carousel__item second" v-show="slide.id === 'second'">
        <div class="effect"></div>
        <div class="aiti__hero">
          <div class="aiti__hero__content">
            <h1 class="aiti__hero__content--heading">
              {{ slide.heading }}
            </h1>
            <p class="aiti__hero__content--sub">
              {{ slide.description }}
            </p>
            <div class="cta">
              <button class="aiti-btn btn" @click="gotoSignUp">Enroll Now</button>
            </div>
          </div>
        </div>

        <div class="side__details__wrapper">
          <div class="side__details__content">
            <p>
              The training we provide will help you gain the necessary skills and prepare you
              strategically to succeed in landing your dream job. We’ll work with you and hand-hold
              you through getting a role that fits your goals and specifications.
            </p>
          </div>
        </div>
      </div> -->

      <!-- <div class="carousel__item third" v-show="slide.id === 'third'">
        <div class="effect"></div>
        <div class="aiti__hero">
          <div class="aiti__hero__content">
            <h1 class="aiti__hero__content--heading">
              {{ slide.heading }}
            </h1>
            <p class="aiti__hero__content--sub">
              {{ slide.description }}
            </p>
            <div class="cta">
              <button class="aiti-btn btn" @click="gotoSignUp">Enroll Now</button>
            </div>
          </div>

          <figure class="hero-image-container">
            <img :src="slide.imgSrc" alt="hero image" />
          </figure>
        </div>
      </div> -->

      <!-- <div class="carousel__item first" v-show="slide.id === 'first'">
        <div class="effect__two"></div>
        <div class="effect"></div>
        <div class="aiti__hero">
          <div class="aiti__hero__content">
            <h1 class="aiti__hero__content--heading">
              {{ slide.heading }}
            </h1>
            <p class="aiti__hero__content--sub">
              {{ slide.description }}
            </p>
            <div class="cta">
              <button class="aiti-btn btn" @click="gotoSignUp">Enroll Now</button>
            </div>
          </div>

          <div class="logo__carousel__wrapper">
            <AitiLogoCarousel></AitiLogoCarousel>
          </div>
          <figure class="hero-image-container">
            <img :src="slide.imgSrc" alt="hero image" />
          </figure>
        </div>
      </div> -->
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'AitiCarousel',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      sliderContents: [
        {
          id: 'first',
          heading:
            "We've trained over a thousand engineers who now work for companies like Apple, Tesla, and Uber.",
          description: '',
          imgSrc: ''
        },
        {
          id: 'second',
          heading: 'Earn $50,000 yearly!',
          description: 'Get hired by major global technology companies. ',
          imgSrc: ''
        },
        {
          id: 'third',
          heading: 'Get trained by world class tutors with industry experience',
          description:
            'Our tutors are carefully selected industry specialist with extensive academia experience.',
          imgSrc: ''
        },
        {
          id: 'fourth',
          heading: 'Create the future you see',
          description: 'Upskill and get positioned for impact in the world of Tech',
          imgSrc:
            'https://149484825.v2.pressablecdn.com/wp-content/uploads/2022/06/7S3A3939-1-scaled.jpg'
        }
      ]
    }
  }
  // methods: {
  //   gotoSignUp() {
  //     this.$router.push({ name: 'signUp' })
  //     this.$gtag.event('Enroll Banner', {
  //       event_category: 'Enroll Banner',
  //       event_label: 'Enroll Banner'
  //     })
  //   },
  //   gotoBootcamp() {
  //     this.$router.push({ name: 'Bootcamp' })
  //     this.$gtag.event('Bootcamp Campaign Banner', {
  //       event_category: 'Join Bootcamp Campaign Banner',
  //       event_label: 'Join Bootcamp Campaign Banner'
  //     })
  //   }
  // }
}
</script>
