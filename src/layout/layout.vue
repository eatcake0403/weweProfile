<template>
  <div :class="$style.root">
    <div :class="$style.background"/>
    <navComponent :class="$style.nav"/>
    <router-view :class="$style.main"/>
  </div>
</template>

<script>
import navComponent from '@/components/nav.vue'
export default {
  components: {
    navComponent
  }
}
</script>

<style lang="scss" module>
.root {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: 'nav main'
                        'nav main';
  grid-template-columns: 80px 1fr;
  background: #8888C4;
  position: relative;
}

.background {
  background-image: url(../assets/svg/background.png);
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  animation-name: backgroundImage;
  animation-duration: 200s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes backgroundImage {
  to {
    background-position: 0 0;
  }

  from {
    background-position: 100% 100%;
  }
}

.nav {
  grid-area: nav;
  z-index: 2;
  position: fixed;
  height: 100vh;
  width: 80px;
  top: 0;
  left: 0;
}

.main {
  z-index: 1;
  grid-area: main;
}

@media (max-width: 1025px) {
  .nav {
    grid-area: nav;
    z-index: 2;
    position: sticky;
    width: 100%;
    height: unset;
    top: 0;
    left: 0;
  }

  .root {
    display: flex;
    flex-direction: column;
  }
}
</style>
