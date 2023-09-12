<template>
  <section>
    <!-- <nav class="nav">
      <a href="/"
        ><img class="nav__logo" src="../assets/images/icons8-sunrays-48 (1).png" alt="" />
      </a>

      <img @click="toggleShowMenu" class="nav__toggler" src="../assets/svg/menu-icon.png" alt="" />

      <ul v-if="showMenu" class="list nav__list collapsible__content">
        <li class="nav__item"><a href="/">Home</a></li>

        <router-link :to="{ name: 'aboutUs' }">
          <li class="nav__item"><a href="/aboutUs">About Us</a></li>
        </router-link>

        <router-link :to="{ name: 'purpose' }">
          <li class="nav__item"><a href="#">Purpose</a></li>
        </router-link>

        <router-link :to="{ name: 'donate' }">
          <li @click="$scrollToTop" class="nav__item"><a href="#">Donate</a></li>
        </router-link>
      </ul>
    </nav> -->
  </section>
</template>

<script>
// export default {
//   name: '',
//   components: {},

//   data() {
//     return {
//       showMenu: true
//     }
//   },

//   methods: {
//     toggleShowMenu() {
//       this.showMenu = !this.showMenu
//     }
//   }
// }
</script>

<style lang="scss" scoped>
// .nav {
//   background: #000;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   padding-top: 2rem;
//   // padding-left: 5rem;
//   // padding-right: 5rem;
//   padding-bottom: 2rem;
//   width: 100%;
//   font-size: 18px;
//   text-transform: uppercase;
//   position: fixed;
//   top: 0;
//   z-index: 1;
//   @media screen and (max-width: 768px) {
//     font-size: 14px;
//   }

//   .nav__logo {
//     margin-left: 5rem;

//     @media screen and (max-width: 768px) {
//       margin-left: 1rem;
//     }
//   }

//   .nav__toggler {
//     opacity: 1;
//     cursor: pointer;
//     box-shadow: 0 0 0 3px #666;
//     border-radius: 5px;
//     margin-right: 1rem;
//     width: 2.5rem;
//   }
//   .nav__toggler:hover {
//     color: #fff;
//   }

//   .nav__list {
//     width: 100%;
//     padding-right: 5rem;

//     .nav__item {
//       padding: 1.5rem 0 1rem 2rem;
//       border-bottom: 1px solid #222;
//     }
//     .nav__item > a {
//       color: #d2d0db;
//       transition: color 0.3;
//     }

//     // a.router-link-exact-active {
//     //           svg,
//     //           path {
//     //             fill: #facd66;
//     //             fill-opacity: 1;
//     //           }
//     //         }

//     .nav__item > a:hover {
//       color: #fff;
//     }

//     .collapsible__content {
//       max-height: 0;
//       overflow: hidden;
//       opacity: 0s;
//       transition: all 0.3s;
//     }
//   }

//   @media screen and (min-width: 768px) {
//     .nav__toggler {
//       display: none;
//     }

//     .nav__list {
//       width: auto;
//       display: flex;
//       font-size: 1.6rem;
//       max-height: 100%;
//       opacity: 1;

//       .nav__item {
//         border: 0;
//       }
//     }
//   }
// }
</style>
