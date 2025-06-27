import request from '@/utils/http'

export function getCategoryAPI(id: string) {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}