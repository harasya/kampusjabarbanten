import { debounce } from "radash"
import type { Meta } from "~/types/api"
import type { IJurusan, IJurusanParam } from "~/types/jurusan"

export const useJurusanStore = defineStore('Jurusan', () => {
    const items = ref<IJurusan[]>([] as IJurusan[])
    const isLoading = ref(false)
    const defaultParams = shallowRef<IJurusanParam>({
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

            const { data, error } = await useApi<{meta: Meta,data: IJurusan[]}>('/api-campus/open/studyprogram/all', {
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
                            color: getRandomColor(),
                        }
                    }) as IJurusan[])
                }
            }
        } catch (err) {
            console.error('Error during fetch:', err);
        } finally {
            isLoading.value = false;
            console.log('isLoading reset to false');
        }
    }

    return { isLoading, get, items, meta, totalMore, onLoad }
})
