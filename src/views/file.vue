<template>
  <div :class="$style.root">
    <div :class="$style.title">
      {{ '/  -' + title[$route.params.name] + '-  /' }}
    </div>
    <div :class="$style.layout">
      <div
        :class="$style.imgStyle"
        v-for="(item, i) in files[indexOfNum[$route.params.name]]"
        :key="i"
        :style="{ backgroundImage: `url(${item})` }"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      componentName: null,
      title: {
        kms: '檔案資訊存取管理系統',
        wh: '物聯網系統',
        shop: '電商系統',
        roche: '醫療病患管理系統',
        qrcode: '抽獎報到系統',
        sheho: '師虎來了形象官網',
        other: '其他'
      },
      indexOfNum: {
        kms: 0,
        wh: 1,
        shop: 2,
        roche: 3,
        qrcode: 4,
        sheho: 5,
        other: 6
      },
      files: [[
        require('@/assets/image/kms/01.png'),
        require('@/assets/image/kms/02.png'),
        require('@/assets/image/kms/03.png'),
        require('@/assets/image/kms/04.png'),
        require('@/assets/image/kms/05.png'),
        require('@/assets/image/kms/06.png'),
        require('@/assets/image/kms/07.png'),
        require('@/assets/image/kms/08.png'),
        require('@/assets/image/kms/09.png'),
        require('@/assets/image/kms/010.png'),
        require('@/assets/image/kms/011.png'),
        require('@/assets/image/kms/012.png'),
        require('@/assets/image/kms/013.png'),
        require('@/assets/image/kms/014.png')
      ], [
        require('@/assets/image/wh/01.png'),
        require('@/assets/image/wh/02.png'),
        require('@/assets/image/wh/03.png'),
        require('@/assets/image/wh/04.png'),
        require('@/assets/image/wh/05.png'),
        require('@/assets/image/wh/06.png'),
        require('@/assets/image/wh/07.png'),
        require('@/assets/image/wh/08.png')
      ], [
        require('@/assets/image/shop/01.png'),
        require('@/assets/image/shop/02.png'),
        require('@/assets/image/shop/03.png'),
        require('@/assets/image/shop/04.png'),
        require('@/assets/image/shop/05.png'),
        require('@/assets/image/shop/06.png'),
        require('@/assets/image/shop/07.png'),
        require('@/assets/image/shop/08.png'),
        require('@/assets/image/shop/09.png'),
        require('@/assets/image/shop/010.png'),
        require('@/assets/image/shop/011.png'),
        require('@/assets/image/shop/012.png'),
        require('@/assets/image/shop/013.png')
      ], [
        require('@/assets/image/roche/01.png'),
        require('@/assets/image/roche/02.png'),
        require('@/assets/image/roche/03.png'),
        require('@/assets/image/roche/04.png'),
        require('@/assets/image/roche/05.png')
      ], [
        require('@/assets/image/qrcode/01.png'),
        require('@/assets/image/qrcode/02.png'),
        require('@/assets/image/qrcode/03.png'),
        require('@/assets/image/qrcode/04.png'),
        require('@/assets/image/qrcode/05.png'),
        require('@/assets/image/qrcode/06.png'),
        require('@/assets/image/qrcode/07.png'),
        require('@/assets/image/qrcode/08.png'),
        require('@/assets/image/qrcode/09.png'),
        require('@/assets/image/qrcode/010.png'),
        require('@/assets/image/qrcode/011.png'),
        require('@/assets/image/qrcode/012.png')
      ], [
        require('@/assets/image/sheho/01.png'),
        require('@/assets/image/sheho/02.png'),
        require('@/assets/image/sheho/03.png'),
        require('@/assets/image/sheho/04.png'),
        require('@/assets/image/sheho/05.png'),
        require('@/assets/image/sheho/06.png'),
        require('@/assets/image/sheho/07.png'),
        require('@/assets/image/sheho/08.png')
      ], [
        require('@/assets/image/other/01.png'),
        require('@/assets/image/other/02.png'),
        require('@/assets/image/other/03.png'),
        require('@/assets/image/other/04.png'),
        require('@/assets/image/other/05.png'),
        require('@/assets/image/other/06.png'),
        require('@/assets/image/other/07.png'),
        require('@/assets/image/other/08.png'),
        require('@/assets/image/other/09.png'),
        require('@/assets/image/other/010.png'),
        require('@/assets/image/other/011.png'),
        require('@/assets/image/other/012.png'),
        require('@/assets/image/other/013.png'),
        require('@/assets/image/other/014.png'),
        require('@/assets/image/other/015.png'),
        require('@/assets/image/other/016.png'),
        require('@/assets/image/other/017.png'),
        require('@/assets/image/other/018.png'),
        require('@/assets/image/other/019.png'),
        require('@/assets/image/other/020.png'),
        require('@/assets/image/other/021.png'),
        require('@/assets/image/other/022.png'),
        require('@/assets/image/other/023.png'),
        require('@/assets/image/other/024.png'),
        require('@/assets/image/other/025.png'),
        require('@/assets/image/other/026.png'),
        require('@/assets/image/other/027.png'),
        require('@/assets/image/other/028.png'),
        require('@/assets/image/other/029.png'),
        require('@/assets/image/other/030.png'),
        require('@/assets/image/other/031.png'),
        require('@/assets/image/other/033.png'),
        require('@/assets/image/other/034.png'),
        require('@/assets/image/other/035.png'),
        require('@/assets/image/other/036.png'),
        require('@/assets/image/other/037.png'),
        require('@/assets/image/other/038.png'),
        require('@/assets/image/other/039.png')
      ]]
    }
  }
}
</script>

<style lang="scss" module>
.root {
  width: 100%;
  min-height: 100%;
  overflow: auto;
  padding: 80px 0;
  box-sizing: border-box;
}

.layout {
  width: 100%;
  justify-content: center;
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: 1000px;
  grid-auto-rows: 450px;
  grid-gap: 20px;
}

.imgStyle {
  position: relative;
  background: #fff;
  border-radius: 5px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.outside {
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 1px solid #E5E5FF;
  background: #E5E5FF;
  border-radius: 5px;
  position: absolute;
}

.title {
  text-align: center;
  font-size: 30px;
  color: #9696ca;
  margin-bottom: 50px;
  padding: 30px 0;
  box-sizing: border-box;
  background: #F8F8F8;
}

.outimg {
  display: flex;
  flex-direction: column;
}

.btn {
  width: 30%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 999rem;
  align-self: flex-end;
  margin-top: 20px;
  color: #9696ca;
  font-size: 20px;
  transition: .3s;
  cursor: pointer;

  &:hover {
    transition: .3s;
    width: 100%;
    color: #fff;
    background: #9696ca;
  }
}

.out {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  flex: 1;
}

.title2 {
  font-size: 26px;
  color: #6e6eaf;
  margin-bottom: 10px;
  border-bottom: 3px solid #9696ca;
  padding-bottom: 20px;
}

.direction {
  font-size: 18px;
  color: #9c9cca;
  margin-top: 20px;

  &:before {
    content: '•';
    width: 20px;
    height: 100%;
    top: 0;
    left: 0;
  }
}

@media (max-width: 1025px) {
  .root {
    padding: 30px 0;
  }

  .title {
    padding: 10px 0;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .layout {
    grid-auto-columns: 80%;
    grid-auto-rows: 280px;
  }
}
</style>
