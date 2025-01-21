<template>
    <div class="bg-gradation tentang-kami hidden lg:!block">
        <div class="grid grid-cols-2 gap-12">
            <div>
                <div class="title">Tentang Kami</div>
                <div class="description">
                    Membantu siswa mencari dan membandingkan informasi perguruan tinggi di Jawa Barat dan Banten agar bisa meraih impian lewat kampus idaman dan jurusan yang sesuai dengan passion.
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div>
                    <div class="title">
                        Layanan
                    </div>
                    <ul>
                        <li>Daftar Kampus</li>
                        <li>Daftar Prodi/jurusan</li>
                        <li>Artikel/Berita</li>
                    </ul>
                </div>
                <div>
                    <div class="title">
                        Kontak Kami
                    </div>
                    <ul>
                        <li>
                            <Icon name="material-symbols-mail" size="20" />
                            email@company.com
                        </li>
                        <li>
                            <Icon name="material-symbols-phone-in-talk-sharp" size="20" />
                            +62 32984343234
                        </li>
                        <li>
                            <BaseButton color="secondary" class="btn-icon">
                                <img src="~/assets/images/playstore.svg" alt="icon playstore" />
                                Download Aplikasi
                            </BaseButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.tentang-kami {
    padding: 39px 47px;
    color: #fff;
    border-radius: 12px;
    .title {
        font-size: 18px;
        font-weight: 800;
        margin-bottom: 30px;
    }
    .description {
        line-height: 26px;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            margin-bottom: 24px;
            span, img {
                vertical-align: middle;
            }
        }
    }
}
</style>