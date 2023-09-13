<template>
  <div>
    <navigation />
    <section>
      <h1>TERMS & CONDITIONS</h1>
      <h3>Conditions of use</h3>
      <p>
        By using this website, you certify that you have read and reviewed this Agreement and that
        you agree to comply with its terms. If you do not want to be bound by the terms of this
        Agreement, you are advised to stop using the website accordingly. Illuminate Nigeria only
        grants use and access of this website, its products, and its services to those who have
        accepted its terms.
      </p>

      <h3>Privacy policy</h3>
      <p>
        Before you continue using our website, we advise you to read our privacy policy [link to
        privacy policy] regarding our user data collection. It will help you better understand our
        practices.
      </p>
      <h3>Age restriction</h3>
      <p>
        You must be at least 10 (ten) years of age before you can use this website. By using this
        website, you warrant that you are at least 18 years of age and you may legally adhere to
        this Agreement. Illuminate Nigeria assumes no responsibility for liabilities related to age
        misrepresentation.
      </p>
      <h3>Intellectual property</h3>
      <p>
        You agree that all materials, products, and services provided on this website are the
        property of illuminate Nigeria, its affiliates, directors, officers, employees, agents,
        suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and
        other intellectual property. You also agree that you will not reproduce or redistribute the
        Illuminate Nigeria’s intellectual property in any way, including electronic, digital, or new
        trademark registrations. You grant Illuminate Nigeria a royalty-free and non-exclusive
        license to display, use, copy, transmit, and broadcast the content you upload and publish.
        For issues regarding intellectual property claims, you should contact the company in order
        to come to an agreement.
      </p>
      <h3>User accounts</h3>

      <p>
        As a user of this website, you may be asked to register with us and provide private
        information. You are responsible for ensuring the accuracy of this information, and you are
        responsible for maintaining the safety and security of your identifying information.
      </p>
    </section>
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

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-top: 4rem;
  font-size: 40px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 2rem;
  }
}
h3 {
  font-size: 30px;
  // text-align: center;
  margin: 1rem 5rem;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
    font-size: 25px;
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
    line-height: 27px;
    padding: 0rem 2rem;
    margin-bottom: 4rem;
    text-align: center;
  }
}
</style>
