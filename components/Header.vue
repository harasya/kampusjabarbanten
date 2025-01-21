<template>
    <header class="header py-3 flex items-center justify-between">
        <div>
            <img src="~/assets/images/logo.svg" alt="logo">
        </div>
        <div class="flex lg:hidden">
            <Icon name="uil:search" class="pr-5" style="color: #0AA8C1" size="18"/>
            <Icon name="uil:bars" style="color: #0AA8C1" size="18" />
        </div>
        <div class="content-search-button hidden lg:!flex items-center">
            <div class="content-search flex items-center">
                <Icon name="uil:search" class="pr-5" style="color: #0AA8C1" size="18"/>
                <input type="text" placeholder="Cari kampus/prodi impian Anda disini..." class="py-2 px-3 outline-none">
                <BaseButton color="primary">Cari</BaseButton>
            </div>
            <div>
                <BaseButton class="mr-1" color="secondary" size="lg">Daftar</BaseButton>
                <BaseButton color="primary" size="lg">Login</BaseButton>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.content-search-button {
    flex: auto;
}
.content-search {
    border: 1px solid #0AA8C1;
    padding: 4px 4px 4px 23px;
    border-radius: 4px;
    width: 520px;
    margin: auto;
    input {
        border: none;
        width: 100%;
        outline: none;
    }
}
</style>