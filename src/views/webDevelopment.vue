<template>
  <div :class="$style.root">
    <div :class="$style.title">
      /  - Portfolio -  /
    </div>
    <div :class="$style.layout">
      <div
        :class="$style.outside"
        v-for="(item, i) in imgobj"
        :key="i"
      >
        <div :class="$style.outimg">
          <div
            :style="{ backgroundImage: `url(${item.img})` }"
            :class="$style.imgStyle"
          />
          <div
            @click="$router.push({ name: 'file', params: { name: item.routeName } })"
            :class="$style.btn"
          >
            More
          </div>
        </div>
        <div :class="$style.out">
          <div :class="$style.title2">
            {{ item.title }}
          </div>
          <div
            :class="$style.direction"
            v-for="(direction, i2) in item.directions"
            :key="i2"
          >
            {{ direction }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgobj: [{
        img: require('@/assets/image/kms/09.png'),
        title: '檔案資訊存取管理系統電',
        directions: [
          '比對版本，記錄檔案，並提供查看檔案、下載紀錄、下載檔案、刪除檔案等功能。',
          '功能包含地區管理、會員管理、目錄管理、專案管理、追蹤淸單、待辦事項、表單製作、檔案上傳、檔案審核、版本紀錄，多國語係。'
        ],
        routeName: 'kms'
      }, {
        img: require('@/assets/image/qrcode/010.png'),
        title: '抽獎報到系統',
        directions: [
          '最高權限者可使用 Excel 匯入員工資訊，在資料庫建檔。',
          '可將抽獎動畫另開新頁，抽獎時會同步播放。',
          '前台可使用員工編號登入，進行報到功能。'
        ],
        routeName: 'qrcode'
      }, {
        img: require('@/assets/image/roche/04.png'),
        title: '醫療病患管理系統',
        directions: [
          '匯入 CSV 檔後在資料庫建檔，紀錄病人用藥次數。',
          '若病人目前用藥次數為需醫生審核後才可用藥，則會簽署用藥同意，同時醫師也會收到簽署書，雙方必須簽署同意書後病人才可拿取這次用藥。',
          '列表資料匯出 CSV 。'
        ],
        routeName: 'roche'
      }, {
        img: require('@/assets/image/sheho/09.png'),
        title: '師虎來了形象官網',
        directions: [
          '製作形象官網。'
        ],
        routeName: 'sheho'
      }, {
        img: require('@/assets/image/shop/017.png'),
        title: '電商系統',
        directions: [
          '會員系統、分潤系統、購物車系統。',
          '串接綠界金流、物流功能。',
          '串接第三方登陸，採用 OAuth 流程。'
        ],
        routeName: 'shop'
      }, {
        img: require('@/assets/image/wh/04.png'),
        title: '物聯網系統',
        directions: [
          '將地圖上的節點使用圖示標示出來，並把需顯示的資料顯示至前端。',
          '並依節點顯示不同的資訊，並能預覽、下載使用 API 拉至前端的 PDF 檔案，並提供上鏈功能。'
        ],
        routeName: 'wh'
      }, {
        img: require('@/assets/image/shinjer/01.png'),
        title: '多人視訊系統',
        directions: ['使用 WebSocket 接收 IP 的字串，使用 WebRTC和串接視訊、音頻達到多人視訊的效果，但目前未優化，只是簡單的串接。'],
        routeName: 'shinjer'
      }]
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
  width: 400px;
  height: 270px;
  position: relative;
  background: #fff;
  border-radius: 5px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: 10px solid #fff;

}

.outside {
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 1px solid #E5E5FF;
  background: #E5E5FF;
  border-radius: 5px;
}

.title {
  text-align: center;
  font-size: 50px;
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
</style>
