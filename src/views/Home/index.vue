<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
</template>

<script setup lang="ts">
import HomeCategory from './components/HomeCategory.vue';
import HomeBanner from './components/HomeBanner.vue';
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomePanel from './components/HomePanel.vue';

</script>

<style scoped></style>