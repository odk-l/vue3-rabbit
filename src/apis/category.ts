import request from '@/utils/http'

export function getCategoryAPI(id: string) {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}

export function getCategoryFilterAPI(id: string) {
    return request({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

export const getSubCategoryAPI = (data) => {
    return request({
        url: '/category/goods/temporary',
        method: 'POST',
        data
    })
}