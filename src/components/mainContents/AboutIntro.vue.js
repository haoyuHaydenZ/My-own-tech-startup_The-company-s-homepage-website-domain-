debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['release-item']} */ ;
/** @type {__VLS_StyleScopedClasses['release-item']} */ ;
/** @type {__VLS_StyleScopedClasses['release-content']} */ ;
/** @type {__VLS_StyleScopedClasses['release-content']} */ ;
/** @type {__VLS_StyleScopedClasses['release-content']} */ ;
/** @type {__VLS_StyleScopedClasses['release-grid']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "about-intro-page" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "intro-about-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "intro-logo" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/about/vinyl.avif",
    alt: "Tales of Echo Logo",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "intro-title" },
});
(__VLS_ctx.$t('aboutIntroTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "intro-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('aboutIntroSubtitle1'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('aboutIntroSubtitle2'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "intro-release-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "release-title" },
});
(__VLS_ctx.$t('musicReleaseTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-grid" },
});
for (const [n] of __VLS_getVForSourceType((6))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "release-item" },
        key: (n),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "release-number" },
    });
    (String(n).padStart(2, '0'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "release-content" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.$t(`musicReleaseItemTitle${n}`));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t(`musicReleaseItemContent${n}`));
}
/** @type {__VLS_StyleScopedClasses['about-intro-page']} */ ;
/** @type {__VLS_StyleScopedClasses['intro-about-section']} */ ;
/** @type {__VLS_StyleScopedClasses['intro-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['intro-title']} */ ;
/** @type {__VLS_StyleScopedClasses['intro-text']} */ ;
/** @type {__VLS_StyleScopedClasses['intro-release-section']} */ ;
/** @type {__VLS_StyleScopedClasses['release-title']} */ ;
/** @type {__VLS_StyleScopedClasses['release-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['release-item']} */ ;
/** @type {__VLS_StyleScopedClasses['release-number']} */ ;
/** @type {__VLS_StyleScopedClasses['release-content']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
