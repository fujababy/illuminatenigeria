<template>
  <div>
    <section>
      <footer class="block">
        <div class="list__container">
          <section>
            <ul>
              <h1>ABOUT</h1>
              <router-link :to="{ name: 'aboutUs' }">
                <li>About Us</li>
              </router-link>

              <router-link :to="{ name: 'terms' }">
                <li>Terms & Conditions</li>
              </router-link>

              <router-link :to="{ name: 'privacy' }">
                <li>Privacy Policy</li>
              </router-link>
            </ul>
          </section>
          <section>
            <ul>
              <h1>FIND US</h1>

              <router-link :to="{ name: '' }">
                <li>Contact</li>
              </router-link>

              <router-link :to="{ name: '' }">
                <li>Locations</li>
              </router-link>
            </ul>
          </section>
          <section>
            <ul>
              <h1>TAKE ACTION</h1>
              <router-link :to="{ name: 'donate' }">
                <li>Donate</li>
              </router-link>
              <router-link :to="{ name: 'home' }">
                <li>jump to top</li>
              </router-link>
            </ul>
          </section>
        </div>

        <div class="social__container">
          <div class="icon__container">
            <a href="https://www.facebook.com/Fujababy">
              <img src="../assets/svg/facebook-icon-1.svg" alt="" />
            </a>

            <a href="//api.whatsapp.com/send?phone=2348132852593&text=ILLUMINATE NIGERIA">
              <img src="../assets/svg/newwhatsapp.svg" alt="" />
            </a>

            <a
              href="https://www.linkedin.com/in/olaniran-taiwo-352598201
            "
            >
              <img src="../assets/svg/linkedin-icon-1.svg" alt="" />
            </a>

            <a href="https://www.instagram.com/fujababyy/">
              <img src="../assets/svg/instagram-glyph-1.svg" />
            </a>
          </div>
        </div>
      </footer>
    </section>

    <section>
      <div class="copyright__section">
        <p>&copy;{{ currentYear }} Illuminate Nigeria proudly powered by Vue. Design by Fuja.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  display: flex;

  padding-left: 180px;
  padding-right: 180px;
  // column-gap: 5rem;
  // margin-bottom: 5rem;
  // justify-content: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    // row-gap: 3rem;
    padding-bottom: 3rem;
    padding-left: 0;
    padding-right: 0;
    padding-top: 2rem;
  }

  .list__container {
    display: flex;
    justify-content: space-between;
    padding-top: 5rem;
    padding-bottom: 3rem;
    width: 100%;
    line-height: 1.4;
    border-right: 1px solid #000;

    @media screen and (max-width: 820px) {
      border-right: 0;
      padding: 2rem;
      width: 100%;
      line-height: 27px;

      border-bottom: 1px solid #393939;
    }

    .list__container,
    section,
    ul,
    h1 {
      font-size: 18px;
      font-weight: 500;
    }
    .list__container,
    section,
    ul,
    li {
      font-size: 16px;
      font-weight: 300;
      padding: 0px 30px 0px 0px;
    }
    .list__container,
    section,
    ul,
    li,
    a {
      color: #000;
    }

    @media screen and (max-width: 820px) {
      flex-direction: column;
      // justify-content: center;
      // align-items: center;
    }
  }

  .social__container {
    padding-top: 5rem;

    width: 100%;
    img {
      width: 30px;
      margin: 0rem 2rem;
    }

    @media screen and (max-width: 820px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0;
      padding-top: 3rem;
    }
  }
}

.copyright__section {
  background: #000;
  color: #fff;
  text-align: center;
  padding: 30px 15px;
  font-size: 26px;
  line-height: 27.2px;

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
    font-size: 18px;
  }
}
</style>
