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
  locale: 'zh', // set locale
  messages: {
    zh: {
      hello: '田梓衡的 在线简历',
      changeLang: 'Change to English',
      resume: '下载简历',
      portfolioOnline: '在线作品集',
      portfolioDownload: '下载作品集',
      helloWord: '您好！👋',
      para1:'嗨，您好，我是田梓衡。',
      para2:'我十分热爱 UI 设计。跃动在屏幕上的符号、优雅的线条几何呈现、创意十足的点线面结合，这便是我所热爱的、所追寻的事物。作为未来发展和个人理想抱负而言，为了更好的理解开发、更好的结合设计与开发，高效输出开发可用的 UI，我还浅显学习使用 React Native 做过 App、使用 Vue + Nuxt 快速搭建网站，作为全栈完成过一个完整的 App 作品。当然，这些都是开源的。',
      para3:'在大学课余时间，我通过旁听其他专业课程、选修相关专业课程等方式，学习并掌握了平面设计、动态动效设计、UI 设计理论、VI 系统设计理论、C4D 建模、Redshift 渲染技能，并将这些融会贯通。',
      para4:'我也紧跟当下 AI 辅助创作的设计前沿，掌握包括 Stable Diffusion 在内的 AI 创作工具的使用方法，并掌握将 AI 辅助创作融入工作流的方法论。',
      personInfoTitle:'个人信息',
      personInfo1:'姓名：田梓衡',
      personInfo2:'出生日期：2002年6月',
      personInfo3:'微信：Ive0422',
      personInfo4:'邮箱地址：patricktien602@outlook.com',
      personInfo5:'性别：男 ♂',
      personInfo6:'电话号码：+86 180-3079-4693',
      personInfo7:'籍贯：四川成都',
      personInfo8:'求职意向：UI 设计',
      tagName:' 联系方式',
      tag1:'Figma',
      tag2:'Tokens Studio',
      tag3:'Lottie',
      tag4:'Tencent PAG',
      tag5:'After Effects',
      tag6:'Illustrator',
      tag7:'Photoshop',
      tag8:'Blender',
      tag9:'Cinema 4D',
      tag10:'Octane',
      tag11:'3Ds Max',
      tools:'我的工具',
      aigc1:'Stable Diffusion(WebUI)',
      aigc2:'Stable Diffusion(ComfyUI)',
      aigc3:'Midjourney',
      aigc4:'DALL·E',
      aigc5:'Firefly',
      aigc6:'ChatGPT 4.0',
      aigc7:'Claude',
      socialAccounts:'找到我',
      footerText:'Made with ❤️ by Patrick Tien',
    },
    en: {
      changeLang: '切换为中文',
      resume: 'Get Resume',
      portfolioOnline: 'My Portfolio',
      portfolioDownload: 'Get Portfolio',
      helloWord: 'Hello there! 👋',
      para1: "Hi, I'm Patrick Tien.",
      para2: "I have a deep passion for UI design. Symbols that come to life on the screen, elegant lines and geometric shapes, creative combinations of dots and lines – these are the things I love and pursue. In the pursuit of my future development and personal aspirations, to better understand development and integrate it with design, and to efficiently produce usable UI designs, I have dabbled in using React Native for app development and quickly building websites using Vue + Nuxt. I've even completed a full-stack app project, all of which are open source.",
      para3: "During my spare time in college, I learned and mastered graphic design, Ae motion effects design, UI design theory, VI system design theory, C4D modeling, and Redshift rendering skills through auditing other major courses and taking relevant electives. I've integrated all of these skills.",
      para4: "I also keep up with the latest design trends in AI-assisted creativity, mastering the use of AI creative tools, including Stable Diffusion, and understanding the methodology of incorporating AI-assisted creativity into the workflow.",
      personInfoTitle: 'Personal Information',
      personInfo1: 'Name: Patrick Tien',
      personInfo2: 'Date of Birth: June 2002',
      personInfo3: 'WeChat: Ive0422',
      personInfo4: 'Email Address: patricktien602@outlook.com',
      personInfo5: 'Gender: Male ♂',
      personInfo6: 'Phone Number: +86 180-3079-4693',
      personInfo7: 'Hometown: Chengdu, Sichuan, China',
      personInfo8: 'Job Interest: UI Design',
      tagName: 'Contact Information',
      tag1: 'Figma',
      tag2: 'Tokens Studio',
      tag3: 'Lottie',
      tag4: 'Tencent PAG',
      tag5: 'After Effects',
      tag6: 'Illustrator',
      tag7: 'Photoshop',
      tag8: 'Blender',
      tag9: 'Cinema 4D',
      tag10: 'Octane',
      tag11: '3Ds Max',
      tools: 'My Tools',
      aigc1: 'Stable Diffusion (WebUI)',
      aigc2: 'Stable Diffusion (ComfyUI)',
      aigc3: 'Midjourney',
      aigc4: 'DALL·E',
      aigc5: 'Firefly',
      aigc6: 'ChatGPT 4.0',
      aigc7: 'Claude',
      socialAccounts: 'Find Me On',
      footerText: 'Made with ❤️ by Patrick Tien',
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
