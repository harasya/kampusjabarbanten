import type { Meta } from "~/types/api"
import type { ICampus, ICampusParam } from "~/types/campus"
import { debounce } from 'radash';

export const useCampusStore = defineStore('Campus', () => {
    const items = ref<ICampus[]>([] as ICampus[])
    const isLoading = ref(false)
    const config = useRuntimeConfig()
    const defaultParams = shallowRef<ICampusParam>({
        perPage: 8,
        page: 1,
        full: true
    })
    const meta = ref<Meta>({} as Meta)
    const totalMore = computed<number>(() => meta.value.totalItems - items.value.length)

    const getDebounced = debounce({ delay: 300 }, async () => {
        await get();
    });

    const onLoad = async () => {
        defaultParams.value.page = meta.value.currentPage + 1;
        await getDebounced();
    };


    const get = async () => {
        if (isLoading.value) return;
        isLoading.value = true

        try {
            const { data, error } = await useApi<{meta: Meta, data: ICampus[]}>('/api-campus/open/college/all', {
                params: defaultParams.value,
            })

            if (error.value) {
                isLoading.value = false
                console.error('Failed to fetch products:', error.value);
            } else {
                isLoading.value = false
                if(data.value?.data?.length) {
                    meta.value = data.value?.meta as Meta
                    items.value.push(...data.value?.data?.map((item) => {
                        return {
                            ...item,
                            logo: `${config.public.apiBaseUrl}/${item.logo}`,
                            thumbnail: `${config.public.apiBaseUrl}/${item.thumbnail}`,
                            min_registration_fee: item.min_registration_fee.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            }),
                            accreditation: item.accreditation.charAt(0)
                        }
                    }) as ICampus[])
                }
            }
        } catch (err) {
            console.error('Error during fetch:', err);
        } finally {
            isLoading.value = false;
            console.log('isLoading reset to false');
        }
    }

    return { isLoading, get, items, defaultParams, onLoad, totalMore }
})
