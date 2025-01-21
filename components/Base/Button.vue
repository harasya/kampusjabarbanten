<template>
    <button :class="`btn btn-${size} btn-${color}`">
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps({
    size: {
        type: String,
        default: 'md'
    },
    color: {
        type: String,
        default: 'primary'
    }
})


</script>

<style scoped>

</style>