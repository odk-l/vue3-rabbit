import request from '@/utils/http'
//封装购物车相关接口
export const insertCartAPI = ({ skuId, count }: any) => {
    return request({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }

    })
}
export const findNewCartListAPI = () => {
    return request({
        url: '/member/cart'
    })
}
export const delCartAPI = (ids: any) => {
    return request({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}
export const mergeCartAPI = ({ skuId, selected, count }: any) => {
    return request({
        url: '/member/cart/merge',
        method: 'POST',
        data: {
            skuId,
            selected,
            count
        }
    })
}