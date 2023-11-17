<template>
  <div class="hello">
    <div id="mainContainer">
      <div id="mainTitleText">
        <p>{{ $t("helloWord") }}</p>
      </div>
    </div>
    <div class="btnArea">
      <!-- <div class="homeBtn" @click="downloadResume">{{ $t("resume") }}</div> -->
      <div class="homeBtn" @click="goPortfolio">{{ $t("portfolioOnline") }}</div>
      <div class="homeBtn" @click="downloadPortfolio">{{ $t("portfolioDownload") }}</div>
      <div class="homeBtn" @click="changeLang"><span class="iconfont">&#xe8a9;</span></div>
    </div>
    <div id="firstContainer">
      <div id="mainText">
        <p style="font-weight: 600;">{{ $t("para1") }}</p>
        <p>{{ $t("para2") }}</p>
        <p>{{ $t("para3") }}</p>
        <p>{{ $t("para4") }}</p>
      </div>
    </div>
    <div id="container">
      <div id="titleText">
        <p>{{ $t("personInfoTitle") }}</p>
      </div>
      <div id="mainText">
        <p>{{ $t("personInfo1") }}</p>
        <p style="margin-top: -15px">{{ $t("personInfo2") }}</p>
        <p style="margin-top: -15px">{{ $t("personInfo5") }}</p>
        <p style="margin-top: -15px">{{ $t("personInfo7") }}</p>
        <p style="margin-top: -15px; font-weight: 600;">{{ $t("personInfo8") }}</p>
        <el-divider
          ><i class="el-icon-phone"></i>{{ $t("tagName") }}</el-divider
        >
        <p style="margin-top: 15px">{{ $t("personInfo3") }}</p>
        <p style="margin-top: -15px">{{ $t("personInfo4") }}</p>
        <p style="margin-top: -15px">{{ $t("personInfo6") }}</p>
      </div>
    </div>
    <div id="twoCard">
          <div id="smallContainer1">
            <div id="titleText">
              <p>{{ $t("tools") }}</p>
            </div>
            <div class="softwareUsedBlock" style="margin-top: -15px;">
              <el-tag type="info" style="margin-top: 5px">{{ $t("tag1") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag2") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag3") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag4") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag5") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag6") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag7") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag8") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag9") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag10") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag11") }}</el-tag>
            </div>
          </div>
          <div id="smallContainer2">
            <div id="titleText">
              <p>AIGC</p>
            </div>
            <div style="margin-top: -15px;">
              <el-tag type="info" style="margin-top: 5px">{{ $t("aigc1") }}</el-tag>
              <el-tag type="info" style="margin-top: 5px">{{ $t("aigc2") }}</el-tag>
              <el-tag type="info" style="margin-top: 5px">{{ $t("aigc3") }}</el-tag>
              <el-tag type="info" style="margin-top: 5px">{{ $t("aigc4") }}</el-tag>
              <el-tag type="info" style="margin-top: 5px">{{ $t("aigc5") }}</el-tag>
              <el-tag type="info" style="margin-top: 5px">{{ $t("aigc6") }}</el-tag>
              <el-tag type="info" style="margin-top: 5px">{{ $t("aigc7") }}</el-tag>
            </div>
          </div>
    </div>
    <div id="footer">
      <p style="font-weight: 800">{{ $t("footerText") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  methods: {
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === "zh" ? "en" : "zh";
      if (this.$i18n.locale === "en") {
        this.$message({
          message: "Switched to English",
          type: "success",
        });
      } else {
        this.$message({
          message: "已切换为简体中文",
          type: "success",
        });
      }
    },

    downloadPortfolio(){
      window.location.href = "https://api-serv.tzih.top/cdn/田梓衡-个人简历.pdf"
    },

    goPortfolio(){
      window.location.href = "https://www.behance.net/patricktien1"
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-family: "Poppins", sans-serif;
}
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_3364336_24wz9v85byr.woff2?t=1651116121376")
      format("woff2"),
    url("//at.alicdn.com/t/font_3364336_24wz9v85byr.woff?t=1651116121376")
      format("woff"),
    url("//at.alicdn.com/t/font_3364336_24wz9v85byr.ttf?t=1651116121376")
      format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,
h2 {
  font-weight: normal;
}

.btnArea{
  margin-bottom: 80px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.homeBtn{
  background-color: rgba(0, 0, 0, 0.075);
  padding: 20px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  cursor:pointer;
  transition: all 0.3s ease;
}

.homeBtn:hover{
  background-color: rgba(0, 0, 0, 0.932);
  color: #ffffff;
}

#changeLangBtn {
  top: 20px;
  right: 20px;
  position: absolute;
}
#contactText {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
  margin-top: 30px;
}
#hello {
  margin-left: 30px;
  margin-right: 30px;
}

#mainContainer {
  margin: auto;
  margin-top: 220px;
  max-width: 650px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#firstContainer {
  background-color: #ffffff;
  margin: auto;
  margin-top: -40px;
  max-width: 650px;
  padding: 20px;
  border: solid 2px rgb(247, 247, 247);
  border-radius: 15px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.075);
}
#container {
  background-color: #ffffff;
  margin: auto;
  margin-top: 20px;
  max-width: 650px;
  padding: 20px;
  border: solid 2px rgb(247, 247, 247);
  border-radius: 15px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.075);
}
#mainText {
  margin-top: -20px;
  word-break: break-word;
}
#twoCard {
  margin: auto;
  margin-top: 20px;
  max-width: 695px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; /* 横向排列时的间距 */
}
#smallContainer1, #smallContainer2 {
  background-color: #ffffff;
  padding: 20px;
  border: solid 2px rgb(247, 247, 247);
  border-radius: 15px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.075);
  flex: 1; /* 填充所有可用空间 */
  margin-bottom: 20px; /* 竖向排列时的下方间距 */
}
#mainTitleText {
  font-weight: bolder;
  font-size: 40px;
}
#titleText {
  font-weight: bold;
  font-size: 25px;
  margin-top: -30px;
}
#footer {
  margin-top: 100px;
  font-size: 15px;
  text-align: center;
  color: #b9b9b9;
  margin-bottom: 20px;
}

@media (max-width: 695px) {
  #twoCard {
    flex-direction: column; /* 竖向排列 */
    gap: 0px;
  }

  #smallContainer1, #smallContainer2 {
    flex: none; /* 不再填充可用空间，回到默认宽度 */
    width: auto; /* 竖向排列时的宽度 */
  }
}
</style>
