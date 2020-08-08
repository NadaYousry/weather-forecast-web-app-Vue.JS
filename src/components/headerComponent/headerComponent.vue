<template>
    <header class="weather-header h-screen p-10">
        <div class=" rounded">
            <nav class="weather-header_navbar">
                <div class="weather-header_navbar_country flex">
                    <div class="weather-header_navbar_country_img flex-5">
                        <img
                            class=""
                            src="../../assets/images/Group4.svg"
                            alt="location icon"
                        />
                    </div>
                    <div
                        class="weather-header_navbar_country_name text-left pl-5 flex2"
                    >
                        <p>Egypt</p>
                    </div>
                </div>
                <div class="weather-header_navbar_degree flex justify-end	">
                    <p>F</p>
                    <span style="font-size:45px">|</span>
                    <p class="active">C<sup>o</sup></p>
                </div>
            </nav>
            <section class="weather-header_temp ">
                <div
                    class="weather-header_temp_details w-1/5 flex p-5 rounded-r-full items-center"
                >
                    <div class="weather-header_temp_details_text">
                        <h2 class="text-4xl text-white  text-left">
                            33 <sup>o</sup>
                        </h2>
                        <p class=" text-left">{{dateToday}}</p>
                        <p class=" text-left">{{timestamp}}</p>
                    </div>
                    <div
                        class="weather-header_temp_details_icon rounded-full h-20 w-20 flex items-center justify-center bg-white p-3 ml-auto"
                    >
                        <img
                            src="../../assets/images/sunset.svg"
                            alt="temprature icon"
                        />
                    </div>
                </div>
                <div class="rotated"></div>
            </section>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "./headerComponent";
</style>

<script>
export default {
    name: "headerComponent",
    data(){ 
        return{
            title:'',
            location:'',
            description :'',
            timestamp: "",
            dateToday:""
        }
    },
    created() {
        setInterval(this.getNow, 1000);
    },
    methods: {
        getNow: function() {
            const today = new Date();
            // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let hour =today.getHours() ;
            let minute = today.getMinutes();
            let prepend = hour >=12 ?"PM":"AM"
            hour =(hour >12) ? hour-12 :hour;
            // hour = (hour)
            // minute = (minute)
            let time = hour + ":" + minute;
            this.timestamp = time +" "+ prepend;
            let month =today.getMonth();
            let months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
            this.dateToday = months[month] +" , "+today.getDate();
        }
    }
};
</script>
