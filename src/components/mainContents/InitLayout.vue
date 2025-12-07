<template>
  <Header @open-login="isLoginVisible = true" />
  <main id="main-content">
    <router-view /> <!-- 路由页面 -->
  </main>
  <Footer />
  <LoginOverlay v-if="isLoginVisible" @close="isLoginVisible = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import LoginOverlay from '@/components/LoginOverlay.vue';

const isLoginVisible = ref(false);
</script>

<style scoped>
/* 可以放一些布局级样式 */
</style>