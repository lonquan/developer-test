import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import ElementUI from "element-ui";
import Vuex from "vuex";

import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.use(Vuex);

Vue.config.productionTip = false;
axios.defaults.baseURL = "/lottery";
Vue.prototype.$http = axios;

const store = new Vuex.Store({
  state: {
    countList: [],
    count: 0,
    timer: null,
    countDownTime: 0,
  },

  mutations: {
    countDown(state) {
      state.countDownTime++;
    },
    updateCount(state) {
      state.count++;
    },
    resetCountDownTime(state) {
      state.countDownTime = 0;
    },
    resetTimer(state) {
      state.timer = null;
    },
    recordCount(state, record) {
      state.countList.push(record);
    },
  },
  actions: {
    startTiming(context) {
      context.state.timer = setInterval(() => {
        context.commit("countDown");
      }, 1000);
    },
    pauseTiming(context) {
      clearInterval(context.state.timer);
      context.commit("resetTimer");
    },
    resetTiming(context) {
      context.commit("updateCount");
      let record = {
        id: context.state.count,
        time: context.state.countDownTime,
      };
      context.dispatch("pauseTiming");
      context.commit("resetCountDownTime");
      context.commit("recordCount", record);
    },
  },
});

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
