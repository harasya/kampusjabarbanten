import type { IBanner } from "~/types/banner"

export const useBannerStore = defineStore('Banner', () => {
    const items = ref<IBanner[]>([] as IBanner[])
    const isLoading = ref(true)
    const config = useRuntimeConfig()

    const get = async (position: string) => {
        const { data, error } = await useApi<{data: IBanner[]}>('/api-campus/open/banner/all', {
            params: {
                position
            }
        })

        if (error.value) {
            isLoading.value = false
            console.error('Failed to fetch products:', error.value);
        } else {
            isLoading.value = false

            items.value = data.value?.data?.map((item) => {
                return {
                    ...item,
                    image: `${config.public.apiBaseUrl}/${item.image}`
                }
            }) as IBanner[]
        }
    }

    return { items, get, isLoading }
})