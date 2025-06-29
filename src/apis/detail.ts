import request from '@/utils/http'


export const getDetail = (id: string) => {
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}