// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueI18n)
Vue.use(ElementUI);

Vue.config.productionTip = false

/* i18n config */
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: {
    en: {
      changeLang: '切换为中文',
      helloWord: 'Hi! 👋',
      para1:'Hey, I am Patrick Tien, a student at the Liuzhou Institute of Technology. I am currently studying Enviroment Design.',
      para2:'As a hobby, I have drawn UI, used React Native to make an app, used Vue to build a website quickly, and completed a complete app as a full stack. As well as made a lot of fun little toys. Of course, all these are open source.',
      para3:'Dreaming up ideas and making them come true is where my passion lies.',
      para4:'Outside of my classes, I also enjoy photography. If it happens that you and I are in the same city (Liuzhou & Chengdu) and you are interested in what I do, why not make an appointment to get together and discuss anything that interests me and you together.',
      personInfoTitle:'Some Personal Information',
      personInfo1:'Name: Patrick Tien',
      personInfo2:'Age: 20',
      personInfo3:'I CAN DO... : Video editing, UI design, interior space design and front-end development.',
      personInfo4:'EMail Address: ivetien@outlook.com',
      personInfo5:'Sex: Male ♂',
      tagName:' Tags',
      tag1:'UI/UX',
      tag2:'Photography',
      tag3:'Front-end Development',
      tag4:'Support genuine',
      tag5:'Video Editing',
      tag6:'Interior Design',
      tag7:'Visual Design',
      myWorks:'My Works',
      myWorksText:'Noting in here yet.',
      myWork1:"[UI/UX] MIUI UI Design System (Community)",
      myWork2:"[UI/UX] My Online University App (Chinese Only)",
      myWork3:"[VI] Association logo design (Chinese Only)",
      myWork4:"[App] inLushan",
      myWeb3:'My Web 3.0',
      cheersBio:'Go to Hoot.it',
      socialAccounts:'Find Me',
      footerText:'Made with ❤️ by Patrick Tien',
      ICP:'ICP No. in Chinese Mainland: 蜀ICP备20022252号',
      sendEmail:'Send Email'
    },
    zh: {
      changeLang: 'Change to English',
      helloWord: '你好！👋',
      para1:'嗨，你好，我是田梓衡，是一名高校在校学生，目前正在学习环境设计专业。',
      para2:'作为兴趣爱好而言，我曾画过UI、使用React Native做过App、使用Vue快速搭建网站，作为全栈完成过一个完整的App作品。以及做了很多有趣的小玩具。当然，这些都是开源的。我也热爱摄影、热爱生活。',
      para3:'梦想和实现这些想法是我的激情所在。',
      para4:'在课程之外，我还喜欢摄影。如果恰巧你和我在一个城市（柳州&成都），你对我所做的事情感兴趣，不妨约在一起探讨一下，任何我和你共同感兴趣的事情。',
      personInfoTitle:'我的一些个人信息',
      personInfo1:'姓名：田梓衡',
      personInfo2:'年龄：20',
      personInfo3:'我会：视频剪辑、UI设计、室内设计、前端开发。',
      personInfo4:'邮箱地址：ivetien@outlook.com',
      personInfo5:'性别：男 ♂',
      tagName:' 标签',
      tag1:'UI/UX',
      tag2:'摄影',
      tag3:'前端开发',
      tag4:'拥护正版',
      tag5:'视频剪辑',
      tag6:'室内设计',
      tag7:'平面视觉设计',
      myWorks:'我的作品',
      myWorksText:'暂时还没有东西哦',
      myWork1:"[UI/UX] MIUI UI Design System (Community)",
      myWork2:"[UI/UX] “我的线上大学”App",
      myWork3:"[VI] 社团Logo设计",
      myWork4:"[App] 在鹿山",
      myWeb3:'我的 Web 3.0',
      cheersBio:'前往 Hoot.it',
      socialAccounts:'找到我',
      footerText:'Made with ❤️ by Patrick Tien',
      ICP:'蜀ICP备20022252号',
      sendEmail:'发送邮件'
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
