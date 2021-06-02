/*
 * @Author: Tmier
 * @Date: 2021-06-02 09:09:42
 * @LastEditTime: 2021-06-02 15:56:42
 * @Description: 
 * @LastModifiedBy: Tmier
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import imgLargeMode from "@/components/index.js";
Vue.config.productionTip = false;
Vue.use(imgLargeMode);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
