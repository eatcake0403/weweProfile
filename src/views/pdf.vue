<template>
  <div :class="$style.root">
    <embed
      :src="cv" width="100%" height="100%"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      cv: require('@/assets/cv.pdf')
    }
  }
}
</script>

<style lang="scss" module>
.root {
  width: 100vw;
  height: 100vh;
}
</style>
