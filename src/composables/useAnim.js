// src/composables/useAnim.ts
import { onMounted, onBeforeUnmount } from 'vue';
export function useAnim(selector = '.fade-in-on-scroll') {
    let observer = null;
    onMounted(() => {
        const animatedObjects = document.querySelectorAll(selector);
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    entry.target.classList.remove("hidden");
                    observer?.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedObjects.forEach((el) => {
            observer?.observe(el);
        });
    });
    onBeforeUnmount(() => {
        observer?.disconnect();
    });
}
