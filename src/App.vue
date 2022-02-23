<template>
<img src="./static/home.png" alt="logo">
    <h1>Vue - TypeScript - Webpack</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
})
</script>

<style scoped>
img{
    display: block;
    margin: 100px auto 10px;
}
h1{
    width: 100%;
    text-align: center;
    margin-top: 10px;
}
</style>
