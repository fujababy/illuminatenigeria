<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark pt-5 pb-5">
    <div class="container">
      <a href="/" class="navbar-brand">ILLUMINATE NIGERIA</a>
      <span><img src="" alt="" /></span>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

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
      </div>
    </div>
  </nav>
</template>

<script></script>

<style lang="scss" scoped>
.navbar {
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
.navbar-brand {
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
}

.navbar-nav {
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
