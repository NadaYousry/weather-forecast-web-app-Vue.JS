<template>
     <div class="clock">
      <div class="numbers">
        <div></div>
      </div>
      <div class="hand second" 
           :style="{ transform: 'rotate(' + second + 'deg)' }"></div>
      <div class="hand minute" :style="{ transform: 'rotate(' + minute + 'deg)' }"></div>
      <div class="hand hour" :style="{ transform: 'rotate(' + hour + 'deg)' }"></div>
    </div>
</template>

<style lang="scss" scoped>
@import "./clockComponent";
</style>

<script src="./clock.js"></script>
<script>
export default {
    name: "clockComponent",
    data() {
        return {
          minute: 0,
          second: 0,
          hour: 0,
        }
      },
      mounted() {
        const interval = setInterval(() => {
          const date = new Date();
          this.minute = date.getMinutes() * 6;
          this.second = date.getSeconds() * 6;
          this.hour = date.getHours() % 12 / 12 * 360 + (this.minute / 12);
        }, 1000);
      } 
};
</script>
