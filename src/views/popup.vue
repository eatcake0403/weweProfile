<template>
  <div :class="$style.root">
    <img :src="img" :class="$style.img"/>
    <div :class="$style.btn" @click="$emit('close')">
      關閉
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String
  }
}
</script>

<style lang="scss" module>
.root {
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
}

.img {
  width: auto;
  height: 60%;
  border-radius: 9px;
}

.btn {
  width: 40%;
  border-radius: 999rem;
  height: 50px;
  background: #6e6eaf;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
