import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/index.css";
import clockComponent from "@/components/clock/clockComponent";
import VueGeolocation from "vue-browser-geolocation";
import axios from "axios";
Vue.config.productionTip = false;
Vue.use(VueGeolocation);
Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    clockComponent,
    render: h => h(App)
}).$mount("#app");
