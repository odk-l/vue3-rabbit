import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { ref } from 'vue'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()
    const userInfo = ref({})
    const getUserInfo = async ({ account, password }: any) => {

        try {
            const res = await loginAPI({ account, password })
            if (res.data && res.data.result) {
                userInfo.value = res.data.result
                await mergeCartAPI(cartStore.cartList.map(item => {
                    return {
                        skuId: item.skuId,
                        selected: item.selected,
                        count: item.count
                    }
                }))
                cartStore.updateNewList()
            } else {
                console.error('响应数据格式不正确:', res.data)
            }


        } catch (error) {
            console.error('API 调用失败:', error)
        }
    }

    //退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()
    }
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
},)
