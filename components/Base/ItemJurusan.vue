<template>
    <div class="content-item-jurusan">
        <div class="content-item-jurusan__icon">
            <span class="dot" :style="{backgroundColor: item.color}"></span>
            <span class="label">
                {{ item.name }}
            </span>
        </div>
        <div class="content-item-jurusan__title">
            {{ item.major }}
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})

const color = computed(() => makeSoftColor(props.item.color, 0.9))
</script>

<style lang="postcss" scoped>
.content-item-jurusan {
    border-radius: 8px;
    padding: 25px;
    background-color: v-bind(color);
    &__icon {
        .label {
            font-size: 12px;
        }
    }
    &__title {
        font-weight: 600;
        margin-top: 15px;
    }
    .dot {
        width: 10px;
        height: 10px;
        display: inline-block;
        margin-right: 8px;
        background-color: v-bind('item.color');
    }
}
</style>