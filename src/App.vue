<template>
  <div id="app">
    <Header />
    <main>
      <router-view /> <!-- 动态内容：Home / About / 其他页面 -->
    </main>
    <Footer />
    <LoginOverlay />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import LoginOverlay from '@/components/LoginOverlay.vue';
</script>
