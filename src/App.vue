<template>
  <div id="app" class="weather">
    <div class="container m-auto mt-5">

      <header class="weather-header h-screen p-10">
        <div class=" rounded">
          <nav class="weather-header_navbar">
            <div class="weather-header_navbar_country flex">
              <div class="weather-header_navbar_country_img flex-5">
                  <img class="" src="./assets/images/Group4.svg" alt="location icon">
              </div>
              <div class="weather-header_navbar_country_name text-left pl-5 flex2">
                <p>Egypt</p>
              </div>
              
            </div>
            <div class="weather-header_navbar_degree flex justify-end	">
                <p>F</p> <span>|</span> <p class="active">C<sup>o</sup></p>
            </div>
          </nav>
          <section class="weather-header_temp ">
            <div class="weather-header_temp_details w-1/5 flex p-5 rounded-r-full items-center">
                <div class="weather-header_temp_details_text">
                  <h2 class="text-4xl text-white  text-left">33 <sup>o</sup></h2>
                  <p class=" text-left">August ,31st</p>
                  <p class=" text-left">5:00 <span>PM</span></p>
                </div>
                <div  class="weather-header_temp_details_icon rounded-full h-20 w-20 flex items-center justify-center bg-white p-3 ml-auto">
                  <img src="../src/assets/images/sunset.svg" alt="temprature icon">
                </div>
            </div>
          </section>
        </div>
      </header>
      <main class="weather-body pt-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="">
            <div class=" weather-body_forecast-days-header">
              <h2 class="text-left text-4xl capitalize font-medium">3 days <span>forecast</span></h2>
            </div>
            <div  class=" weather-body_forecast-days-content">
              <div class=" rounded-lg overflow-hidden flex items-center card my-5">
                <div class="px-6 py-4  weather-body_forecast-days-content_card-img ">
                    <img src="./assets/images/sun.svg" class="w-100">
                </div>
                <div class="px-6 py-4  weather-body_forecast-days-content_card-details text-left text-4xl capitalize font-medium">
                    <p class="inline-block">29<sup>o</sup></p><span> / </span><p class="active inline-block">25<sup>o</sup></p>
                    <p class=" text-lg date">september , 1st</p>
                </div>
              </div>
            </div>
          </div>
          <div class=" weather-body_clock">Clock here</div>
          <div class=" weather-body_locations-temp">
            <div class=" rounded-lg overflow-hidden flex items-center card my-5">
              <div class="px-6 py-4  weather-body_locations-temp_card-img ">
                  <img src="./assets/images/sun.svg" class="w-100">
              </div>
              <div class="px-6 py-4  weather-body_locations-temp_card-details text-left text-4xl capitalize font-medium">
                  <p class="inline-block">29<sup>o</sup></p><span> / </span><p class="active inline-block">25<sup>o</sup></p>
                  <p class=" text-lg date">september , 1st</p>
              </div>
            </div>
          </div>
      </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/app';
</style>