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
  width: 100vw;
  height: 100vh;
  grid-template-areas: 'nav main'
                        'nav main';
  grid-template-columns: 80px 1fr;
  background: #8888C4;
  position: relative;
  overflow: hidden;
}

.background {
  background-image: url(../assets/svg/background.png);
  background-repeat: repeat;
  background-size: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  animation-name: backgroundImage;
  animation-duration: 17s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform: scale(2);
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
  z-index: 1;
}

.main {
  z-index: 1;
  grid-area: main;
}
</style>
