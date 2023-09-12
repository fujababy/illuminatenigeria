<template>
  <section>
    <navigation />

    <carousel-slide />
    <purpose />
    <climate />
    <testimonial />
    <newsletter />
    <footerComponent />
  </section>
</template>

<script>
import navigation from '../components/navigation.vue'
import climate from '../components/climate.vue'
import carouselSlide from '../components/carouselSlide.vue'
import purpose from '../components/purpose.vue'
import newsletter from '../components/newsletter.vue'
import testimonial from '../components/testimonial.vue'
import footerComponent from '../components/footerComponent.vue'
// import navBoo from '../components/navigation.vue'

export default {
  name: 'home',
  components: {
    navigation,
    purpose,
    carouselSlide,
    climate,
    newsletter,
    testimonial,
    footerComponent
    // navBoo
  }

  // data() {
  //   return {
  //     showMenu: true
  //   }
  // },

  // methods: {
  //   toggleShowMenu() {
  //     this.showMenu = !this.showMenu
  //   }
  // }
}
</script>
