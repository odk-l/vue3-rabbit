<script setup>
import { useCategoryStore } from '@/stores/category';
const categoryStore = useCategoryStore()

</script>
<template>
    <div class="home-category">
        <ul class="menu">
            <li v-for="item in categoryStore.categoryList" :key="item.id">
                <RouterLink to="/">{{ item.name }}</RouterLink>
                <RouterLink v-for="i in item.children.slice(0, 2)" :key="i" to="/">{{ i.name }}</RouterLink>

                <!-- 弹层 layer -->
                <div class="layer">
                    <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
                    <ul>
                        <li v-for="i in item.goods" :key="i.id">
                            <RouterLink to="/">
                                <img :src="i.picture" alt="" />
                                <div class="info">
                                    <p class="name ellipsis-2">{{ i.name }}</p>
                                    <p class="desc ellipsis">{{ i.desc }}</p>
                                    <p class="price"><i>¥</i>{{ i.price }}</p>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang='scss'>
.home-category {
    width: 250px;
    height: 500px;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    z-index: 99;
}

.home-category .menu li {
    padding-left: 40px;
    height: 55px;
    line-height: 55px;
}

.home-category .menu li:hover {
    background: var(--xtxColor);
    /* 假设 $xtxColor 是一个 CSS 变量 */
}

.home-category .menu li a {
    margin-right: 4px;
    color: #fff;
}

.home-category .menu li a:first-child {
    font-size: 16px;
}

.home-category .menu li .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
}

.home-category .menu li .layer h4 {
    font-size: 20px;
    font-weight: normal;
    line-height: 80px;
}

.home-category .menu li .layer h4 small {
    font-size: 16px;
    color: #666;
}

.home-category .menu li .layer ul {
    display: flex;
    flex-wrap: wrap;
}

.home-category .menu li .layer ul li {
    width: 310px;
    height: 120px;
    margin-right: 15px;
    margin-bottom: 15px;
    border: 1px solid #eee;
    border-radius: 4px;
    background: #fff;
}

.home-category .menu li .layer ul li:nth-child(3n) {
    margin-right: 0;
}

.home-category .menu li .layer ul li a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 10px;
}

.home-category .menu li .layer ul li a:hover {
    background: #e3f9f4;
}

.home-category .menu li .layer ul li a img {
    width: 95px;
    height: 95px;
}

.home-category .menu li .layer ul li a .info {
    padding-left: 10px;
    line-height: 24px;
    overflow: hidden;
}

.home-category .menu li .layer ul li a .info .name {
    font-size: 16px;
    color: #666;
}

.home-category .menu li .layer ul li a .info .desc {
    color: #999;
}

.home-category .menu li .layer ul li a .info .price {
    font-size: 22px;
    color: var(--priceColor);
    /* 假设 $priceColor 是一个 CSS 变量 */
}

.home-category .menu li .layer ul li a .info .price i {
    font-size: 16px;
}

.home-category .menu li:hover .layer {
    display: block;
}
</style>