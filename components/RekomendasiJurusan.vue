<template>
    <div class="content-rekomendasi-jurusan">
        <BaseTitle title="Rekomendasi Jurusan/Prodi" subtitle="Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten" />

        <div class="list-jurusan grid grid-cols-2 lg:grid-cols-4">
            <BaseItemJurusan v-for="item in itemJurusan" :key="item.id" :item="item" />
        </div>

        <BaseShowMore :is-loading="isLoading" @on-load="onLoad">
            Jurusan Lainnya (+{{ totalMore }})
        </BaseShowMore>
        <img class="dot" src="~/assets/images/dot.svg" />
    </div>
</template>

<script setup lang="ts">
import { useJurusanStore } from '~/store/jurusan';

const { items: itemJurusan, isLoading, totalMore } = storeToRefs(useJurusanStore())
const { get: getJurusan, onLoad } = useJurusanStore()

onMounted(async () => {
    await nextTick()
    await getJurusan()
})
</script>

<style lang="postcss" scoped>
.content-rekomendasi-jurusan {
    position: relative;
    margin-top: 119px;
    .content-title {
        text-align: center;
    }
    .list-jurusan {
        gap: 30px;
        margin-top: 36px;
    }
}

img.dot {
    top: 0;
    left: -50px;
    position: absolute;
    z-index: -10;
}
</style>