// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./vuex/index";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,//将 stroe 暴露出去
  components: { App },
  template: "<App/>"
});

// new Vue({
//   el: "title",
//   computed: {
//     title() {
//       return stroe.state.title;
//     }
//   }
// });
