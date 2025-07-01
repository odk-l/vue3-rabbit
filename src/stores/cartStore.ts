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
        selected?: boolean
    }
    const cartList = ref<CartItem[]>([])
    //2,定义action
    const addCart = (goods: any) => {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            item.count++;
        } else {
            cartList.value.push(goods)
        }
    }
    const delCart = (skuId: any) => {
        const idx = cartList.value.findIndex((item) => { skuId === item.skuId })
        cartList.value.splice(idx, 1)
    }
    //单选功能
    //通过skuId找到要修改的那一项,然后把它的selected修改为传过来的selected
    const singleCheck = (skuId: any, selected: any) => {
        const item = cartList.value.find(item => item.skuId === skuId)
        if (item) {
            item.selected = selected
        }
    }
    //是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    //全选功能
    const allCheck = (selected: any) => {
        //把cartList中的每一项selected都设置为全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }
    //计算属性
    //1,总的数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    //2,总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    //3,已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    //4,已选择价格
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    return { addCart, cartList, delCart, allCount, allPrice, singleCheck, isAll, allCheck, selectedCount, selectedPrice }
}, {
    persist: true
})