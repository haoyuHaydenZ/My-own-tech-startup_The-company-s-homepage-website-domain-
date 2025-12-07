import { useRoute } from 'vue-router';
import { useLogin } from '@/composables/useLogin';
const route = useRoute();
const { openLogin, isLoggedIn, userType, logout } = useLogin();
function isActive(pathPrefix) {
    return route.path.startsWith(pathPrefix);
}
function onLangChange(e) {
    const target = e.target;
    localStorage.setItem('lang', target.value);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['lang-selector-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['ai-btn']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: "main-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "top-bar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "float-btn lang-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lang-selector-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    ...{ onChange: (__VLS_ctx.onLangChange) },
    value: (__VLS_ctx.$i18n.locale),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "zh",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "en",
});
if (__VLS_ctx.$i18n.locale === 'zh') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "flag-icon" },
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "flag-icon" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "logo-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "site-title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "site-subtitle" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "float-btn login-btn" },
});
if (!__VLS_ctx.isLoggedIn) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.openLogin) },
    });
    (__VLS_ctx.$t('loginButtonText'));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.logout) },
        ...{ class: "user-btn" },
    });
    (__VLS_ctx.userType === 'guest' ? 'Guest' : 'User');
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bottom-bar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "nav-tabs" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "nav-list" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "nav-tab" },
    to: "/",
    exactActiveClass: "active",
}));
const __VLS_2 = __VLS_1({
    ...{ class: "nav-tab" },
    to: "/",
    exactActiveClass: "active",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
(__VLS_ctx.$t('homeTab'));
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_4 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ class: "nav-tab" },
    to: "/release",
    activeClass: "active",
}));
const __VLS_6 = __VLS_5({
    ...{ class: "nav-tab" },
    to: "/release",
    activeClass: "active",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
(__VLS_ctx.$t('releaseTab'));
var __VLS_7;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_8 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ class: "nav-tab" },
    to: "/submission",
    activeClass: "active",
}));
const __VLS_10 = __VLS_9({
    ...{ class: "nav-tab" },
    to: "/submission",
    activeClass: "active",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
(__VLS_ctx.$t('submissionTab'));
var __VLS_11;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "nav-about-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "#",
    ...{ class: "nav-tab nav-tab-list" },
    ...{ class: ({ active: __VLS_ctx.isActive('/about') }) },
});
(__VLS_ctx.$t('aboutTab'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "nav-dropdown" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_12 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ class: "nav-tab" },
    to: "/about-intro",
    activeClass: "active",
}));
const __VLS_14 = __VLS_13({
    ...{ class: "nav-tab" },
    to: "/about-intro",
    activeClass: "active",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
(__VLS_ctx.$t('aboutIntroTab'));
var __VLS_15;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_16 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    ...{ class: "nav-tab" },
    to: "/about-artists",
    activeClass: "active",
}));
const __VLS_18 = __VLS_17({
    ...{ class: "nav-tab" },
    to: "/about-artists",
    activeClass: "active",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
(__VLS_ctx.$t('aboutArtistsTab'));
var __VLS_19;
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "http://ai.talesofecho.net/",
    target: "_blank",
    ...{ class: "ai-btn" },
});
(__VLS_ctx.$t('AiTab'));
/** @type {__VLS_StyleScopedClasses['main-header']} */ ;
/** @type {__VLS_StyleScopedClasses['top-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['float-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['lang-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['lang-selector-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['flag-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['flag-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-center']} */ ;
/** @type {__VLS_StyleScopedClasses['site-title']} */ ;
/** @type {__VLS_StyleScopedClasses['site-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['float-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['login-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['user-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-list']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-about-container']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab-list']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['ai-btn']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            openLogin: openLogin,
            isLoggedIn: isLoggedIn,
            userType: userType,
            logout: logout,
            isActive: isActive,
            onLangChange: onLangChange,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
