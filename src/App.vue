<template>
    <div id="app" class="weather">
        <div class="container m-auto mt-5">
            <headerComponent />
            <main class="weather-body pt-3 w-5/6 m-auto">
                <div class="grid grid-cols-3 gap-4">
                    <div class="">
                        <daysForecasting />
                    </div>

                    <!--start clock-->
                    <div class=" weather-body_clock">
                        <clockComponent />
                    </div>

                    <!-- start third column country weather-->
                    <div class=" weather-body_locations-temp">
                        <countryForecating />
                    </div>
                </div>
            </main>
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
    }
};
</script>
