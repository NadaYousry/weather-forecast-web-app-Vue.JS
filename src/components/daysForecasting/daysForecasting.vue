<template>
  <div class>
    <div class="weather-body_forecast-days-header">
      <h2 class="text-left text-4xl capitalize font-medium">
        3 days
        <span>forecast</span>
      </h2>
    </div>
    <div class="weather-body_forecast-days-content" v-for="day in threeDaysForecasting" :key="day">
      <div class="rounded-lg flex items-center forecast-card my-5 mb-10">
        <div class="px-6 py-4 weather-body_forecast-days-content_card-img">
          <img
            v-if="day.weatherCode ==='mostly_clear'"
            src="../../assets/images/rain.svg"
            class="w-100"
          />
          <img
            v-if="day.weatherCode !=='mostly_clear'"
            src="../../assets/images/sun.svg"
            class="w-100"
          />
        </div>
        <div
          class="p-4 weather-body_forecast-days-content_card-details text-left text-3xl capitalize font-medium"
        >
          <p class="inline-block">
            {{day.min}}
            <sup>o</sup>
          </p>
          <span>/</span>
          <p class="active inline-block">
            {{day.max}}
            <sup>o</sup>
          </p>
          <p class="text-lg date">
            {{day.observationDate}}
            <sup>st</sup>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./daysForecasting";
</style>

<script>
export default {
  name: "daysForecasting",
  props: ["lng", "lat"],
  data() {
    return {
      location: "",
      description: "",
      timestamp: "",
      dateToday: "",
      threeDaysForecasting: [
        {
          min: 0,
          max: 0,
          observationDate: 0,
          weatherCode: ""
        },
        {
          min: 0,
          max: 0,
          observationDate: 0,
          weatherCode: ""
        },
        {
          min: 0,
          max: 0,
          observationDate: 0,
          weatherCode: ""
        }
      ]
    };
  },
  created() {
    this.reverseGeocodingWithGoogle();
    // this.getCurrentCountry();
    // this.getNow();
  },
  methods: {
    reverseGeocodingWithGoogle() {
      setTimeout(() => {
        let url = new URL("https://api.climacell.co/v3/weather/forecast/daily");
        let params = [
          ["lat", this.lat],
          ["lon", this.lng],
          ["fields", "temp,humidity,wind_speed,weather_code"],
          ["unit_system", "si"],
          ["apikey", "Fzv4gnqA7m6bmQlmlgZD2IU200DYwY03"]
        ];
        url.search = new URLSearchParams(params).toString();
        fetch(url)
          .then(response => response.json())
          .then(json => {
            for (let i = 0; i <= 2; i++) {
              console.log(this.threeDaysForecasting[i].max);
              console.log(json[i].temp[0].min.value);

              this.threeDaysForecasting[i].min = json[i].temp[0].min.value;
              this.threeDaysForecasting[i].max = json[i].temp[1].max.value;
              this.threeDaysForecasting[i].weatherCode =
                json[i].temp[1].max.weather_code;
              let date = json[i].observation_time.value;
              let day = date.split("-")[2];
              let month = date.split("-")[1].slice(1);
              let months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ];
              console.log(date);
              console.log(day);
              console.log(month);
              this.threeDaysForecasting[i].observationDate =
                months[month] + " , " + day;
              console.log(this.observationDate);
            }
            console.log(this.threeDaysForecasting);
          });
      }, 1000);
    }
  }
};
</script>
