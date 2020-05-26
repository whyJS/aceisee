import Vue from "vue";
import axios from "./router/axios";
import VueAxios from "vue-axios";
import App from "./App";
import router from "./router/router";
import "./permission"; // 权限
import "./cache"; //页面缓存
import store from "./store";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import i18n from "./lang"; // Internationalization
import "./styles/common.scss";
import basicBlock from "./components/basic-block/main";
import basicContainer from "./components/basic-container/main";
import pagination from "./components/pagination/index";
import { vaildData } from "./util/validate.js";

Vue.use(router);
Vue.use(VueAxios, axios);
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
});
//注册全局容器
Vue.component("basicContainer", basicContainer);
Vue.component("basicBlock", basicBlock);
Vue.component("pagination", pagination);

Vue.config.productionTip = false;

Vue.prototype.vaildData = vaildData;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
