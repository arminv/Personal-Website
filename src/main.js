import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
Vue.config.productionTip = false;
import VueTyperPlugin from "vue-typer";
import VueTimeline from "@growthbunker/vuetimeline";

Vue.use(VueTimeline);
Vue.use(VueTyperPlugin);

Vue.use(Vuesax);
import "vuesax/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css";
import vuetify from "./plugins/vuetify";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
