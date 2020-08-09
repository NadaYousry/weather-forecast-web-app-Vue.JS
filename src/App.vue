<template>
  <div id="app" class="weather">
    <div class="container m-auto mt-5">
      <headerComponent :lng="lng" :lat="lat"/>
      <main class="weather-body pt-3 w-5/6 m-auto">
        <div class="grid grid-cols-3 gap-4">
          <div class>
            <daysForecasting />
          </div>

          <!--start clock-->
          <div class="weather-body_clock">
            <clockComponent />
          </div>

          <!-- start third column country weather-->
          <div class="weather-body_locations-temp">
            <countryForecating />
          </div>
        </div>
      </main>
    </div>
    <div>
      <p>{{lat}} Lattide ,{{lng}} longitude</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./app";
</style>
<script>
import clockComponent from "./components/clock/clockComponent";
import countryForecating from "./components/countryForecating/countryForecating";
import headerComponent from "./components/headerComponent/headerComponent";
import daysForecasting from "./components/daysForecasting/daysForecasting";
export default {
  name: "app",
  components: {
    clockComponent,
    countryForecating,
    headerComponent,
    daysForecasting
  },

  data() {
    return {
        lng: 0,
        lat: 0,
      
    };
  },
  created() {
    //   get user location
    this.$getLocation({}).then(coordinates => {
      this.lat = coordinates.lat;
      this.lng = coordinates.lng;
    });
  },
  methods: {}
};
</script>
