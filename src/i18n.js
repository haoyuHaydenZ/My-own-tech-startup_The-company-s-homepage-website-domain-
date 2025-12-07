import { createI18n } from 'vue-i18n';
import zh from '@/lang/zh.json';
import en from '@/lang/en.json';
export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'zh',
    fallbackLocale: 'en',
    messages: {
        zh,
        en
    }
});
