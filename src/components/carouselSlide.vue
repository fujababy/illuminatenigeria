<template>
  <carousel :autoplay="4000" :items-to-show="1" :wrap-around="true" :transition="1000">
    <slide v-for="slide in sliderContents" :key="slide.id">
      <!-- {{ slide }} -->

      <div class="carousel__item size">
        <transition name="fade" mode="out-in">
          <img class="image__size" :src="slide.img" alt="slider" />
        </transition>

        <div class="carousel__text">
          <h3>{{ slide.heading }}</h3>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation class="navi" />
      <!-- <pagination /> -->
    </template>
  </carousel>
</template>

<script>
import featured2 from '../assets/images/featured2.jpg'
import featured3 from '../assets/images/featured3.png'
import featured4 from '../assets/images/featured4.jpg'
import featured1 from '../assets/images/featured1.jpg'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  data() {
    return {
      featured1: 'featured1',
      featured2: 'featured2',
      featured3: 'featured3',
      featured4: 'featured4',

      sliderContents: [
        {
          id: 2,
          img: featured2,
          heading: 'SOLAR IS EDUCATION'
        },
        {
          id: 4,
          img: featured4,
          heading: 'SOLAR IS AGRICULTURE'
        },
        // {
        //   id: 3,
        //   img: featured3,
        //   heading: 'SOLAR IS CREATIVITY'
        // },
        {
          id: 1,
          img: featured1,
          heading: 'SOLAR IS LIFE'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  padding-top: 4rem;
  .carousel__item {
    //   min-height: 200px;
    width: 100%;
    // height: 100%;
    height: 750px;
    position: relative;
    font-size: 40px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-top: 8rem;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      height: 350px;
    }

    .carousel__text {
      position: absolute;
      font-weight: 200;

      // top: 0;
      // margin-left: auto;
      // margin-right: auto;
      // left: 0;
      // right: 0;
      // text-align: center;

      color: white;

      h3 {
        font-size: 5rem;

        @media screen and (max-width: 768px) {
          font-size: 16px;
          font-weight: 700;
        }
      }
    }

    // :root {
    //   --carousel-color-primary: red;
    // }
    .carousel__prev,
    .carousel__next {
      margin-top: 4rem;
      box-sizing: content-box;
      border: 5px solid white;
    }
  }

  // .size {
  //   width: 100%;
  //   // height: 650px;

  //   @media screen and (min-width: 768px) {
  //     height: 650px;
  //   }
  // }

  .image__size {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
