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
      portfolioDownload: '下载简历',
      helloWord: '您好！👋',
      para1:'嗨，您好，我是田梓衡。',
      para2:'本人十分热爱交互视觉设计。跃动在屏幕上的符号、优雅的线条几何呈现、创意十足的点线面结合，这便是我所热爱的、所追寻的事物。我具有良好的沟通能力和团队合作精神，能够快速适应新的环境，不断学习和进步。',
      para3:'我具有良好的自驱力，能够主动学习前沿、新潮技术。在大学课余时间，我通过旁听其他专业课程、选修相关专业课程等方式，学习并掌握了平面设计、Ae动态动效设计、UI设计理论、VI系统设计理论、C4D建模、Redshift渲染技能，并将这些融会贯通。',
      para4:'我也紧跟当下AI辅助创作的设计前沿，掌握包括Stable Diffusion在内的AI创作工具的使用方法，并掌握将AI辅助创作融入工作流的方法论。我十分浅显地学习了前端开发相关知识，将其开发思路应用到我的设计上，达到能够做出可落地的、成熟的设计方案的目的。',
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
      para2: "I love interactive visual design. The symbols on the screen, the elegant lines and geometric presentation, the creative combination of dots and lines, these are the things I love and pursue. I have good communication skills and teamwork spirit, I can quickly adapt to new environments, and continue to learn and improve.",
      para3: "I have good self-drive and can take the initiative to learn cutting-edge and trendy technologies. In my spare time at university, I have learned and mastered graphic design, Ae dynamic dynamic effect design, UI design theory, VI system design theory, C4D modeling, Redshift rendering skills by observing other professional courses, taking related professional courses, and so on, and have integrated these.",
      para4: "I have also kept up with the current design frontiers of AI-assisted authoring, mastering the use of AI authoring tools, including Stable Diffusion, and mastering the methodology of integrating AI-assisted authoring into my workflow. I have very superficially learned about front-end development, applying its development ideas to my designs to achieve the goal of being able to produce a landable, mature design solution.",
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
