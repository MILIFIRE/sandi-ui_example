<script setup lang="ts">
import { ref } from "vue";
import Box from "./components/Box.vue"
import Floor from "./components/Floor.vue"
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
.slider-demo-block {
    display: flex;
    align-items: center;
}

.slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
}

.slider-demo-block .demonstration {
    font-size: 14px;
    color: var(--el-text-color-secondary);
    line-height: 44px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0;
}

.slider-demo-block .demonstration+.el-slider {
    flex: 0 0 70%;
}
</style>