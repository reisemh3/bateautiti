<!-- eslint-disable prettier/prettier -->
<template>
    <div class="bg-indigo-900 relative overflow-hidden h-screen">
        <img src="@/assets/404.png" class="absolute h-full w-full object-cover" />
        <div class="inset-0 bg-black opacity-25 absolute"></div>
        <div class="center">
            <h1>
                <span>404</span>
                <span>404</span>
                <span>404</span>
            </h1>
        </div>
        <br />
        <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
            <div class="w-full font-mono flex flex-col items-center relative z-10">
                <h2 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">You are all alone here</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NotFound',
    components: {},
})
</script>

<style>
.home {}

.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: prespective(1000px) translate(-50%, -50%);
    transform: skewY(15deg);
    transition: 0.5s;
}

.center:hover {
    transform: prespective(1000px) translate(-50%, -50%);
    transform: skewY(0deg);
}

.center h1 span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 12em;
    color: #fff;
    transform-style: preserve-3d;
    transition: 0.8s;
}

.center h1 span:nth-child(1) {
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
}

.center h1 span:nth-child(2) {
    color: #5e17eb;
    transform: translate(-50%, -50%) skewX(-60deg);
    left: -38px;
    clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%);
}

.center h1 span:nth-child(3) {
    transform: translate(-50%, -50%) skewY(0deg);
    left: -76px;
    clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
}

.center:hover h1 span:nth-child(2),
.center:hover h1 span:nth-child(3) {
    transform: translate(-50%, -50%) skewX(0deg);
    left: 0;
    color: #fff;
}

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
