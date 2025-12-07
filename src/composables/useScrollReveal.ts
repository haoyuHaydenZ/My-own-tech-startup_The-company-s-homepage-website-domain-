import { onMounted, onUnmounted, ref, Ref } from 'vue';

export function useScrollReveal(targetRef: Ref<HTMLElement | null>, offset: number = 100) {
  const style = ref({
    opacity: 1, // Default to visible
    transform: 'none',
    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
    willChange: 'opacity, transform'
  });

  function onScroll() {
    const el = targetRef.value;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Simple check: is element visible?
    // We want the animation to trigger when the element enters the viewport
    const isVisible = rect.top < windowHeight - 100 && rect.bottom > 100;

    if (isVisible) {
       style.value = {
         opacity: 1,
         transform: 'translateX(0)',
         transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
         willChange: 'auto'
       };
    } else {
       // Reset position when out of view to allow re-animation
       // "Come in from right when scrolled down into" -> Start at offset (positive X)
       // "Come in from left when scroll up into" -> This logic is trickier to map purely to visibility without scroll direction state.
       // Let's simplify to "Slide in from right" as a base entrance animation first to fix the "not displayed at all" issue.
       
       style.value = {
         opacity: 0,
         transform: `translateX(${offset}px)`,
         transition: 'none', // Instant reset
         willChange: 'opacity, transform'
       };
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll);
    // Initial check
    setTimeout(onScroll, 100);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });

  return { style };
}
