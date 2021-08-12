<template>
  <div :class="$style.root">
    <div
      @click="routerFunction('webDevelopment')"
      :class="[$style.outside,
        { [$style.iconClick]: routerName === 'webDevelopment' }]
    ">
      <img
        :src="web"
        :class="$style.icon"
      />
    </div>
    <div
      @click="routerFunction('aboutMe')"
      :class="[$style.outside,
        { [$style.iconClick]: routerName === 'aboutMe' }]
    ">
      <img :src="account" :class="$style.icon"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: require('@/assets/svg/account.svg'),
      devices: require('@/assets/svg/devices.svg'),
      web: require('@/assets/svg/web.svg')
    }
  },
  computed: {
    routerName () {
      return this.$route.name
    }
  },
  methods: {
    routerFunction (routerName) {
      if (routerName === this.$route.name) return
      this.$router.push({ name: routerName })
    }
  }
}
</script>

<style lang="scss" module>
.root {
  background: #F8F8F8;
  border-radius: 0 10px 10px 0;
  box-shadow: 11px 8px 8px rgba(0, 0, 0, .1);
  display: grid;
  grid-template-rows: repeat(3, 55px);
  grid-template-columns: 55px;
  flex-direction: column;
  justify-content: center;
  padding: 55px 0;
  box-sizing: border-box;
  grid-row-gap: 20px;
}

.outside {
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(136, 136, 196, .1);
    border-radius: 5px;
    cursor: pointer;
  }

  &.iconClick {
    background: rgba(136, 136, 196, .2);
    border-radius: 5px;
  }
}

.icon {
  width: 30px;
  height: auto;
}
</style>
