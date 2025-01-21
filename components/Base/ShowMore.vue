<template>
    <div class="show-more">
        <hr/>
        <div class="show-more__button">
            <BaseButton color="secondary" size="lg" @click="emit('onLoad')">
                <template v-if="isLoading">
                    Loading...
                </template>
                <template v-else>
                    <slot />
                </template>
            </BaseButton>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    isLoading: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['onLoad'])
</script>

<style lang="postcss" scoped>
.show-more {
    position: relative;
    text-align: center;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    hr {
        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;
    }
    &__button {
        padding: 16px;
        background-color: #fff;
        .btn {
            width: 280px;
        }
    }
}
</style>