<script setup lang="ts">
import { ref } from "vue";
import Box from "./Box.vue"
import Floor from "./Floor.vue"
const lock = ref(false);
</script>

<template>
    <SDWebglRenderer @click="() => { lock = true }" :width="720" :height="360" :backgroundColor="0x1f63d1">
        <SDPointerLockControls :lock="lock" :unlockCallback="() => { lock = false }"  :options="{ junpHeight: 10 }"/>
        <SDScene>
            <SDPerspectiveCamera :positionZ="2" :positionY="0.5" />
            <Floor :positionX="-5" :positionZ="-5" />
            <Box :positionX="-5" :positionZ="-5" />
        </SDScene>
    </SDWebglRenderer>
</template>

<style>

</style>