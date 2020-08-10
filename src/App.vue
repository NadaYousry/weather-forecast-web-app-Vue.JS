<template>
  <div id="app" class="weather">
    <div>
      <!--  <p>{{lat}} Lattide ,{{lng}} longitude</p>-->
    </div>

    <router-view />
  </div>
</template>

<style lang="scss" scoped>
@import "./app";
</style>
<script>
// import logInComponent from "./components/logInComponent/logInComponent";
export default {
  name: "app",
  components: {
    // logInComponent
  }
};
</script>
