<template>
    <LayoutFix />
    <!-- <LayoutNav /> -->
    <LayoutHeader />
    <!-- 添加key,破环复用机制 强制销毁重建 -->
    <!-- <RouterView :key="$route.fullPath" /> -->
    <RouterView />
    <LayoutFooter />
</template>

<script setup lang="ts">
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
//import LayoutNav from './components/LayoutNav.vue';
import LayoutFix from './components/LayoutFix.vue';
//获取导航列表的action
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';
const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())
</script>

<style scoped></style>