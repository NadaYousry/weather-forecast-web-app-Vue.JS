<template>
    <div class="">
        <div class=" weather-body_forecast-days-header">
            <h2 class="text-left text-4xl capitalize font-medium">
                3 days <span>forecast</span>
            </h2>
        </div>
        <div class=" weather-body_forecast-days-content">
            <div
                class=" rounded-lg  flex items-center forecast-card my-5 mb-10"
            >
                <div
                    class="px-6 py-4  weather-body_forecast-days-content_card-img "
                >
                    <img src="../../assets/images/sun.svg" class="w-100" />
                </div>
                <div
                    class="p-4  weather-body_forecast-days-content_card-details text-left text-4xl capitalize font-medium"
                >
                    <p class="inline-block">29<sup>o</sup></p>
                    <span> / </span>
                    <p class="active inline-block">25<sup>o</sup></p>
                    <p class=" text-lg date">september , 1st</p>
                </div>
            </div>
        </div>
        <div class=" weather-body_forecast-days-content">
            <div
                class=" rounded-lg  flex items-center forecast-card my-5 mb-10"
            >
                <div
                    class="px-6 py-4  weather-body_forecast-days-content_card-img "
                >
                    <img src="../../assets/images/sun.svg" class="w-100" />
                </div>
                <div
                    class="p-4  weather-body_forecast-days-content_card-details text-left text-4xl capitalize font-medium"
                >
                    <p class="inline-block">29<sup>o</sup></p>
                    <span> / </span>
                    <p class="active inline-block">25<sup>o</sup></p>
                    <p class=" text-lg date">september , 1st</p>
                </div>
            </div>
        </div>
        <div class=" weather-body_forecast-days-content">
            <div
                class=" rounded-lg  flex items-center forecast-card my-5 mb-10"
            >
                <div
                    class="px-6 py-4  weather-body_forecast-days-content_card-img "
                >
                    <img src="../../assets/images/rain.svg" class="w-100" />
                </div>
                <div
                    class="p-4  weather-body_forecast-days-content_card-details text-left text-4xl capitalize font-medium"
                >
                    <p class="inline-block">29<sup>o</sup></p>
                    <span> / </span>
                    <p class="active inline-block">25<sup>o</sup></p>
                    <p class=" text-lg date">september , 1st</p>
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
    name: "daysForecasting"
};
</script>
