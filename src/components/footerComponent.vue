<template>
  <div>
    <section>
      <footer class="footer__sections">
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

              <li><a href="https://api.whatsapp.com/send?phone=08132852593">Contact</a></li>

              <router-link :to="{ name: '' }">
                <li>Locations</li>
              </router-link>
            </ul>
          </section>
          <section>
            <ul>
              <h1>TAKE ACTION</h1>
              <li><a href="/donate">Donate</a></li>
              <a href="#">
                <li>jump to top</li>
              </a>
            </ul>
          </section>
        </div>

        <div class="social__container">
          <div class="icon__container">
            <a href="https://www.facebook.com/Fujababy">
              <img src="../assets/svg/facebook-icon-1.svg" alt="" />
            </a>

            <a href="https://api.whatsapp.com/send?phone=08132852593">
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
.footer__sections {
  display: flex;
  padding-top: 5rem;
  padding-left: 180px;
  padding-right: 180px;
  column-gap: 5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    row-gap: 3rem;
    padding-bottom: 5rem;
    padding-left: 2rem;
    padding-right: 0;
    padding-top: 3rem;
  }

  .list__container {
    display: flex;
    justify-content: space-between;
    width: 50%;
    line-height: 1.4;
    border-right: 1px solid #000;

    @media screen and (max-width: 820px) {
      border-right: 0;
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
      padding: 10px 30px 0px 0px;
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
    padding-top: 1rem;
    img {
      width: 30px;
      margin-right: 4rem;
    }

    @media screen and (max-width: 820px) {
      display: flex;
      justify-content: center;
      align-items: center;
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
    padding-bottom: 4rem;
    font-size: 18px;
  }
}
</style>
