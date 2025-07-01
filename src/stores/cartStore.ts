//封装购物车模块
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useCartStore = defineStore('cart', () => {
    //1,定义state
    interface CartItem {
        skuId: number | string
        name: string
        price: number
        picture?: string
        count: number
        checked?: boolean
    }
    const cartList = ref<CartItem[]>([])
    //2,定义action
    const addCart = (goods) => {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            item.count++;
        } else {
            cartList.value.push(goods)
        }
    }
    const delCart = (skuId) => {
        const idx = cartList.value.findIndex((item) => { skuId === item.skuId })
        cartList.value.splice(idx, 1)
    }
    //计算属性
    //1,总的数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    //2,总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    return { addCart, cartList, delCart, allCount, allPrice }
}, {
    persist: true
})