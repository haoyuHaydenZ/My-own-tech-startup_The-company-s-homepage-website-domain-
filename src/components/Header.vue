<template>
  <header class="main-header">
    <!-- Top bar. Lang left, Logo middle, Login right -->
    <div class="top-bar">
      <div class="float-btn lang-btn">
        <div class="lang-selector-wrapper">
          <select v-model="$i18n.locale" @change="onLangChange">
            <option value="zh">简体中文</option>
            <option value="en">English</option>
          </select>
          <span class="flag-icon" v-if="$i18n.locale === 'zh'">🇨🇳</span>
          <span class="flag-icon" v-else>🇺🇸</span>
        </div>
      </div>

      <div class="logo-center">
        <h1 class="site-title">Tales of Echo</h1>
        <p class="site-subtitle">— Attitude・Innovate・Stories —</p>
      </div>

      <div class="float-btn login-btn">
        <button v-if="!isLoggedIn" @click="openLogin">{{ $t('loginButtonText') }}</button>
        <button v-else @click="logout" class="user-btn">{{ userType === 'guest' ? 'Guest' : 'User' }} (Logout)</button>
      </div>
    </div>

    <!-- Bottom bar with nav & user actions -->
    <div class="bottom-bar">
      <nav class="nav-tabs">
        <ul class="nav-list">
          <li>
            <RouterLink class="nav-tab" to="/" exact-active-class="active">{{ $t('homeTab') }}</RouterLink>
          </li>

          <li><RouterLink class="nav-tab" to="/release" active-class="active">{{ $t('releaseTab') }}</RouterLink></li>

          <li><RouterLink class="nav-tab" to="/submission" active-class="active">{{ $t('submissionTab') }}</RouterLink></li>

          <li class="nav-about-container">
            <a href="#" class="nav-tab nav-tab-list" :class="{ active: isActive('/about') }">{{ $t('aboutTab') }}</a>
            <ul class="nav-dropdown">
              <li><RouterLink class="nav-tab" to="/about-intro" active-class="active">{{ $t('aboutIntroTab') }}</RouterLink></li>
              <li><RouterLink class="nav-tab" to="/about-artists" active-class="active">{{ $t('aboutArtistsTab') }}</RouterLink></li>
            </ul>
          </li>
        </ul>
      </nav>

      <a href="http://ai.talesofecho.net/" target="_blank" class="ai-btn">
        {{ $t('AiTab') }}
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useLogin } from '@/composables/useLogin';

const route = useRoute();
const { openLogin, isLoggedIn, userType, logout } = useLogin();

function isActive(pathPrefix: string): boolean {
  return route.path.startsWith(pathPrefix);
}

function onLangChange(e: Event) {
  const target = e.target as HTMLSelectElement;
  localStorage.setItem('lang', target.value);
}
</script>

<style scoped>
/* Scoped styles merge with global styles, but we want to ensure specificity */
.nav-tab.active {
  color: white !important;
  border-bottom: 2px solid white !important;
  text-shadow: 0 0 10px rgba(255,255,255,0.5);
}

.user-btn {
  background-color: #fff !important;
  color: #000 !important;
}

.lang-selector-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.lang-selector-wrapper select {
  padding-left: 30px; /* Make space for flag */
}

.flag-icon {
  position: absolute;
  left: 10px;
  pointer-events: none; /* Let clicks pass through to select */
  font-size: 1.2em;
}

.ai-btn {
  background-color: white;
  color: black;
  border-radius: 20px;
  padding: 8px 20px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s, background-color 0.2s;
  margin-left: auto; /* Push to the right if flex container allows, or rely on flex-between */
  white-space: nowrap;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.ai-btn:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}
</style>
