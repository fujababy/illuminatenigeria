<template>
  <div>
    <navigation />
    <section class="block">
      <h2>OUR PURPOSE</h2>
      <h3>
        Ensure Access to Affordable, Reliable, Sustainable and Renewable Modern Energy for All
      </h3>
      <p>
        There is no development without fuelling the engine of growth. Energy is critical and people
        with no sustainable access to energy are deprived of the opportunity to become part of
        national and global progress. And yet, 86 million people around the country live without
        access to energy. 39% of the country's population, do not have access to electricity.
        Nigeria is supposed to be a significant contributor to the rise in global energy demand.
      </p>

      <article>
        <h3>Universal Access to Renewable Modern Energy</h3>

        <p>
          By 2030, we ensure universal access to affordable, reliable and modern energy services. To
          address the diverse needs of Nigeria’s poor through tailored sustainable energy service
          solutions. To Combining Sustainable Development with Environmental Protection To ensure
          access to affordable, reliable, sustainable and modern energy by poor people To promote
          investments in renewable energy resources, prioritizing energy efficient practices, and
          adopting clean energy technologies and infrastructure.
        </p>
      </article>
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
}
</script>

<style lang="scss" scoped>
.block {
  padding-top: 5rem;
  h2 {
    font-size: 40px;
    text-align: center;
    margin-top: 5rem;

    @media screen and (max-width: 768px) {
      font-size: 30px;
      line-height: 27px;
      padding: 0 2rem;
    }
  }

  h3 {
    font-size: 30px;
    text-align: start;
    margin-top: 3rem;
    padding: 0 5rem;
    font-weight: 300;

    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 27px;
      padding: 0 2rem;
      margin-top: 2rem;
    }
  }

  p {
    font-size: 22px;
    line-height: 37.4px;
    //   max-width: 784px;
    margin: auto;
    font-weight: 300;
    margin-top: 0;
    padding: 1rem 5rem;
    margin-bottom: 4rem;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 27px;
      padding: 2rem;
    }
  }
}
</style>
