import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import "normalize.css";
import "ant-design-vue/dist/antd.less";
import { Select } from "ant-design-vue";

Vue.config.productionTip = false;
Vue.use(Select);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
