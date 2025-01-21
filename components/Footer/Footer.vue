<template>
    <footer class="flex items-center justify-between container my-46 md:flex-row-reverse flex-col">
        <div class="copyright mb-6">
            Copyright &copy; {{ currentYear }} Kampus Jabar Banten.
        </div>
        <img src="~/assets/images/logo.svg" alt="footer" />
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style lang="postcss" scoped>
.copyright {
    font-size: 14px;
    color: #848B9D;
    line-height: 26px;
}
</style>