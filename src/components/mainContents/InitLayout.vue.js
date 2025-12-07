import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import LoginOverlay from '@/components/LoginOverlay.vue';
const isLoginVisible = ref(false);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
/** @type {[typeof Header, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({
    ...{ 'onOpenLogin': {} },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onOpenLogin': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onOpenLogin: (...[$event]) => {
        __VLS_ctx.isLoginVisible = true;
    }
};
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    id: "main-content",
});
const __VLS_7 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
if (__VLS_ctx.isLoginVisible) {
    /** @type {[typeof LoginOverlay, ]} */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(LoginOverlay, new LoginOverlay({
        ...{ 'onClose': {} },
    }));
    const __VLS_15 = __VLS_14({
        ...{ 'onClose': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    let __VLS_17;
    let __VLS_18;
    let __VLS_19;
    const __VLS_20 = {
        onClose: (...[$event]) => {
            if (!(__VLS_ctx.isLoginVisible))
                return;
            __VLS_ctx.isLoginVisible = false;
        }
    };
    var __VLS_16;
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Header: Header,
            Footer: Footer,
            LoginOverlay: LoginOverlay,
            isLoginVisible: isLoginVisible,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
