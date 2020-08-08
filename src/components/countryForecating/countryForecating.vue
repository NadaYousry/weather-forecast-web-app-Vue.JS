<template>
    <div class="weather-body_locations-temp">
        <div class=" weather-body_locations-temp_top-content">
            <div
                class=" rounded-lg  flex items-center card weather-body_locations-temp_cards mb-10"
            >
                <div
                    class="px-6 py-4  weather-body_locations-temp_card-details text-left text-4xl capitalize font-medium flex items-center"
                >
                    <div
                        class="weather-body_locations-temp_card-details_name text-left pl-2 w-60"
                    >
                        <div
                            class="flex weather-body_locations-temp_card-details_image "
                        >
                            <img
                                class=""
                                src="../../assets/images/Group4.svg"
                                alt="location icon"
                            />
                            <p class=" text-2xl capitalize ml-2">
                                south africa
                            </p>
                        </div>
                        <p
                            class="weather-body_locations-temp_card-details_name_degree text-left text-4xl capitalize font-medium"
                        >
                            29<sup>o</sup>
                        </p>
                        <p
                            class="text-left capitalize font-medium weather-body_locations-temp_card-details_name_wind"
                        >
                            Humidity 28% <span>|</span> wind 26 km/h
                        </p>
                    </div>
                </div>
                <div class="  weather-body_locations-temp_card-img w-40">
                    <img src="../../assets/images/Group6.svg" class=" m-auto" />
                    <div
                        class="weather-body_locations-temp_card-img_icon rounded-full h-20 w-20 flex items-center justify-center bg-white p-3 ml-auto"
                    >
                        <img
                            src="../../assets/images/lightning.svg"
                            alt="temprature icon"
                        />
                    </div>
                </div>
            </div>
            <div
                class=" rounded-lg  flex items-center card weather-body_locations-temp_cards mb-10"
            >
                <div
                    class="px-6 py-4  weather-body_locations-temp_card-details text-left text-4xl capitalize font-medium flex items-center"
                >
                    <div
                        class="weather-body_locations-temp_card-details_name text-left pl-2 w-60"
                    >
                        <div
                            class="flex weather-body_locations-temp_card-details_image "
                        >
                            <img
                                class=""
                                src="../../assets/images/Group4.svg"
                                alt="location icon"
                            />
                            <p class=" text-2xl capitalize ml-2">
                                south africa
                            </p>
                        </div>
                        <p
                            class="weather-body_locations-temp_card-details_name_degree text-left text-4xl capitalize font-medium"
                        >
                            29<sup>o</sup>
                        </p>
                        <p
                            class="text-left capitalize font-medium weather-body_locations-temp_card-details_name_wind"
                        >
                            Humidity 28% <span>|</span> wind 26 km/h
                        </p>
                    </div>
                </div>
                <div class="  weather-body_locations-temp_card-img w-40">
                    <img src="../../assets/images/Group6.svg" class=" m-auto" />
                    <div
                        class="weather-body_locations-temp_card-img_icon rounded-full h-20 w-20 flex items-center justify-center bg-white p-3 ml-auto"
                    >
                        <img
                            src="../../assets/images/rain.svg"
                            alt="temprature icon"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!--start bottom card-->
        <div class=" weather-body_locations-temp_bottom-content">
            <div
                class="rounded-lg card weather-body_locations-temp_cards mb-10 "
            >
                <div
                    class=" weather-body_locations-temp_bottom-content_card-details text-4xl capitalize font-medium flex items-center justify-center"
                >
                    <h3 class=" text-3xl capitalize text-center m-auto">
                        add more locations
                    </h3>
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
    name: "countryForecating"
};
</script>
