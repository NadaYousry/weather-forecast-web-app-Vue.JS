<template>
  <div class="weather-body_locations-temp">
    <div class="weather-body_locations-temp_top-content p-4" v-if="citiesCard.length >0">
      <div
        class="rounded-lg flex items-center card weather-body_locations-temp_cards mb-10"
        v-for="(city,index) in citiesCard"
        :key="index"
      >
        <div
          class="px-6 py-4 weather-body_locations-temp_card-details text-left md:text-xl lg:text-4xl text-2xl capitalize capitalize font-medium flex items-center"
        >
          <div
            class="weather-body_locations-temp_card-details_name text-left pl-2 w-60 md:text-xl lg:text-4xl text-2xl"
          >
            <div class="flex weather-body_locations-temp_card-details_image">
              <img class src="../../assets/images/Group4.svg" alt="location icon" />
              <p class="text-2xl capitalize ml-2">{{city.city}}</p>
            </div>
            <p
              class="weather-body_locations-temp_card-details_name_degree text-left md:text-xl lg:text-4xl text-2xl capitalize capitalize font-medium"
            >
              {{city.temp}}
              <sup>o</sup>
            </p>
            <p
              class="text-left capitalize font-medium weather-body_locations-temp_card-details_name_wind"
            >
              Humidity {{city.humidity}}%
              <span>|</span>
              wind {{city.wind}} km/h
            </p>
          </div>
        </div>
        <div class="weather-body_locations-temp_card-img w-40">
          <img src="../../assets/images/Group6.svg" class="m-auto" />
          <div
            class="weather-body_locations-temp_card-img_icon rounded-full h-20 w-20 flex items-center justify-center bg-white p-3 ml-auto"
          >
            <img
              v-if="city.weather_code =='cloudy'"
              src="../../assets/images/lightning.svg"
              alt="temprature icon"
            />
            <img
              v-if="city.weather_code !=='cloudy'"
              src="../../assets/images/sun.svg"
              alt="temprature icon"
            />
          </div>
        </div>
      </div>
    </div>
    <!--start bottom card-->
    <div
      class="weather-body_locations-temp_bottom-content card px-4 flex items-center justify-center"
      @click="openPopup()"
    >
      <div class="rounded-lg card weather-body_locations-temp_cards">
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
              <input
                class="p-3 grid grid-cols-1 my-3"
                v-model="locationData.city"
                type="text"
                placeholder="city name"
              />
              <input
                class="p-3 grid grid-cols-1 my-3"
                v-model="locationData.latitude"
                type="text"
                placeholder="latitude"
              />
              <input
                class="p-3 grid grid-cols-1 my-3"
                v-model="locationData.longitude"
                type="text"
                placeholder="longitude"
              />
            </form>
          </div>
          <div class="popup_form-body_footer text-right">
            <button
              class="text-white font-bold py-2 px-4 rounded m-2 add-btn"
              @click="onSubmitLocation()"
              :disabled="locationData.longitude==='' || locationData.latitude==='' || locationData.city===''"
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
  data() {
    return {
      locationData: {
        longitude: "",
        latitude: "",
        city: ""
      },
      citiesCard: []
    };
  },
  created() {
    // this.reverseGeocodingWithGoogle();
    // this.getCurrentCountry();
  },
  methods: {
    closePopup() {
      let popup = document.getElementById("popup");
      popup.style.display = "none";

      this.locationData.longitude = "";
      this.locationData.latitude = "";
      this.locationData.city = "";
    },
    openPopup() {
      let popup = document.getElementById("popup");
      popup.style.display = "block";
    },
    onSubmitLocation() {
      // this.submitted = true;
      console.log(this.locationData + "clicked");
      console.log(this.locationData.city + "city");
      console.log(this.locationData.latitude + "latitude");
      console.log(this.locationData.longitude + "longitude");
      let url = new URL("https://api.climacell.co/v3/weather/forecast/daily");
      let params = [
        // ["name", this.locationData.city],
        ["lat", this.locationData.latitude],
        ["lon", this.locationData.longitude],
        ["fields", "temp,humidity,wind_speed,weather_code"],
        ["unit_system", "si"],
        ["apikey", "Fzv4gnqA7m6bmQlmlgZD2IU200DYwY03"]
      ];
      url.search = new URLSearchParams(params).toString();

      setTimeout(() => {
        this.$http.get(url).then(result => {
          console.log(result);
          console.log(result.data);
          let cityCardObj = {
            city: this.locationData.city,
            humidity: result.data[0].humidity[0].min.value,
            wind: result.data[0].wind_speed[0].min.value,
            temp: result.data[0].temp[0].min.value,
            weather_code: result.data[0].weather_code.value
          };
          this.citiesCard.push(cityCardObj);
          console.log(this.citiesCard);
          this.closePopup();
        });
      }, 1000);
    }
  }
};
</script>
