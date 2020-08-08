<template>
    <div class="main ">
        <div class="post-wrap">
            <div id="clock-body">
                <div id="center"></div>
                <div id="seconds"></div>
                <div id="minutes"></div>
                <div id="hours"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./clockComponent";
</style>

<script>
export default {
    name: "clockComponent"
};
</script>
