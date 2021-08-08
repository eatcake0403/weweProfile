<template>
  <div :class="$style.root">
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
}

.nav {
  grid-area: nav;
}

.main {
  grid-area: main;
}
</style>
