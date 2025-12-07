// src/composables/useLogin.ts
import { ref } from 'vue';

// Global state
const isLoginVisible = ref(false);
const isLoggedIn = ref(false);
const userType = ref<'google' | 'guest' | null>(null);

export function useLogin() {
  function openLogin(): void {
    isLoginVisible.value = true;
  }

  function closeLogin(): void {
    isLoginVisible.value = false;
  }

  function login(type: 'google' | 'guest'): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        isLoggedIn.value = true;
        userType.value = type;
        closeLogin();
        resolve();
      }, 1500); // Simulate network delay
    });
  }

  function logout(): void {
    isLoggedIn.value = false;
    userType.value = null;
  }

  return {
    isLoginVisible,
    isLoggedIn,
    userType,
    openLogin,
    closeLogin,
    login,
    logout
  };
}
