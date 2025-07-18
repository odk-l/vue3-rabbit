import httpInstance from '@/utils/http'

export function getBannerAPI(params = { distributionSite: '1' }) {
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}

export function findNewAPI() {
    return httpInstance({
        url: '/home/new'
    })
}

export function findHotAPI() {
    return httpInstance({
        url: '/home/hot'
    })
}
export function getGoodsAPI() {
    return httpInstance({
        url: '/home/goods'
    })
}
