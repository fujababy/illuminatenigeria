<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark pt-3 pb-3">
    <div class="container">
      <!-- <a href="/" class="navbar-brand"> -->
      <img class="nav__logo" src="../../public/default-monochrome-white.svg" alt="" />
      <!-- </a> -->

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto col-sm-mt-5">
          <li class="nav-item me-5">
            <a href="/" class="nav-link">HOME</a>
          </li>
          <router-link :to="{ name: 'aboutUs' }">
            <li class="nav-item me-5">
              <a href="#" class="nav-link">ABOUT</a>
            </li>
          </router-link>
          <router-link :to="{ name: 'purpose' }">
            <li class="nav-item me-5">
              <a href="#" class="nav-link">PURPOSE</a>
            </li>
          </router-link>
          <router-link :to="{ name: 'donate' }">
            <li class="nav-item me-5">
              <a href="#" class="nav-link">DONATE</a>
            </li>
          </router-link>
        </ul>
      </div> -->

      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto col-sm-mt-5">
          <router-link :to="{ name: 'home' }">
            <li class="nav-item me-5"><span class="nav-link">HOME</span></li>
          </router-link>
          <router-link :to="{ name: 'aboutUs' }">
            <li class="nav-item me-5"><span class="nav-link">ABOUT</span></li>
          </router-link>
          <router-link :to="{ name: 'purpose' }">
            <li class="nav-item me-5"><span class="nav-link">PURPOSE</span></li>
          </router-link>
          <router-link :to="{ name: 'donate' }">
            <li class="nav-item me-5"><span class="nav-link">DONATE</span></li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;

  .collapse {
    @media screen and (max-width: 768px) {
      margin-top: 2rem;
    }

    ul {
      li {
        @media screen and (max-width: 768px) {
          border-bottom: 1px solid #393939;
          width: 100%;
        }
      }
    }
  }
}

.container {
  .nav__logo {
    width: 300px;

    @media screen and (max-width: 768px) {
      width: 200px;
    }
  }
}
.navbar-brand {
  // font-size: 2rem;

  @media screen and (max-width: 768px) {
    // font-size: 16px;
  }
}

.navbar-nav {
  font-size: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  .nav-item {
    @media screen and (max-width: 768px) {
    }
  }
}

.fs {
  font-size: 2rem;
}
</style>
