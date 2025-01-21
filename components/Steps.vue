<template>
    <div class="steps-container grid lg:!flex grid-cols-2 bg-gradation">
        <div class="steps-item" v-for="item in items" :key="item.id">
            <div class="steps-item-content">
                    <div class="steps-item-icon">
                        {{ item.id }}
                    </div>
                    <div class="steps-item-title">
                        <h3>{{ item.title }}</h3>
                        <p class="hidden md:!block">{{ item.description }}</p>
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const items = ref([
    {
        id: 1,
        title: 'Cari Kampus & Prodi',
        description: 'Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.',
    },
    {
        id: 2,
        title: 'Bandingkan',
        description: 'Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.',
    },
    {
        id: 3,
        title: 'Uji Potensi',
        description: 'Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.',
    },
    {
        id: 4,
        title: 'Daftar',
        description: 'Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.',
    }
])
</script>

<style lang="postcss" scoped>
.steps-container {
    border-radius: 10px;
    padding: 39px 47px;
    color: #fff;
    gap: 32px;
    .steps-item {
        border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    .steps-item-content {
        display: flex;
        align-items: start;
        gap: 15px;
        padding-left: 24px;
        .steps-item-icon {
            width: 36px;
            height: 36px;
            background-color: rgba(59, 215, 240, 1);
            border-radius: 50%;
            padding: 0;
            flex: none;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
        }
        .steps-item-title {
            h3 {
                margin-top: 8px;
                margin-bottom: 8px;
            }
            p {
                font-size: 12px;
                line-height: 20px;
            }
        }
    }
}
</style>