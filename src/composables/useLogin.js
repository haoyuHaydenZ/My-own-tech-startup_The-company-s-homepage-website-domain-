// src/composables/useLogin.ts
import { ref } from 'vue';
// Global state
const isLoginVisible = ref(false);
const isLoggedIn = ref(false);
const userType = ref(null);
export function useLogin() {
    function openLogin() {
        isLoginVisible.value = true;
    }
    function closeLogin() {
        isLoginVisible.value = false;
    }
    function login(type) {
        return new Promise((resolve) => {
            setTimeout(() => {
                isLoggedIn.value = true;
                userType.value = type;
                closeLogin();
                resolve();
            }, 1500); // Simulate network delay
        });
    }
    function logout() {
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
