import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
Vue.config.productionTip = false;

Vue.use(Vuesax);
import "vuesax/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
