import { ref, reactive } from 'vue';
const currentAudio = ref(null);
// Track switching state for "Our Journey"
const currentOurJourneyTrack = ref('Our Journey Intro');
const currentOurJourneyDuration = ref('02:54');
const ourJourneyTracks = reactive([
    { id: 1, name: 'Our Journey Intro', duration: '02:54' },
    { id: 2, name: 'Ignite the Flame', duration: '03:30' }, // Example duration
    { id: 3, name: '征程', duration: '04:10' },
    { id: 4, name: 'So Simple', duration: '03:45' },
    { id: 5, name: '时间轨迹', duration: '03:20' },
    { id: 6, name: 'Harp Awakening', duration: '02:40' },
    { id: 7, name: '夜中独步', duration: '03:15' },
]);
function selectTrack(track) {
    currentOurJourneyTrack.value = track.name;
    currentOurJourneyDuration.value = track.duration;
    playAudio(track.name);
}
function handleBuy(albumName) {
    // Placeholder for future payment redirection logic
    console.log(`Redirecting to purchase for: ${albumName}`);
    alert(`Payment gateway for ${albumName} is coming soon!`);
}
function playAudio(trackName) {
    // Stop currently playing audio if any
    if (currentAudio.value) {
        currentAudio.value.pause();
        currentAudio.value.currentTime = 0;
    }
    const audioPath = `/assets/audio/${trackName}.mp3`;
    const audio = new Audio(audioPath);
    audio.play().catch(err => {
        console.warn(`Could not play audio for ${trackName}:`, err);
        alert(`Preview for ${trackName} is unavailable.`);
    });
    currentAudio.value = audio;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['buy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-main-button']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['share-button-group']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['track-title']} */ ;
/** @type {__VLS_StyleScopedClasses['track-list']} */ ;
/** @type {__VLS_StyleScopedClasses['track-list']} */ ;
/** @type {__VLS_StyleScopedClasses['scrollable']} */ ;
/** @type {__VLS_StyleScopedClasses['track-list']} */ ;
/** @type {__VLS_StyleScopedClasses['scrollable']} */ ;
/** @type {__VLS_StyleScopedClasses['track-item']} */ ;
/** @type {__VLS_StyleScopedClasses['track-item']} */ ;
/** @type {__VLS_StyleScopedClasses['get-track-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['release-right']} */ ;
/** @type {__VLS_StyleScopedClasses['release-right']} */ ;
/** @type {__VLS_StyleScopedClasses['music-links']} */ ;
/** @type {__VLS_StyleScopedClasses['music-links']} */ ;
/** @type {__VLS_StyleScopedClasses['release-card']} */ ;
/** @type {__VLS_StyleScopedClasses['release-left']} */ ;
/** @type {__VLS_StyleScopedClasses['release-right']} */ ;
/** @type {__VLS_StyleScopedClasses['music-links']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-page" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "release-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-header-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "release-header-text" },
});
(__VLS_ctx.$t('releaseTab'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "release-album-sections" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-left" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "action-buttons" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleBuy('Einzig');
        } },
    href: "#",
    ...{ class: "buy-btn" },
});
(__VLS_ctx.$t('buySingle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "share-button-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-main-button" },
});
(__VLS_ctx.$t('shareSingle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "share-icons" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Facebook",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm2.992,6.408a0.3,0.3,0,0,1-.28.272H12.593a0.731,0.731,0,0,0-.909.886V8.8h1.953a0.261,0.261,0,0,1,.21.069,0.247,0.247,0,0,1,.07.2v2.112a0.3,0.3,0,0,1-.28.272H11.68V16.83a0.3,0.3,0,0,1-.28.272H9.237a0.3,0.3,0,0,1-.28-0.272V11.449H7.28A0.3,0.3,0,0,1,7,11.177V9.065A0.3,0.3,0,0,1,7.279,8.8H8.957V7.292a2.921,2.921,0,0,1,3.076-3.2h1.678a0.248,0.248,0,0,1,.05,0,0.253,0.253,0,0,1,.232.273V6.408Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Twitter",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5.669,8.49q0.008,0.163.008,0.327,0,0.059,0,.118A7.33,7.33,0,0,1,9.088,16,7.863,7.863,0,0,1,5,14.866a5.7,5.7,0,0,0,.636.034,5.546,5.546,0,0,0,3.313-1.08,2.656,2.656,0,0,1-2.491-1.755,2.817,2.817,0,0,0,1.2-.043,2.566,2.566,0,0,1-2.14-2.475V9.515a2.771,2.771,0,0,0,1.208.316,2.491,2.491,0,0,1-1.187-2.1A2.411,2.411,0,0,1,5.9,6.462,7.721,7.721,0,0,0,11.4,9.1a2.4,2.4,0,0,1-.067-0.576A2.6,2.6,0,0,1,14,6a2.736,2.736,0,0,1,1.947.8,5.527,5.527,0,0,0,1.694-.613,2.562,2.562,0,0,1-1.173,1.4A5.567,5.567,0,0,0,18,7.184,5.265,5.265,0,0,1,16.669,8.49Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Tumblr",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm4,16.274a4.6,4.6,0,0,1-1.442.581A8.809,8.809,0,0,1,12.117,17a3.873,3.873,0,0,1-1.369-.22,3,3,0,0,1-1.153-.654,3.416,3.416,0,0,1-.649-0.871,3.438,3.438,0,0,1-.216-1.38V9.3H7V7.486A4.5,4.5,0,0,0,8.441,6.76a3.211,3.211,0,0,0,.868-1.09A5.12,5.12,0,0,0,9.741,4h1.8V7.123H14.5V9.447H11.545v3.341c0,1.537.114,1.678,0.572,1.961a1.663,1.663,0,0,0,1.009.145A4.091,4.091,0,0,0,15,14.24v2.034Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Blogger",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M12.981,11.938H8.893a0.875,0.875,0,0,0,0,1.75h4.088a0.859,0.859,0,0,0,.912-0.875A0.881,0.881,0,0,0,12.981,11.938ZM11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5,12.374v0.439a3.142,3.142,0,0,1-.88,2.312A3.242,3.242,0,0,1,12.793,16H9.082a3.062,3.062,0,0,1-2.327-.812A3.257,3.257,0,0,1,6,12.75V8.688a2.912,2.912,0,0,1,.819-1.875A2.814,2.814,0,0,1,9.019,6h2.472a2.623,2.623,0,0,1,2.622,2.625,9.668,9.668,0,0,1-.063,1.25C15.781,9.921,16,11.718,16,12.374ZM9.145,9.751H11.3a0.805,0.805,0,0,0,.8-0.813A0.91,0.91,0,0,0,11.22,8H9.145A0.876,0.876,0,0,0,9.145,9.751Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "album-cover" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/home/cover2.avif",
    alt: "Einzig Cover",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "track-info" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "track-title" },
});
(__VLS_ctx.$t('releaseEinzigTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "track-artist" },
});
(__VLS_ctx.$t('releaseEinzigArtist'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "audio-player" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "player-controls" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.playAudio('Einzig');
        } },
    ...{ class: "play-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "progress-bar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "track-list" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "track-item active" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "track-number" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "track-name" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-right" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
(__VLS_ctx.$t('releaseEinzigArtist'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('releaseEinzigDesc'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.em, __VLS_intrinsicElements.em)({});
(__VLS_ctx.$t('releaseEinzigDedication'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "release-date" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "music-links" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.apple.com/us/album/einzig-single/1795897618",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png",
    alt: "Apple Music",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.163.com/#/album?id=262623134",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png",
    alt: "Netease",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://open.spotify.com/album/4EY4LEndHo5R9kc30UXzYX",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png",
    alt: "Spotify",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://y.qq.com/n/ryqq/albumDetail/001DFyhi326yQx",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png",
    alt: "Tencent",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.youtube.com/playlist?list=OLAK5uy_kkVsLyMJ-8dkateCiLcgLTnZdscgAHdnE",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png",
    alt: "Youtube",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.amazon.com/albums/B0DWXKNPP4",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png",
    alt: "Amazon",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-left" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "action-buttons" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleBuy('Our Journey');
        } },
    href: "#",
    ...{ class: "buy-btn" },
});
(__VLS_ctx.$t('getAlbum'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "share-button-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-main-button" },
});
(__VLS_ctx.$t('shareAlbum'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "share-icons" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Facebook",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm2.992,6.408a0.3,0.3,0,0,1-.28.272H12.593a0.731,0.731,0,0,0-.909.886V8.8h1.953a0.261,0.261,0,0,1,.21.069,0.247,0.247,0,0,1,.07.2v2.112a0.3,0.3,0,0,1-.28.272H11.68V16.83a0.3,0.3,0,0,1-.28.272H9.237a0.3,0.3,0,0,1-.28-0.272V11.449H7.28A0.3,0.3,0,0,1,7,11.177V9.065A0.3,0.3,0,0,1,7.279,8.8H8.957V7.292a2.921,2.921,0,0,1,3.076-3.2h1.678a0.248,0.248,0,0,1,.05,0,0.253,0.253,0,0,1,.232.273V6.408Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Twitter",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5.669,8.49q0.008,0.163.008,0.327,0,0.059,0,.118A7.33,7.33,0,0,1,9.088,16,7.863,7.863,0,0,1,5,14.866a5.7,5.7,0,0,0,.636.034,5.546,5.546,0,0,0,3.313-1.08,2.656,2.656,0,0,1-2.491-1.755,2.817,2.817,0,0,0,1.2-.043,2.566,2.566,0,0,1-2.14-2.475V9.515a2.771,2.771,0,0,0,1.208.316,2.491,2.491,0,0,1-1.187-2.1A2.411,2.411,0,0,1,5.9,6.462,7.721,7.721,0,0,0,11.4,9.1a2.4,2.4,0,0,1-.067-0.576A2.6,2.6,0,0,1,14,6a2.736,2.736,0,0,1,1.947.8,5.527,5.527,0,0,0,1.694-.613,2.562,2.562,0,0,1-1.173,1.4A5.567,5.567,0,0,0,18,7.184,5.265,5.265,0,0,1,16.669,8.49Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Tumblr",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm4,16.274a4.6,4.6,0,0,1-1.442.581A8.809,8.809,0,0,1,12.117,17a3.873,3.873,0,0,1-1.369-.22,3,3,0,0,1-1.153-.654,3.416,3.416,0,0,1-.649-0.871,3.438,3.438,0,0,1-.216-1.38V9.3H7V7.486A4.5,4.5,0,0,0,8.441,6.76a3.211,3.211,0,0,0,.868-1.09A5.12,5.12,0,0,0,9.741,4h1.8V7.123H14.5V9.447H11.545v3.341c0,1.537.114,1.678,0.572,1.961a1.663,1.663,0,0,0,1.009.145A4.091,4.091,0,0,0,15,14.24v2.034Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Blogger",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M12.981,11.938H8.893a0.875,0.875,0,0,0,0,1.75h4.088a0.859,0.859,0,0,0,.912-0.875A0.881,0.881,0,0,0,12.981,11.938ZM11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5,12.374v0.439a3.142,3.142,0,0,1-.88,2.312A3.242,3.242,0,0,1,12.793,16H9.082a3.062,3.062,0,0,1-2.327-.812A3.257,3.257,0,0,1,6,12.75V8.688a2.912,2.912,0,0,1,.819-1.875A2.814,2.814,0,0,1,9.019,6h2.472a2.623,2.623,0,0,1,2.622,2.625,9.668,9.668,0,0,1-.063,1.25C15.781,9.921,16,11.718,16,12.374ZM9.145,9.751H11.3a0.805,0.805,0,0,0,.8-0.813A0.91,0.91,0,0,0,11.22,8H9.145A0.876,0.876,0,0,0,9.145,9.751Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "album-cover" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/home/cover1.avif",
    alt: "Our Journey Cover",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "track-info" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "track-title" },
});
(__VLS_ctx.currentOurJourneyTrack);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "track-artist" },
});
(__VLS_ctx.$t('releaseOurJourneyArtist'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "audio-player" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "player-controls" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.playAudio(__VLS_ctx.currentOurJourneyTrack);
        } },
    ...{ class: "play-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "progress-bar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.currentOurJourneyDuration);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "track-list scrollable" },
});
for (const [track] of __VLS_getVForSourceType((__VLS_ctx.ourJourneyTracks))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectTrack(track);
            } },
        ...{ class: "track-item" },
        key: (track.id),
        ...{ class: ({ active: __VLS_ctx.currentOurJourneyTrack === track.name }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "track-number" },
    });
    (track.id);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "track-name" },
    });
    (track.name);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-right" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
(__VLS_ctx.$t('releaseOurJourneyTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('releaseOurJourneyDesc1'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('releaseOurJourneyDesc2'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "release-date" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "music-links" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.apple.com/us/album/our-journey-intro/1792498396?",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png",
    alt: "Apple Music",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.163.com/#/album?id=260757587",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png",
    alt: "Netease",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://open.spotify.com/album/0RCxkmnqdsPnkwkmrohGfE",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png",
    alt: "Spotify",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://y.qq.com/n/ryqq/albumDetail/0043Kkzr2Kx6Sh",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png",
    alt: "Tencent",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.youtube.com/playlist?list=OLAK5uy_khCKGJuPDbshJGk9W3HC5s5-Or_7o6ak4",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png",
    alt: "Youtube",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.amazon.com/albums/B0DTYXPT46",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png",
    alt: "Amazon",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-left" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "action-buttons" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.handleBuy('Late Night Tequila');
        } },
    href: "#",
    ...{ class: "buy-btn" },
});
(__VLS_ctx.$t('buySingle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "share-button-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-main-button" },
});
(__VLS_ctx.$t('shareSingle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "share-icons" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Facebook",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm2.992,6.408a0.3,0.3,0,0,1-.28.272H12.593a0.731,0.731,0,0,0-.909.886V8.8h1.953a0.261,0.261,0,0,1,.21.069,0.247,0.247,0,0,1,.07.2v2.112a0.3,0.3,0,0,1-.28.272H11.68V16.83a0.3,0.3,0,0,1-.28.272H9.237a0.3,0.3,0,0,1-.28-0.272V11.449H7.28A0.3,0.3,0,0,1,7,11.177V9.065A0.3,0.3,0,0,1,7.279,8.8H8.957V7.292a2.921,2.921,0,0,1,3.076-3.2h1.678a0.248,0.248,0,0,1,.05,0,0.253,0.253,0,0,1,.232.273V6.408Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Twitter",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5.669,8.49q0.008,0.163.008,0.327,0,0.059,0,.118A7.33,7.33,0,0,1,9.088,16,7.863,7.863,0,0,1,5,14.866a5.7,5.7,0,0,0,.636.034,5.546,5.546,0,0,0,3.313-1.08,2.656,2.656,0,0,1-2.491-1.755,2.817,2.817,0,0,0,1.2-.043,2.566,2.566,0,0,1-2.14-2.475V9.515a2.771,2.771,0,0,0,1.208.316,2.491,2.491,0,0,1-1.187-2.1A2.411,2.411,0,0,1,5.9,6.462,7.721,7.721,0,0,0,11.4,9.1a2.4,2.4,0,0,1-.067-0.576A2.6,2.6,0,0,1,14,6a2.736,2.736,0,0,1,1.947.8,5.527,5.527,0,0,0,1.694-.613,2.562,2.562,0,0,1-1.173,1.4A5.567,5.567,0,0,0,18,7.184,5.265,5.265,0,0,1,16.669,8.49Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Tumblr",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm4,16.274a4.6,4.6,0,0,1-1.442.581A8.809,8.809,0,0,1,12.117,17a3.873,3.873,0,0,1-1.369-.22,3,3,0,0,1-1.153-.654,3.416,3.416,0,0,1-.649-0.871,3.438,3.438,0,0,1-.216-1.38V9.3H7V7.486A4.5,4.5,0,0,0,8.441,6.76a3.211,3.211,0,0,0,.868-1.09A5.12,5.12,0,0,0,9.741,4h1.8V7.123H14.5V9.447H11.545v3.341c0,1.537.114,1.678,0.572,1.961a1.663,1.663,0,0,0,1.009.145A4.091,4.091,0,0,0,15,14.24v2.034Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "share-icon-btn" },
    'aria-label': "Blogger",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    fill: "#282828",
    d: "M12.981,11.938H8.893a0.875,0.875,0,0,0,0,1.75h4.088a0.859,0.859,0,0,0,.912-0.875A0.881,0.881,0,0,0,12.981,11.938ZM11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5,12.374v0.439a3.142,3.142,0,0,1-.88,2.312A3.242,3.242,0,0,1,12.793,16H9.082a3.062,3.062,0,0,1-2.327-.812A3.257,3.257,0,0,1,6,12.75V8.688a2.912,2.912,0,0,1,.819-1.875A2.814,2.814,0,0,1,9.019,6h2.472a2.623,2.623,0,0,1,2.622,2.625,9.668,9.668,0,0,1-.063,1.25C15.781,9.921,16,11.718,16,12.374ZM9.145,9.751H11.3a0.805,0.805,0,0,0,.8-0.813A0.91,0.91,0,0,0,11.22,8H9.145A0.876,0.876,0,0,0,9.145,9.751Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "album-cover" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/home/cover3.avif",
    alt: "Late Night Tequila Cover",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "track-info" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "track-title long-title" },
});
(__VLS_ctx.$t('releaseLNTTrackTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "track-artist" },
});
(__VLS_ctx.$t('releaseLNTArtist'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "audio-player" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "player-controls" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.playAudio('Late Night Tequila 满月');
        } },
    ...{ class: "play-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "progress-bar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "track-list" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "track-item active" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "track-number" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "track-name" },
});
(__VLS_ctx.$t('releaseLNTTrackTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "get-track-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "release-right" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
(__VLS_ctx.$t('releaseLNTTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('releaseLNTDesc1'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('releaseLNTDesc2'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('releaseLNTDesc3'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "release-date" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "music-links" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.apple.com/us/album/late-night-tequila-%E6%BB%A1%E6%9C%88/1783455299?i=1783455300",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png",
    alt: "Apple Music",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.163.com/#/album?id=255920607",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png",
    alt: "Netease",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://open.spotify.com/album/2KpuAdEcQkqjOZ4xGpGDbx",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png",
    alt: "Spotify",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://y.qq.com/n/ryqq/albumDetail/000q3m3D3R76xC",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png",
    alt: "Tencent",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.youtube.com/playlist?list=OLAK5uy_ka17I6GtE1AQ1eyJk2i6ifxpFQVY2HRg4",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png",
    alt: "Youtube",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://music.amazon.com/albums/B0DPM1WJ66",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "https://static.wixstatic.com/media/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png",
    alt: "Amazon",
});
/** @type {__VLS_StyleScopedClasses['release-page']} */ ;
/** @type {__VLS_StyleScopedClasses['release-header']} */ ;
/** @type {__VLS_StyleScopedClasses['release-header-container']} */ ;
/** @type {__VLS_StyleScopedClasses['release-header-text']} */ ;
/** @type {__VLS_StyleScopedClasses['release-album-sections']} */ ;
/** @type {__VLS_StyleScopedClasses['release-card']} */ ;
/** @type {__VLS_StyleScopedClasses['release-left']} */ ;
/** @type {__VLS_StyleScopedClasses['action-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['buy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-button-group']} */ ;
/** @type {__VLS_StyleScopedClasses['share-main-button']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['album-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['track-info']} */ ;
/** @type {__VLS_StyleScopedClasses['track-title']} */ ;
/** @type {__VLS_StyleScopedClasses['track-artist']} */ ;
/** @type {__VLS_StyleScopedClasses['audio-player']} */ ;
/** @type {__VLS_StyleScopedClasses['player-controls']} */ ;
/** @type {__VLS_StyleScopedClasses['play-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['track-list']} */ ;
/** @type {__VLS_StyleScopedClasses['track-item']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['track-number']} */ ;
/** @type {__VLS_StyleScopedClasses['track-name']} */ ;
/** @type {__VLS_StyleScopedClasses['release-right']} */ ;
/** @type {__VLS_StyleScopedClasses['release-date']} */ ;
/** @type {__VLS_StyleScopedClasses['music-links']} */ ;
/** @type {__VLS_StyleScopedClasses['release-card']} */ ;
/** @type {__VLS_StyleScopedClasses['release-left']} */ ;
/** @type {__VLS_StyleScopedClasses['action-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['buy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-button-group']} */ ;
/** @type {__VLS_StyleScopedClasses['share-main-button']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['album-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['track-info']} */ ;
/** @type {__VLS_StyleScopedClasses['track-title']} */ ;
/** @type {__VLS_StyleScopedClasses['track-artist']} */ ;
/** @type {__VLS_StyleScopedClasses['audio-player']} */ ;
/** @type {__VLS_StyleScopedClasses['player-controls']} */ ;
/** @type {__VLS_StyleScopedClasses['play-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['track-list']} */ ;
/** @type {__VLS_StyleScopedClasses['scrollable']} */ ;
/** @type {__VLS_StyleScopedClasses['track-item']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['track-number']} */ ;
/** @type {__VLS_StyleScopedClasses['track-name']} */ ;
/** @type {__VLS_StyleScopedClasses['release-right']} */ ;
/** @type {__VLS_StyleScopedClasses['release-date']} */ ;
/** @type {__VLS_StyleScopedClasses['music-links']} */ ;
/** @type {__VLS_StyleScopedClasses['release-card']} */ ;
/** @type {__VLS_StyleScopedClasses['release-left']} */ ;
/** @type {__VLS_StyleScopedClasses['action-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['buy-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-button-group']} */ ;
/** @type {__VLS_StyleScopedClasses['share-main-button']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['share-icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['album-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['track-info']} */ ;
/** @type {__VLS_StyleScopedClasses['track-title']} */ ;
/** @type {__VLS_StyleScopedClasses['long-title']} */ ;
/** @type {__VLS_StyleScopedClasses['track-artist']} */ ;
/** @type {__VLS_StyleScopedClasses['audio-player']} */ ;
/** @type {__VLS_StyleScopedClasses['player-controls']} */ ;
/** @type {__VLS_StyleScopedClasses['play-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['track-list']} */ ;
/** @type {__VLS_StyleScopedClasses['track-item']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['track-number']} */ ;
/** @type {__VLS_StyleScopedClasses['track-name']} */ ;
/** @type {__VLS_StyleScopedClasses['get-track-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['release-right']} */ ;
/** @type {__VLS_StyleScopedClasses['release-date']} */ ;
/** @type {__VLS_StyleScopedClasses['music-links']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            currentOurJourneyTrack: currentOurJourneyTrack,
            currentOurJourneyDuration: currentOurJourneyDuration,
            ourJourneyTracks: ourJourneyTracks,
            selectTrack: selectTrack,
            handleBuy: handleBuy,
            playAudio: playAudio,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
