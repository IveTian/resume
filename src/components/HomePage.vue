<template>
  <div class="hello">
    <div id="changeLangBtn">
      <el-link :underline="false" target="_blank" @click="changeLang"
        ><span class="iconfont">&#xe8a9;</span></el-link
      >
    </div>
    <div id="mainContainer">
      <div id="mainTitleText">
        <p>{{ $t("helloWord") }}</p>
      </div>
    </div>
    <div id="firstContainer">
      <div id="mainText">
        <p>{{ $t("para1") }}</p>
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
        <p style="margin-top: -15px">{{ $t("personInfo3") }}</p>
        <p style="margin-top: -15px">{{ $t("personInfo4") }}</p>
        <el-divider
          ><i class="el-icon-collection-tag"></i>{{ $t("tagName") }}</el-divider
        >
        <div style="text-align: center">
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag1") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag2") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag3") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag5") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag6") }}</el-tag>
          <el-tag type="info" style="margin-top: 5px">{{ $t("tag7") }}</el-tag>
        </div>
      </div>
    </div>
    <div id="twoCard">
      <el-row>
        <el-col :span="11">
          <div id="smallContainer">
            <div id="titleText">
              <p>{{ $t("myWorks") }}</p>
            </div>
            <el-link
                  type="primary"
                  :underline="false"
                  href="https://www.figma.com/community/file/1189928298370727537/MIUI-UI-Design-System-(Community)"
                  target="_blank"
                  style="word-break: break-all;"
                >
                {{ $t("myWork1") }}
                </el-link>
                <el-link
                  type="primary"
                  :underline="false"
                  href="https://js.design/community?category=detail&type=resource&id=6226ccdcc09b33929cf67408"
                  target="_blank"
                  style="margin-top: 5px;word-break: break-all;"
                >
                {{ $t("myWork2") }}
                </el-link>
                <el-link
                  type="primary"
                  :underline="false"
                  href="https://api-serv.tzih.top/me/%E7%94%B0%E6%A2%93%E8%A1%A1-%E7%A4%BE%E5%9B%A2%E8%81%94%E5%90%88%E4%BC%9ALOGO%E8%AE%BE%E8%AE%A1.pdf"
                  target="_blank"
                  style="margin-top: 5px;word-break: break-all;"
                >
                {{ $t("myWork3") }}
                </el-link>
                <br />
                <el-link
                  type="primary"
                  :underline="false"
                  href="https://inlushan.top"
                  target="_blank"
                  style="margin-top: 5px;word-break: break-all;"
                >
                {{ $t("myWork4") }}
                </el-link>
          </div>
        </el-col>
        <el-col :span="11" :offset="2">
          <div id="smallContainer">
            <div id="titleText">
              <p>{{ $t("myWeb3") }}</p>
            </div>
            <div>
              <p>
                <el-link
                  type="primary"
                  :underline="false"
                  href="https://hoot.it/search/0xB38E7cFf2B47e8374c0F253527ddDA660Cb4A9F0"
                  target="_blank"
                >
                  {{ $t("cheersBio") }}
                </el-link>
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="container">
      <div id="titleText">
        <p>SHA-512:</p>
      </div>
      <div id="mainText">
        <p>
          2B78A02A01700B4DB73270ABB11EBA27C3132D4CD4359766E61F1D57237E9DE34A5AFED23A9C5F83FACEA29DD245C7BD47091B3F8F03ED7BE0857C5885BF17CC
        </p>
      </div>
    </div>
    <!-- <div id="container">
      <div id="titleText">
        <p>{{ $t("socialAccounts") }}</p>
      </div>
      <div id="mainText">
        <div id="contactText">
          <el-link
            :underline="false"
            href="https://github.com/IveTian"
            target="_blank"
            ><span class="iconfont" style="font-size: 35px"
              >&#xe691;</span
            ></el-link
          >
          <el-link
            type="primary"
            :underline="false"
            href="https://twitter.com/Ive422"
            target="_blank"
            ><span class="iconfont" style="font-size: 35px"
              >&#xe652;</span
            ></el-link
          >
          <el-link
            type="primary"
            :underline="false"
            href="https://www.facebook.com/patricktien422/"
            target="_blank"
            ><span class="iconfont" style="font-size: 35px"
              >&#xe88d;</span
            ></el-link
          >
          <el-link
            type="danger"
            :underline="false"
            href="https://music.163.com/#/user/home?id=491928446"
            target="_blank"
            ><span class="iconfont" style="font-size: 35px"
              >&#xe601;</span
            ></el-link
          >
          <el-link
            type="danger"
            :underline="false"
            href="https://weibo.com/u/2708379770"
            target="_blank"
            ><span class="iconfont" style="font-size: 35px"
              >&#xe65a;</span
            ></el-link
          >
          <el-link
            type="success"
            :underline="false"
            href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA3MTYyNDM4OQ==#wechat_redirect"
            target="_blank"
            ><span class="iconfont" style="font-size: 35px"
              >&#xe600;</span
            ></el-link
          >
        </div>
      </div>
    </div> -->
    <div id="footer">
      <el-link
                  type="primary"
                  :underline="false"
                  href="mailto:ivetien@outlook.com"
                  target="_blank"
                >
                {{ $t("sendEmail") }}
                </el-link>
      <p style="font-weight: 800">{{ $t("footerText") }}</p>
      <el-link
        type="info"
        :underline="false"
        href="https://beian.miit.gov.cn/"
        target="_blank"
        style="margin-top: -20px"
        >{{ $t("ICP") }}</el-link
      >
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
      this.$i18n.locale = this.$i18n.locale === "en" ? "zh" : "en";
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
}
#smallContainer {
  background-color: #ffffff;
  padding: 20px;
  border: solid 2px rgb(247, 247, 247);
  border-radius: 15px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.075);
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
</style>
