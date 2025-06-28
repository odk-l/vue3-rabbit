import { getCategoryAPI } from '@/apis/category';
import { ref, onMounted, } from 'vue';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';

export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategoryData = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        console.log(res)
        categoryData.value = res.data.result
    }
    //初始化
    onMounted(() => getCategoryData())

    //目标:路由参数变化时,可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        //存在问题,因为调用函数是在路由变化之前调用,所以函数中的route.params.id拿不到最新值
        getCategoryData(to.params.id)
    })
    return { categoryData }
}