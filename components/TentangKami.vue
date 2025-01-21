<template>
    <div class="content-tentang-kami grid lg:grid-cols-2">
        <div>
            <BaseTitle title="Tentang Kami" />
            <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, suspendisse turpis sed convallis diam id. Vestibulum at eget pellentesque ullamcorper cras scelerisque arcu. Vel ornare bibendum porta faucibus. Eu semper eget rhoncus aenean eu eget purus. Euismod tincidunt posuere vulputate nec cras facilisis ac. Ultrices vulputate non ut adipiscing viverra.
            </div>
        </div>
        <div class="label-container grid grid-cols-2">
            <Label v-for="(label, key) in labels" :key="key" :icon="label.icon" :iconBackground="label.iconBackground" :iconColor="label.iconColor" :background="label.background" class="label-item max-w-162 sm:max-w-277">
                {{ label.title }}
            </Label>
        </div>
        <img class="dot" src="~/assets/images/dot.svg" />
    </div>
</template>

<script setup lang="ts">
const labels = ref([
    {
        icon: 'fluent-notepad-edit-16-regular',
        title: 'Kampus',
        iconBackground: '#FC871B',
        iconColor: '#fff',
        background: '#FFF5EC',
    },
    {
        icon: '',
        title: 'Jurusan',
        iconBackground: '#0AA8C1',
        iconColor: '#fff',
        background: '#E7FDFD',
    },
    {
        icon: '',
        title: 'Pendaftaran',
        iconBackground: '#E83158',
        iconColor: '#fff',
        background: '#FEF0F3',
    },
    {
        icon: 'icon-park-outline-notepad',
        title: 'Uji Potensi',
        iconBackground: '#3A5AE3',
        iconColor: '#fff',
        background: '#F2F5FF',
    }
])
</script>

<style lang="postcss" scoped>
.content-tentang-kami {
    position: relative;
    padding-top: 73px;
    gap: 49px;
    .content-title {
        margin-bottom: 29px;
    }
    .description {
        color: #3C3B52;
        line-height: 32px;
    }
    .label-container  {
        gap: 30px;
        z-index: 1;
    }

    img.dot {
        top: 0;
        right: 0;
        position: absolute;
    }
}
</style>