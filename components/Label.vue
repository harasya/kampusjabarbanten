<template>
    <div class="flex content-label items-center justify-between" :style="{ background: background }">
        <div class="content-label__item flex items-start sm:items-center w-full flex-col sm:flex-row">
            <div class="content-label__icon p-4 flex-none" :style="{ background: iconBackground }" >
                <Icon v-if="icon" :name="icon" :style="{ color: iconColor }" size="24" />
            </div>
            <div class="flex items-center justify-between w-full">
                <slot />
                <Icon name="material-symbols-light-arrow-right-alt-rounded" size="24" :style="{ color: iconBackground }" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        default: ''
    },
    iconBackground: {
        type: String,
        default: ''
    },
    iconColor: {
        type: String,
        default: ''
    },
    background: {
        type: String,
        default: ''
    },
})
</script>

<style lang="postcss" scoped>
.content-label {
    padding: 26px 28px;
    border-radius: 8px;
    font-weight: 600;
    .content-label__item {
        gap: 24px;
    }
    .content-label__icon {
        border-radius: 12px;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>