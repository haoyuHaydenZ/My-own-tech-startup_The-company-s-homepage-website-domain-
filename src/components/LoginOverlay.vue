<template>
  <div id="loginOverlay" :class="{ show: isLoginVisible }">
    <!-- Close button outside the box for easier closing -->
    <div class="overlay-backdrop" @click="closeLogin"></div>
    
    <div class="login-box" :class="{ show: isLoginVisible }">
      <button class="close-btn-inner" @click="closeLogin">×</button>
      
      <div class="login-content">
        <h2>{{ $t('loginTitle') || 'Login' }}</h2>
        <p class="login-subtitle">{{ $t('loginSubtitle') || 'Select a login method' }}</p>
        
        <div v-if="isLoading" class="loading-spinner">
          <div class="spinner"></div>
          <p>{{ $t('loggingIn') || 'Logging in...' }}</p>
        </div>

        <div v-else class="login-options">
          <button class="login-btn google-btn" @click="handleLogin('google')">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.464 63.239 -14.754 63.239 Z" />
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.734 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.464 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
              </g>
            </svg>
            {{ $t('loginGoogle') || 'Sign in with Google' }}
          </button>
          
          <button class="login-btn guest-btn" @click="handleLogin('guest')">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            {{ $t('loginGuest') || 'Continue as Guest' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLogin } from '@/composables/useLogin';

const { isLoginVisible, closeLogin, login } = useLogin();
const isLoading = ref(false);

async function handleLogin(type: 'google' | 'guest') {
  isLoading.value = true;
  await login(type);
  isLoading.value = false;
}
</script>

<style scoped>
/* Overlay Styles */
#loginOverlay {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  align-items: center;
  justify-content: center;
}

#loginOverlay.show {
  display: flex;
}

.overlay-backdrop {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-out;
}

/* Login Box */
.login-box {
  background-color: #1a1a1a;
  padding: 40px;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
  position: relative;
  z-index: 100000;
  text-align: center;
  color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease-out;
  border: 1px solid #333;
}

.login-box.show {
  transform: translateY(0);
  opacity: 1;
}

.close-btn-inner {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;
}

.close-btn-inner:hover {
  color: white;
}

.login-content h2 {
  margin-bottom: 10px;
  font-family: "Noto Serif SC", serif;
}

.login-subtitle {
  color: #aaa;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.login-options {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.login-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.1s, background-color 0.2s;
  font-family: sans-serif;
  font-weight: bold;
}

.login-btn:hover {
  transform: translateY(-1px);
}

.login-btn:active {
  transform: translateY(0);
}

.google-btn {
  background-color: white;
  color: #333;
}

.guest-btn {
  background-color: #333;
  color: white;
  border: 1px solid #555;
}

.guest-btn:hover {
  background-color: #444;
}

/* Loading Spinner */
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
