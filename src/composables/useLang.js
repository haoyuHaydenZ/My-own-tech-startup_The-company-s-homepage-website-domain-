// src/composables/useLang.ts
import { ref } from 'vue';
export function useLang() {
    const currentLang = ref(localStorage.getItem('lang') || 'zh');
    function switchLanguage(newLang) {
        localStorage.setItem('lang', newLang);
        currentLang.value = newLang;
    }
    return {
        currentLang,
        switchLanguage
    };
}
