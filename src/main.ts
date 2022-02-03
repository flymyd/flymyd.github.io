import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
import 'amfe-flexible'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import { getDeviceType, getWindowSize } from './utils/deviceInfo'
const app = createApp(App);
app.use(router).use(store);
app.mount('#app');
app.config.globalProperties.$deviceType = getDeviceType();
app.config.globalProperties.$windowSize = getWindowSize();
