<template>
    <div class="item-kampus">
        <div class="content-image lg:!h-64 h-48">
            <img v-if="item.thumbnail" :src="item.thumbnail" alt="image kampus" />
            <img v-else src="~/assets/images/image-empty.jpg" alt="image kampus" />
        </div>

        <div class="content-kampus p-3 shadow-md lg:shadow-none">
            <div class="btn-label">
                <BaseButton v-if="item.is_campus_partner" color="blue" size="sm" fill disabled class="mb-2 partner">
                    <span>
                        Kampus Partner
                    </span>
                    <div class="append">
                        <Icon name="uil:check" size="18" />
                    </div>
                </BaseButton>
                <BaseButton v-if="item.accreditation" color="danger" size="sm" fill disabled class="akreditasi">
                    <span>Terakreditasi</span>
                    <div class="append">
                        {{ item.accreditation }}
                    </div>
                </BaseButton>
            </div>
            <div class="logo-kampus">
                <img v-if="item.logo" :src="item.logo" alt="logo kampus"/>
                <img v-else src="~/assets/images/image-empty.jpg" alt="logo kampus"/>
            </div>

            <div class="content-detail mt-6 lg:p-5">
                <div class="name">
                    {{ item.name }}
                </div>
                <div class="location">
                    <Icon name="uil:location-point" class="flex-none" size="18" />
                    <span>
                        {{ item.address }}
                    </span>
                </div>
                <div class="status">
                    <Icon name="ic-baseline-minus" size="18" />
                    <span>
                        {{ item.education_type}}
                    </span>
                </div>
                <div class="price-detail">
                    <div class="label-price">
                        Uang masuk mulai dari
                    </div>
                    <div class="price">
                        {{ item.min_registration_fee }}
                    </div>
                </div>
                <BaseButton color="pendaftaran" fill class="mt-3 mx-auto flex items-center">
                    <Icon name="zondicons-network" size="18" class="mr-2" />
                    <span>
                        Pendaftaran Online
                    </span>
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>

<style lang="postcss" scoped>
.item-kampus {
    position: relative;
    .content-image {
        position: absolute;
        z-index: -1;
        left: 0;
        right: 0;
        img {
            border-radius: 8px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .content-kampus {
        border-radius: 8px;

        .btn-label {
            .btn {
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 2px 2px 2px 10px;
            }
        }
        .append {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .partner {
            .append {
                background-color: #5471ED;
            }
        }
        .akreditasi {
            .append {
                background-color: #F35577;
            }
        }
        .logo-kampus {
            width: 48px;
            height: 48px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            margin: 34px 8px 8px 0;
            padding: 12px;
            img {
                width: 100%;
            }
        }
    }
    .content-detail {
        border-radius: 8px;
        @media (min-width: 1024px) {
            background-color: #fff;
        }
        .name {
            margin-bottom: 8px;
        }
        .location {
            color: #3A5AE3;
            margin-bottom: 8px;
            display: flex;
            align-items: start;
            gap: 8px;
        }
        .status {
            color: #F4933A;
            font-weight: 600;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .price-detail {
            .label-price {
                color: #7E8CA0;
                font-size: 12px;
                margin-bottom: 2px;
            }
            .price {
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
}
</style>