import { onMounted } from 'vue';
import { useLogin } from '@/composables/useLogin';
import { useLang } from '@/composables/useLang';
import { useAnim } from '@/composables/useAnim';
import { useTabs } from '@/composables/useTabs';
export function useInit() {
    const { initializeTabs, updateMainContent } = useTabs();
    const { currentLang } = useLang();
    const { openLogin } = useLogin();
    onMounted(() => {
        initializeTabs([]);
        const urlParam = new URLSearchParams(window.location.search);
        const defaultTab = urlParam.get('tab') || 'home';
        updateMainContent(defaultTab);
        useAnim();
    });
    return {
        currentLang,
        openLogin
    };
}
