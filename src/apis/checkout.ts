import request from '@/utils/http'

export const getCheckInfoAPI = () => {
    return request({
        url: '/member/order/pre',
    })
}
export const createOrderAPI = (data: any) => {
    return request({
        url: '/member/order',
        method: 'POST',
        data
    })
}