<template>
    <div class="banner-slider">
        <Carousel v-bind="configSlider">
            <template v-if="isLoading">
                <Slide v-for="image in 5" :key="image">
                    <img src="~/assets/images/image-empty.jpg" alt="image" />
                </Slide>
            </template>
            <template v-else>
                <Slide v-for="image in itemBanners" :key="image.id">
                    <img :src="image.image" alt="image" />
                </Slide>
            </template>

            <template #addons>
                <!-- <Navigation /> -->
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import { useBannerStore } from '~/store/banner';

const { items: itemBanners, isLoading } = storeToRefs(useBannerStore())
const { get: getAllBanner } = useBannerStore()


const configSlider = computed(() => {
    return {
        height: isLoading.value ? 300 : 'auto',
        itemsToShow: 2,
        gap: 5,
        wrapAround: true,
    }
});


onMounted(async () => {
    await nextTick()
    await getAllBanner('home-banner')
})
</script>

<style lang="postcss" scoped>
:deep() img {
  border-radius: 8px;
  width: 100%;
}

.banner-slider {
    section {
        &.carousel {
            &.is-ltr {
                &.is-effect-slide {
                    --vc-slide-gap: 30px !important;
                }
            }
        }
    }
}

.carousel__slide {
    opacity: 0.5;

    &.carousel__slide--active {
        opacity: 1;
    }
}

:deep() .carousel__pagination {
    margin-top: 10px;
    top: 100%;
    .carousel__pagination-item {
        button {
            border-radius: 7px;
            height: 12px;
            width: 12px;
            background-color: #D4E0E2;
            &.carousel__pagination-button--active {
                background-color: #0AA8C1;
                width: 24px;
            }
        }
    }
}
</style>