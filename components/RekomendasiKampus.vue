<template>
    <div class="content-rekomendasi-kampus">
        <BaseTitle title="Rekomendasi Kampus" subtitle="Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten" />

        <div class="list-campus grid grid-cols-2 lg:grid-cols-4">
            <BaseItemKampus v-for="item in itemCampus" :key="item.id" :item="item" />

        </div>
        <BaseShowMore :is-loading="isLoading" @on-load="onLoad">
            Kampus Lainnya (+{{ totalMore }})
        </BaseShowMore>
        <img class="dot" src="~/assets/images/dot.svg" />
    </div>
</template>

<script setup lang="ts">
import { useCampusStore } from '~/store/campus';

const { items: itemCampus, totalMore, isLoading } = storeToRefs(useCampusStore())
const { get: getCampus, onLoad } = useCampusStore()

onMounted(async () => {
    await nextTick()
    await getCampus()
})

</script>

<style lang="postcss" scoped>
.content-rekomendasi-kampus {
    position: relative;
    margin-top: 119px;
    .list-campus {
        gap: 30px;
        margin-top: 36px;
    }
    .content-title {
        text-align: center;
    }
}

img.dot {
    top: 0;
    left: -50px;
    position: absolute;
    z-index: -10;
}
</style>