//封装购物车模块
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'
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
    //是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    //计算属性
    //1,总的数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    //2,总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    //3,已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    //4,已选择价格
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    //2,定义action
    const updateNewList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.data.result
    }
    const addCart = async (goods: any) => {
        const { skuId, count } = goods
        if (isLogin) {
            //登录之后的加入购物车逻辑
            await insertCartAPI({ skuId, count })
            updateNewList()

        } else {
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                item.count++;
            } else {
                cartList.value.push(goods)
            }
        }
    }
    const delCart = async (skuId: any) => {
        if (isLogin.value) {
            await delCartAPI([skuId])
            updateNewList()
        } else {
            const idx = cartList.value.findIndex((item) => { return skuId === item.skuId })
            cartList.value.splice(idx, 1)
        }
    }
    //清除购物车
    const clearCart = () => {
        cartList.value = []
    }
    //单选功能
    //通过skuId找到要修改的那一项,然后把它的selected修改为传过来的selected
    const singleCheck = (skuId: any, selected: any) => {
        const item = cartList.value.find(item => item.skuId === skuId)
        if (item) {
            item.selected = selected
        }
    }
    //全选功能
    const allCheck = (selected: any) => {
        //把cartList中的每一项selected都设置为全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }
    return { addCart, cartList, delCart, allCount, allPrice, singleCheck, isAll, allCheck, selectedCount, selectedPrice, clearCart, updateNewList }
}, {
    persist: true
})