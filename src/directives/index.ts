import { install } from "element-plus";
import { useIntersectionObserver } from '@vueuse/core'
import { shallowRef } from 'vue'
//定义懒加载插件
export const lazyPlugin = {
    install(app) {
        //懒加载指定逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el:指令绑定元素
                //binding: bingding.value 指令等于号后面绑定的表达式的值 图片url
                console.log(el, binding.value)
                const targetIsVisible = shallowRef(false)
                const { stop } = useIntersectionObserver(
                    el,
                    ([entry], observerElement) => {
                        targetIsVisible.value = entry?.isIntersecting || false
                        console.log(targetIsVisible.value)
                        if (targetIsVisible.value) {
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}