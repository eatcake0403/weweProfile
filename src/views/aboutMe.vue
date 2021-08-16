<template>
  <div :class="$style.root">
    <div :class="$style.line">
      <div :class="$style.imageCss" :style="{ backgroundImage: `url(${me})` }">
      </div>
      <div :class="$style.name">
        <p :class="$style.name2">邱心薇</p>
        <p :class="$style.name3">Xin-Wei Qiu</p>
      </div>
      <div :class="$style.name">
        <p :class="$style.text">
          <img :src="mail" :class="$style.phone"/>
          eatcake0403@gmail.com
        </p>
        <p :class="$style.text">
          <img :src="phone" :class="$style.mail"/>
          0982717491
        </p>
      </div>
      <p :class="$style.cv">
        履歷
        <img :src="pdf" :class="$style.pdfcss"/>
      </p>
      <div :class="$style.outside" @click="tofunction">
        <img :src="view" :class="$style.icon2"/>
        預覽
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: require('@/assets/svg/phone.svg'),
      mail: require('@/assets/svg/mail.svg'),
      pdf: require('@/assets/svg/pdf.svg'),
      view: require('@/assets/svg/view.svg'),
      download: require('@/assets/svg/download.svg'),
      cv: require('@/assets/cv.pdf'),
      me: require('@/assets/me.jpeg')
    }
  },
  methods: {
    tofunction () {
      window.open('https://drive.google.com/file/d/13gsI5nPsdZPRUCMuJCa0qNi2sKkqgHtD/view?usp=sharing')
    }
  }
}
</script>

<style lang="scss" module>
.root {
  width: calc(100vw - 80px);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-left: 1px solid #E5E5FF;
  border-right: 1px solid #E5E5FF;
}

.imageCss {
  background: #fff;
  width: 180px;
  height: 180px;
  border-radius: 5px;
  background-size: contain;
}

.name {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  color: #fff;

  .name2 {
    font-size: 40px;
  }

  .name3 {
    font-size: 20px;
    margin-top: 10px;
  }

  .text {
    width: 300px;
    font-size: 18px;
    display: flex;
    align-items: center;
    padding-bottom: 18px;
  }
}

.phone {
  width: 25px;
  height: 22px;
  margin-right: 24px;
}

.mail {
  width: 24px;
  height: 19px;
  margin-right: 24px;
}

.cvout {
  display: grid;
  grid-template-rows: 150px 15px;
  grid-template-columns: 150px 150px;
  grid-column-gap: 20px;
}

.outside {
  width: 150px;
  height: 150px;
  flex-direction: column;
  border-radius: 5px;
  cursor: pointer;
  transition: .3s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #E5E5FF;
  font-size: 20px;
  border: 1px solid #E5E5FF;
  text-decoration: none;
}

.cv {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  padding: 25px 0;
  font-size: 25px;
  color: #E5E5FF;
  margin-bottom: 28px;
  border-top: 1px solid #E5E5FF;
  border-bottom: 1px solid #E5E5FF;
}

.pdfcss {
  width: 35px;
  height: 35px;
  margin-left: 10px;
}

.icon2 {
  width: 25px;
  height: 25px;
  margin-bottom: 18px;
}

@media (max-width: 1025px) {
  .root {
    min-height: calc(100vh - 75px);
    width: 100%;
    display: block;
  }

  .line {
    min-height: calc(100vh - 75px);
    margin: 0 auto;
    justify-content: unset;
    padding: 40px 0;
    box-sizing: border-box;
  }

  .name {

    .text {
      width: 100%;
      font-size: 16px;
    }
  }

  .cvout {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .outside {
    width: 153px;
    height: 130px;
    margin-top: 20px;
  }

  .imageCss {
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
