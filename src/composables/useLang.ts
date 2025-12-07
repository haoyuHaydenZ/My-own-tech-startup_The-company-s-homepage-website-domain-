// src/composables/useLang.ts
import { Ref, ref } from 'vue';

export function useLang() {
  const currentLang: Ref<string> = ref(localStorage.getItem('lang') || 'zh');

  function switchLanguage(newLang: string): void {
    localStorage.setItem('lang', newLang);
    currentLang.value = newLang;
  }

  return {
    currentLang,
    switchLanguage
  };
}
