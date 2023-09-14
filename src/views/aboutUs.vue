<template>
  <div>
    <section>
      <navigation />

      <h3>ABOUT US</h3>

      <p>
        Illuminate Nigeria is a non-profit, non-political origination act as the anchor for
        supporting the implementation of the 2030 agenda for Sustainable energy for all. I.N will
        implement a “Holistic, Coherent, Multi-Sectoral, and Multi-Stakeholder Approach” to “all
        Decisions and Actions” in the process of implementing and achieving our goals. We will make
        an understanding of the close links between natural capital goods and services, societal
        progress, and sustained growth at the community, national and global levels. It also
        outlines challenges and progress achieved on the Goals. And also we will implement all the
        goals. Unsustainable patterns of production and consumption threaten lives and livelihoods
        for current and future generations. Our organization assist the industry to build
        sustainable and delivering quality, affordable off-grid electricity products, and services
        to as many customers as possible across the country for free. I.N's primary focus is to
        eradicate extreme poverty and hunger, access to clean energy, good governance and citizen’s
        right. SSDGI is helping communities identify and initiate development measures; providing
        training and other capacity-building support to pro-poor organizations and individuals; and
        carrying out research and advocacy in favour of the under privileged people especially those
        in the rural ares, both old and young
      </p>
      <climate />
      <footerComponent />
    </section>
  </div>
</template>

<script>
import navigation from '../components/navigation.vue'
import climate from '../components/climate.vue'
import footerComponent from '../components/footerComponent.vue'

export default {
  name: 'aboutUs',
  components: {
    navigation,
    climate,
    footerComponent
  }
}
</script>

<style lang="scss" scoped>
h3 {
  font-size: 40px;
  text-align: center;
  margin-top: 5rem;
}

p {
  font-size: 22px;
  line-height: 37.4px;
  // max-width: 984px;
  margin: auto;
  font-weight: 300;
  margin-top: 20px;
  padding: 5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 27px;
    padding: 2rem;
  }
}
</style>
