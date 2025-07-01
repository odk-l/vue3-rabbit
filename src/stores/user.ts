import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const getUserInfo = async ({ account, password }) => {
        try {
            const res = await loginAPI({ account, password })
            if (res.data && res.data.result) {
                userInfo.value = res.data.result
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
    }
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
},)
