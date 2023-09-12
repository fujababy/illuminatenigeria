<template>
  <div>
    <navigation />
    <climate />
    <footerComponent />
  </div>
</template>

<script>
import navigation from '../components/navigation.vue'
import climate from '../components/climate.vue'

import footerComponent from '../components/footerComponent.vue'

export default {
  name: 'home',
  components: {
    navigation,

    climate,

    footerComponent
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
