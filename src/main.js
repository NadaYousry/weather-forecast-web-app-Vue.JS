import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/index.css";
import clockComponent from "@/components/clock/clockComponent";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    clockComponent,
    render: h => h(App)
}).$mount("#app");
