<template>
  <section>
    <navigation />
    <section class="block">
      <h3>Donate</h3>
      <p>
        Your donation helps us to achieve illuminate Nigeria's goals. Your support powers our work
        with excluded people and communities across 36 States in Nigeria
      </p>
      <h3>How to Donate</h3>
      <p>
        We provide several options for you to contribute: You can donate through bank transfer.
        Below is the account to make payment to.
      </p>
      <h3>Donate to ILLUMINATE NIGERIA</h3>
      <p>Guaranty Trust Bank (GTB)</p>
      <p>Account Name: Illuminate Nigeria</p>
      <p>Account Type: Savings Account</p>
      <p>Account No: xxxxxxxx</p>

      <p>or</p>

      <p>BTC</p>
      <p>gh687hcd4r57dce800YHer9utr4G2Jgb46f</p>
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
}
</script>

<style lang="scss" scoped>
.block {
  padding-bottom: 3rem;
  padding-top: 6rem;

  h3 {
    font-size: 40px;
    text-align: center;
    margin-top: 3rem;

    @media screen and (max-width: 768px) {
      padding: 0 2rem;
      font-size: 30px;
      margin-bottom: 1rem;
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
      margin-bottom: 0;
    }
  }
}
</style>
