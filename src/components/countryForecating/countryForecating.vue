<template>
  <div class="weather-body_locations-temp">
    <div class="weather-body_locations-temp_top-content">
      <div class="rounded-lg flex items-center card weather-body_locations-temp_cards mb-10">
        <div
          class="px-6 py-4 weather-body_locations-temp_card-details text-left text-4xl capitalize font-medium flex items-center"
        >
          <div class="weather-body_locations-temp_card-details_name text-left pl-2 w-60">
            <div class="flex weather-body_locations-temp_card-details_image">
              <img class src="../../assets/images/Group4.svg" alt="location icon" />
              <p class="text-2xl capitalize ml-2">south africa</p>
            </div>
            <p
              class="weather-body_locations-temp_card-details_name_degree text-left text-4xl capitalize font-medium"
            >
              29
              <sup>o</sup>
            </p>
            <p
              class="text-left capitalize font-medium weather-body_locations-temp_card-details_name_wind"
            >
              Humidity 28%
              <span>|</span> wind 26 km/h
            </p>
          </div>
        </div>
        <div class="weather-body_locations-temp_card-img w-40">
          <img src="../../assets/images/Group6.svg" class="m-auto" />
          <div
            class="weather-body_locations-temp_card-img_icon rounded-full h-20 w-20 flex items-center justify-center bg-white p-3 ml-auto"
          >
            <img src="../../assets/images/lightning.svg" alt="temprature icon" />
          </div>
        </div>
      </div>
      <div class="rounded-lg flex items-center card weather-body_locations-temp_cards mb-10">
        <div
          class="px-6 py-4 weather-body_locations-temp_card-details text-left text-4xl capitalize font-medium flex items-center"
        >
          <div class="weather-body_locations-temp_card-details_name text-left pl-2 w-60">
            <div class="flex weather-body_locations-temp_card-details_image">
              <img class src="../../assets/images/Group4.svg" alt="location icon" />
              <p class="text-2xl capitalize ml-2">south africa</p>
            </div>
            <p
              class="weather-body_locations-temp_card-details_name_degree text-left text-4xl capitalize font-medium"
            >
              29
              <sup>o</sup>
            </p>
            <p
              class="text-left capitalize font-medium weather-body_locations-temp_card-details_name_wind"
            >
              Humidity 28%
              <span>|</span> wind 26 km/h
            </p>
          </div>
        </div>
        <div class="weather-body_locations-temp_card-img w-40">
          <img src="../../assets/images/Group6.svg" class="m-auto" />
          <div
            class="weather-body_locations-temp_card-img_icon rounded-full h-20 w-20 flex items-center justify-center bg-white p-3 ml-auto"
          >
            <img src="../../assets/images/rain.svg" alt="temprature icon" />
          </div>
        </div>
      </div>
    </div>
    <!--start bottom card-->
    <div class="weather-body_locations-temp_bottom-content">
      <div class="rounded-lg card weather-body_locations-temp_cards mb-10" @click="openPopup()">
        <div
          class="weather-body_locations-temp_bottom-content_card-details text-4xl capitalize font-medium flex items-center justify-center"
        >
          <h3 class="text-3xl capitalize text-center m-auto">add more locations</h3>
        </div>
      </div>
    </div>
    <div id="popup">
      <div class="popup flex items-center justify-center p-2">
        <div class="popup_form-body p-5 container">
          <div class="popup_form-body_header">
            <h3 class="text-3xl capitalize">Add City</h3>
          </div>
          <div class="popup_form-body_content">
            <form class="popup_form-body_content_form">
              <input class="p-3 grid grid-cols-1 my-3" type="text" placeholder="city name" />
              <input class="p-3 grid grid-cols-1 my-3" type="text" placeholder="lattiude" />
              <input class="p-3 grid grid-cols-1 my-3" type="text" placeholder="longttude" />
            </form>
          </div>
          <div class="popup_form-body_footer text-right">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            >Add</button>
            <button
              @click="closePopup()"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./countryForecating";
</style>

<script>
export default {
  name: "countryForecating",
  methods: {
    closePopup() {
      let popup = document.getElementById("popup");
      popup.style.display = "none";
    },
    openPopup() {
      let popup = document.getElementById("popup");
      popup.style.display = "block";
    }
  }
};
</script>
