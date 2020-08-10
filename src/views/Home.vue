<template>
  <div class="container m-auto mt-5 md:p-6 p-3">
    <headerComponent :lng="lng" :lat="lat" />
    <main class="weather-body pt-3 w-5/6 m-auto">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
        <div class>
          <daysForecasting :lng="lng" :lat="lat" />
        </div>

        <!--start clock-->
        <div class="weather-body_clock md:mb-10 lg:mb-0 mb-10">
          <clockComponent />
        </div>

        <!-- start third column country weather-->
        <div class="weather-body_locations-temp">
          <countryForecating />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import clockComponent from "./../components/clock/clockComponent";
import countryForecating from "./../components/countryForecating/countryForecating";
import headerComponent from "./../components/headerComponent/headerComponent";
import daysForecasting from "./../components/daysForecasting/daysForecasting";
export default {
  name: "Home",
  components: {
    clockComponent,
    countryForecating,
    headerComponent,
    daysForecasting
    // HelloWorld
  },
  data() {
    return {
      lng: 0,
      lat: 0
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
