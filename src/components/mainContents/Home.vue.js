function getAboutImage(n) {
    return new URL(`../../assets/images/home/about${n}.avif`, import.meta.url).href;
}
function getCoverImage(n) {
    return new URL(`../../assets/images/home/cover${n}.avif`, import.meta.url).href;
}
// Data for Top 3 Cards
const top3Items = [
    {
        title: '<span style="font-family:playfair display,serif;"><span style="letter-spacing:normal;"><span class="color_18" style="color:white;">衰棄.</span></span></span>',
        subtitle: '<span class="color_15" style="color:#ccc;">夜中独步</span>',
        links: [
            { name: 'Apple Music', url: 'https://music.apple.com/us/album/our-journey-intro/1792498396?', iconSrc: 'https://static.wixstatic.com/media/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png' },
            { name: 'Netease', url: 'https://music.163.com/#/album?id=260757587', iconSrc: 'https://static.wixstatic.com/media/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png' },
            { name: 'Spotify', url: 'https://open.spotify.com/album/0RCxkmnqdsPnkwkmrohGfE', iconSrc: 'https://static.wixstatic.com/media/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png' },
            { name: 'Tencent', url: 'https://y.qq.com/n/ryqq/albumDetail/0043Kkzr2Kx6Sh', iconSrc: 'https://static.wixstatic.com/media/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png' },
            { name: 'Youtube', url: 'https://music.youtube.com/playlist?list=OLAK5uy_khCKGJuPDbshJGk9W3HC5s5-Or_7o6ak4', iconSrc: 'https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png' },
            { name: 'Amazon', url: 'https://music.amazon.com/albums/B0DTYXPT46', iconSrc: 'https://static.wixstatic.com/media/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png' },
        ]
    },
    {
        title: '<span style="letter-spacing:normal;"><span class="color_18" style="color:white;">Subverter</span></span>',
        subtitle: '<span class="color_15" style="color:#ccc;">Einzig</span>',
        links: [
            { name: 'Apple Music', url: 'https://music.apple.com/us/album/einzig-single/1795897618', iconSrc: 'https://static.wixstatic.com/media/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png' },
            { name: 'Netease', url: 'https://music.163.com/#/album?id=262623134', iconSrc: 'https://static.wixstatic.com/media/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png' },
            { name: 'Spotify', url: 'https://open.spotify.com/album/4EY4LEndHo5R9kc30UXzYX', iconSrc: 'https://static.wixstatic.com/media/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png' },
            { name: 'Tencent', url: 'https://y.qq.com/n/ryqq/albumDetail/001DFyhi326yQx', iconSrc: 'https://static.wixstatic.com/media/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png' },
            { name: 'Youtube', url: 'https://music.youtube.com/playlist?list=OLAK5uy_kkVsLyMJ-8dkateCiLcgLTnZdscgAHdnE', iconSrc: 'https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png' },
            { name: 'Amazon', url: 'https://music.amazon.com/albums/B0DWXKNPP4', iconSrc: 'https://static.wixstatic.com/media/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png' },
        ]
    },
    {
        title: '<span style="letter-spacing:normal;"><span class="color_18" style="color:white;">Rinocchio</span></span>',
        subtitle: '<span class="color_15" style="color:#ccc;">满月（Late Night Tequila）</span>',
        links: [
            { name: 'Apple Music', url: 'https://music.apple.com/us/album/late-night-tequila-%E6%BB%A1%E6%9C%88/1783455299?i=1783455300', iconSrc: 'https://static.wixstatic.com/media/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png' },
            { name: 'Netease', url: 'https://music.163.com/#/album?id=255920607', iconSrc: 'https://static.wixstatic.com/media/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png' },
            { name: 'Spotify', url: 'https://open.spotify.com/album/2KpuAdEcQkqjOZ4xGpGDbx', iconSrc: 'https://static.wixstatic.com/media/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png' },
            { name: 'Tencent', url: 'https://y.qq.com/n/ryqq/albumDetail/000q3m3D3R76xC', iconSrc: 'https://static.wixstatic.com/media/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png' },
            { name: 'Youtube', url: 'https://music.youtube.com/playlist?list=OLAK5uy_ka17I6GtE1AQ1eyJk2i6ifxpFQVY2HRg4', iconSrc: 'https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png' },
            { name: 'Amazon', url: 'https://music.amazon.com/albums/B0DPM1WJ66', iconSrc: 'https://static.wixstatic.com/media/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png' },
        ]
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['about-column']} */ ;
/** @type {__VLS_StyleScopedClasses['about-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['about-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['card-info']} */ ;
/** @type {__VLS_StyleScopedClasses['card-info']} */ ;
/** @type {__VLS_StyleScopedClasses['platform-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['platform-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight-box']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight-box']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-text']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-content']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "home-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "home-header-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "home-header-grid" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "home-image" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/home/vinyl.avif",
    alt: "Vinyl Record",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "home-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "home-about" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "about-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "about-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "about-title" },
});
(__VLS_ctx.$t('homeAboutTitleText'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "about-subtitle" },
});
(__VLS_ctx.$t('homeAboutSubtitleText1'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "about-description" },
});
(__VLS_ctx.$t('homeAboutSubtitleText2'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "about-columns" },
});
for (const [n] of __VLS_getVForSourceType((3))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "about-column" },
        key: (n),
        ...{ style: ({ backgroundImage: `url(${__VLS_ctx.getAboutImage(n)})` }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "about-overlay" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.$t(`homeAboutTitle${n}`));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t(`homeAboutContent${n}`));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "home-top-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "top3-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "top3-title" },
});
(__VLS_ctx.$t('homeTop3Title'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "top3-grid" },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.top3Items))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "single-card" },
        key: (index),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "card-image" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.getCoverImage(index + 1)),
        alt: (`Cover ${index + 1}`),
        ...{ style: {} },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "card-info" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (item.title) }, null, null);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (item.subtitle) }, null, null);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "platform-icons" },
    });
    for (const [link] of __VLS_getVForSourceType((item.links))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            key: (link.name),
            href: (link.url),
            target: "_blank",
            rel: "noreferrer noopener",
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: (link.iconSrc),
            alt: (link.name),
        });
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "home-highlight" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "highlight-container" },
});
for (const [n, index] of __VLS_getVForSourceType(([1, 3]))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "highlight-box" },
        key: (n),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "highlight-number" },
    });
    (index + 1);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.$t(`homeHighlightTitle${n}`));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t(`homeHighlightContent${n}`));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: "highlight-btn" },
    });
    (__VLS_ctx.$t(`homeHighlightButton${n}`));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "home-hero" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hero-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hero-image-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/home/hero.avif",
    alt: "Hero Image",
    ...{ class: "hero-image" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hero-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
(__VLS_ctx.$t('heroTextContent1'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('heroTextContent2'));
/** @type {__VLS_StyleScopedClasses['home-header']} */ ;
/** @type {__VLS_StyleScopedClasses['home-header-container']} */ ;
/** @type {__VLS_StyleScopedClasses['home-header-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['home-image']} */ ;
/** @type {__VLS_StyleScopedClasses['home-text']} */ ;
/** @type {__VLS_StyleScopedClasses['home-about']} */ ;
/** @type {__VLS_StyleScopedClasses['about-container']} */ ;
/** @type {__VLS_StyleScopedClasses['about-header']} */ ;
/** @type {__VLS_StyleScopedClasses['about-title']} */ ;
/** @type {__VLS_StyleScopedClasses['about-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['about-description']} */ ;
/** @type {__VLS_StyleScopedClasses['about-columns']} */ ;
/** @type {__VLS_StyleScopedClasses['about-column']} */ ;
/** @type {__VLS_StyleScopedClasses['about-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['home-top-3']} */ ;
/** @type {__VLS_StyleScopedClasses['top3-container']} */ ;
/** @type {__VLS_StyleScopedClasses['top3-title']} */ ;
/** @type {__VLS_StyleScopedClasses['top3-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['single-card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-image']} */ ;
/** @type {__VLS_StyleScopedClasses['card-info']} */ ;
/** @type {__VLS_StyleScopedClasses['platform-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['home-highlight']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight-container']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight-box']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight-number']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['home-hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-content']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-image-container']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-image']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-text']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            getAboutImage: getAboutImage,
            getCoverImage: getCoverImage,
            top3Items: top3Items,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
