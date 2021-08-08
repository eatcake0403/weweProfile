<template>
  <div :class="$style.root">
    <div :class="$style.layout">
      <div :class="$style.imgStyle"/>
      <div :class="[$style.imgStyle, $style.imgStyle2]"/>
      <div :class="$style.imgStyle"/>
      <div :class="$style.imgStyle"/>
      <div :class="$style.imgStyle"/>
      <div :class="$style.imgStyle"/>
      <div :class="$style.imgStyle"/>
      <div :class="[$style.imgStyle, $style.imgStyle3]"/>
      <div :class="$style.imgStyle"/>
      <div :class="$style.imgStyle"/>
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  overflow: auto;
}

.layout {
  display: grid;
  justify-content: center;
  padding: 50px 0;
  box-sizing: border-box;
  grid-auto-columns: 250px;
  grid-auto-rows: 250px;
  grid-gap: 20px;
}

.imgStyle {
  background: #fff;
  border-radius: 5px;

  &.imgStyle2 {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 4;
  }

  &.imgStyle3 {
    grid-row-start: 3;
    grid-row-end: 5;
    grid-column-start: 3;
    grid-column-end: 5;
  }
}
</style>
