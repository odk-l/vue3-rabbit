<template>
    <HomePanel title="人气推荐" subTitle="人气爆款,不容错过">

        <ul class="goods-list">
            <li v-for="item in hotList" :key="item.id">
                <RouterLink to="/">
                    <img v-img-lazy="item.picture" alt="" />
                    <p class="name">{{ item.name }}</p>
                    <p class="desc">¥{{ item.alt }}</p>
                </RouterLink>
            </li>
        </ul>
    </HomePanel>

</template>

<script setup lang="ts">
import HomePanel from './HomePanel.vue';
import { ref, onMounted } from 'vue';
import { findHotAPI } from '@/apis/home';
const hotList = ref<any[]>([])
const getHotList = async () => {
    const res = await findHotAPI()
    hotList.value = res.data.result
}
onMounted(() => getHotList())

</script>

<style scoped>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 426px;

    li {
        width: 306px;
        height: 406px;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
        }

        .desc {
            color: #999;
            font-size: 18px;
        }
    }
}
</style>