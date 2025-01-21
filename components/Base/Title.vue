<template>
    <div class="content-title">
        <div class="title">
            {{ title }}
        </div>
        <div class="subtitle">
            {{ subtitle }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
})
</script>

<style lang="postcss" scoped>
.title {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 12px;
}

.subtitle {
    font-size: 14px;
    font-weight: 400;
    color: #848B9D;
}
</style>