<template>
  <div class="collapsible collapsible--expanded">
    <header class="collapsible__header">
      <h2 class="collapsible__heading">Item 1</h2>
      <div>
        <img
          class="collapsible__chevron"
          src="../assets/svg/reshot-icon-arrow-chevron-down-EUCMLYADT9.svg"
          alt=""
        />
      </div>
    </header>
    <div class="collapsible__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate amet maxime, ullam animi
      veritatis corrupti.
    </div>
  </div>
</template>

<script>
const collapsibles = document.querySelectorAll('.collapsible')
collapsibles.forEach((item) =>
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded')
  })
)
</script>

<style lang="scss" scoped>
.collapsible {
  .collapsible__header {
    display: flex;
    font-size: 3rem;
    justify-content: space-between;

    .collapsible__heading {
      margin-top: 0;
    }

    .collapsible__chevron {
      transform: rotate(-90deg);
      transition: transform 0.3s;
    }
  }

  .collapsible__content {
    max-height: 0;
    overflow: hidden;
    opacity: 0s;
    transition: all 0.3s;
  }

  .collapsible--expanded .collapsible__chevron {
    transform: rotate(0);
  }

  .collapsible--expanded .collapsible__content {
    max-height: 100vh;
    opacity: 1;
  }
}
</style>
