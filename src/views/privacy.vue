<template>
  <section>
    <navigation />

    <section class="privacy__block">
      <h1>PRIVACY POLICY</h1>

      <h3>What User Data We Collect</h3>
      <p>When you visit the website, we may collect the following data:</p>
      <ul>
        <li>Your IP address</li>
        <li>Other information such as interests and preferences.</li>
        <li>Data profile regarding your online behavior on our website.</li>
      </ul>

      <h3>Why We Collect Your Data</h3>
      <p>We are collecting your data for several reasons:</p>
      <ul>
        <li>To better understand your needs.</li>
        <li>To improve our services and products</li>
        <li>
          To contact you to fill out surveys and participate in other types of funding research.
        </li>
        <li>
          To customize our website according to your online behavior and personal preferences.
        </li>
      </ul>
      <h3>Safeguarding and Securing the Data</h3>
      <p>
        Illuminate Nigeria is committed to securing your data and keeping it confidential. [company
        name] has done all in its power to prevent data theft, unauthorized access, and disclosure
        by implementing the latest technologies and software, which help us safeguard all the
        information we collect online.
      </p>
      <h3>Our Cookie Policy</h3>
      <p>
        Once you agree to allow our website to use cookies, you also agree to use the data it
        collects regarding your online behavior (analyze web traffic, web pages you visit and spend
        the most time on). The data we collect by using cookies is used to customize our website to
        your needs.
      </p>
    </section>

    <climate />

    <footerComponent />
  </section>
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

<style lang="scss" scoped>
.privacy__block {
  padding-bottom: 5rem;
  h1 {
    text-align: center;
    margin-top: 4rem;
    font-size: 40px;

    @media screen and (max-width: 768px) {
      font-size: 25px;
      margin-bottom: 2rem;
    }
  }
  h3 {
    font-size: 30px;
    // text-align: center;
    margin: 2rem 5rem;
    text-transform: capitalize;

    @media screen and (max-width: 768px) {
      padding: 0 2rem;
      font-size: 15px;
      margin-bottom: 1rem;
      text-align: center;
    }
  }

  p {
    font-size: 22px;
    line-height: 27.4px;

    font-weight: 300;
    // margin-top: 20px;
    padding: 1rem 5rem;
    // margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 16px;

      padding: 0rem 2rem;
      margin-bottom: 2rem;
    }
  }
  ul li {
    font-size: 22px;
    font-weight: 300;
    margin: 0rem 3rem;
    list-style: disc;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
}
</style>
