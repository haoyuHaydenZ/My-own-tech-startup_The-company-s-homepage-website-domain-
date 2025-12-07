import { reactive } from 'vue';
const form = reactive({
    artistName: '',
    email: '',
    wechat: '',
    idea: '',
    fileName: '',
    file: null
});
function handleFileChange(event) {
    const target = event.target;
    if (target.files && target.files.length > 0) {
        form.file = target.files[0];
        form.fileName = target.files[0].name;
    }
}
function handleSubmit() {
    console.log('Submitting form:', form);
    // Construct mailto link
    const subject = encodeURIComponent(`Submission from ${form.artistName}`);
    const body = encodeURIComponent(`
Artist Name: ${form.artistName}
Email: ${form.email}
WeChat: ${form.wechat}
Creative Idea: ${form.idea}

(Note: Files cannot be attached automatically via mailto. Please attach your file manually in the email client.)
  `);
    const mailtoLink = `mailto:welcome@talesofecho.net?subject=${subject}&body=${body}`;
    // Open default email client
    window.location.href = mailtoLink;
    alert(`Thank you, ${form.artistName}! Opening your email client to send the submission to welcome@talesofecho.net.`);
    // Reset form
    form.artistName = '';
    form.email = '';
    form.wechat = '';
    form.idea = '';
    form.fileName = '';
    form.file = null;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['submission-header-image']} */ ;
/** @type {__VLS_StyleScopedClasses['submission-header']} */ ;
/** @type {__VLS_StyleScopedClasses['submission-header-image']} */ ;
/** @type {__VLS_StyleScopedClasses['submission-header-content']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-item']} */ ;
/** @type {__VLS_StyleScopedClasses['type-content']} */ ;
/** @type {__VLS_StyleScopedClasses['type-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['type-item']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['upload-label']} */ ;
/** @type {__VLS_StyleScopedClasses['submit-btn']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "submission-page" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "submission-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "submission-header-image" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/Submission/Marble.avif",
    alt: "Submission Header Background",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "submission-header-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "submission-title" },
});
(__VLS_ctx.$t('submissionTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "submission-intro" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('submissionIntro'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "join-artists-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "join-title" },
});
(__VLS_ctx.$t('submissionJoinTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "join-divider" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "join-subtitle" },
});
(__VLS_ctx.$t('submissionJoinSubtitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "features-grid" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    viewBox: "0 0 200 200",
    width: "100",
    height: "100",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "white",
    d: "M100 29.5c-38.874 0-70.5 31.626-70.5 70.5s31.626 70.5 70.5 70.5 70.5-31.626 70.5-70.5-31.626-70.5-70.5-70.5zm0 133c-34.463 0-62.5-28.038-62.5-62.5S65.537 37.5 100 37.5s62.5 28.038 62.5 62.5-28.037 62.5-62.5 62.5zm29.8-46.8c-.456.608-11.387 14.9-29.8 14.9s-29.344-14.292-29.8-14.9a4 4 0 0 1 6.393-4.81c.091.12 9.073 11.711 23.407 11.711 14.336 0 23.318-11.594 23.407-11.711a4.006 4.006 0 0 1 5.599-.776 3.994 3.994 0 0 1 .794 5.586zM73.583 80.05c0-3.59 2.877-6.5 6.467-6.5h.066a6.5 6.5 0 1 1 0 13c-3.59 0-6.533-2.91-6.533-6.5zm39.9 0c0-3.59 2.877-6.5 6.467-6.5h.066a6.5 6.5 0 1 1 0 13c-3.59 0-6.533-2.91-6.533-6.5z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
(__VLS_ctx.$t('submissionFeature1'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    viewBox: "0 0 200 200",
    width: "100",
    height: "100",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.g, __VLS_intrinsicElements.g)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "#0E4828",
    d: "M93.299 155C66.116 155 44 132.927 44 105.797s22.116-49.203 49.299-49.203c5.463 0 10.83.887 15.954 2.634a3.371 3.371 0 0 1 2.104 4.28l-12.72 37.122 37.567-11.547a3.376 3.376 0 0 1 4.221 2.229 49.128 49.128 0 0 1 2.172 14.485c0 27.13-22.115 49.203-49.298 49.203zm0-91.666c-23.46 0-42.545 19.049-42.545 42.463S69.84 148.26 93.299 148.26s42.545-19.049 42.545-42.463c0-3.127-.339-6.222-1.01-9.241l-40.542 12.461a3.375 3.375 0 0 1-4.189-4.312l13.725-40.063a42.74 42.74 0 0 0-10.529-1.308z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "#E98866",
    d: "M155.965 75.444c-4.383-14.221-15.426-25.586-29.539-30.402a.795.795 0 0 0-1.007.493l-14.862 43.379a.792.792 0 0 0 .983 1.012l43.899-13.494a.79.79 0 0 0 .526-.988z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
(__VLS_ctx.$t('submissionFeature2'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    viewBox: "0 0 200 200",
    width: "100",
    height: "100",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "white",
    d: "M100 29.5c-38.874 0-70.5 31.626-70.5 70.5 0 38.874 31.626 70.5 70.5 70.5s70.5-31.626 70.5-70.5c0-38.874-31.626-70.5-70.5-70.5zM162.358 96h-31.93a105.684 105.684 0 0 0-21.335-57.831C137.968 42.397 160.48 66.437 162.358 96zm-84.785 8h44.854A97.706 97.706 0 0 1 100 160.416 97.706 97.706 0 0 1 77.573 104zm0-8A97.706 97.706 0 0 1 100 39.584 97.706 97.706 0 0 1 122.427 96H77.573zm13.333-57.831A105.683 105.683 0 0 0 69.572 96h-31.93c1.878-29.563 24.39-53.603 53.264-57.831zM37.642 104h31.93a105.684 105.684 0 0 0 21.335 57.831C62.032 157.603 39.52 133.563 37.642 104zm71.452 57.831A105.692 105.692 0 0 0 130.429 104h31.93c-1.879 29.563-24.391 53.603-53.265 57.831z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
(__VLS_ctx.$t('submissionFeature3'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    viewBox: "0 0 200 200",
    width: "100",
    height: "100",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "white",
    d: "M163.126 85.006a3.966 3.966 0 0 0-3.595-2.306h-55.034l6.056-48.703a4.005 4.005 0 0 0-2.355-4.166 3.947 3.947 0 0 0-4.629 1.104l-66.146 79.8a4.024 4.024 0 0 0-.549 4.259 3.966 3.966 0 0 0 3.595 2.306h55.034l-6.056 48.703a4.005 4.005 0 0 0 2.355 4.166 3.95 3.95 0 0 0 4.628-1.104l66.146-79.8a4.023 4.023 0 0 0 .55-4.259zm-64.123 68.477 4.935-39.686a4.023 4.023 0 0 0-.962-3.145 3.956 3.956 0 0 0-2.976-1.353H48.956l52.041-62.783-4.935 39.686a4.023 4.023 0 0 0 .962 3.145A3.956 3.956 0 0 0 100 90.7h51.044l-52.041 62.783z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
(__VLS_ctx.$t('submissionFeature4'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    viewBox: "0 0 200 200",
    width: "100",
    height: "100",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "white",
    d: "M100 29.5c-38.874 0-70.5 31.626-70.5 70.5s31.626 70.5 70.5 70.5 70.5-31.626 70.5-70.5-31.626-70.5-70.5-70.5zm0 133c-34.463 0-62.5-28.037-62.5-62.5S65.537 37.5 100 37.5s62.5 28.037 62.5 62.5-28.037 62.5-62.5 62.5zm0-106.4c-24.207 0-43.9 19.693-43.9 43.9s19.693 43.9 43.9 43.9 43.9-19.693 43.9-43.9-19.693-43.9-43.9-43.9zm0 79.8c-19.796 0-35.9-16.104-35.9-35.9S80.204 64.1 100 64.1s35.9 16.104 35.9 35.9-16.104 35.9-35.9 35.9zm0-53.2c-9.539 0-17.3 7.761-17.3 17.3s7.761 17.3 17.3 17.3 17.3-7.761 17.3-17.3-7.761-17.3-17.3-17.3zm0 26.6c-5.128 0-9.3-4.172-9.3-9.3s4.172-9.3 9.3-9.3 9.3 4.172 9.3 9.3-4.172 9.3-9.3 9.3z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
(__VLS_ctx.$t('submissionFeature5'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feature-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    viewBox: "0 0 200 200",
    width: "100",
    height: "100",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    fill: "white",
    d: "M140.805 167c-.63 0-1.263-.151-1.843-.457L100 145.986l-38.962 20.558a3.947 3.947 0 0 1-4.181-.31 4.014 4.014 0 0 1-1.577-3.912l7.436-43.497-31.51-30.793a4.02 4.02 0 0 1-1.013-4.102 3.98 3.98 0 0 1 3.207-2.728l43.564-6.388 19.478-39.59C97.111 33.862 98.49 33 100 33s2.889.862 3.559 2.224l19.478 39.59 43.564 6.388a3.981 3.981 0 0 1 3.207 2.728 4.021 4.021 0 0 1-1.013 4.102l-31.51 30.793 7.436 43.497a4.013 4.013 0 0 1-1.577 3.912 3.952 3.952 0 0 1-2.339.766zM100 137.47a3.94 3.94 0 0 1 1.843.457l33.684 17.773-6.428-37.598a4.018 4.018 0 0 1 1.149-3.549l27.224-26.604-37.641-5.52a3.969 3.969 0 0 1-2.986-2.182L100 46.009 83.155 80.246a3.972 3.972 0 0 1-2.986 2.182l-37.641 5.52 27.224 26.604a4.016 4.016 0 0 1 1.149 3.549L64.472 155.7l33.684-17.773a3.96 3.96 0 0 1 1.844-.457z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
(__VLS_ctx.$t('submissionFeature6'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "artist-types-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "types-title" },
});
(__VLS_ctx.$t('submissionTypesTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "types-list" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "type-number" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
(__VLS_ctx.$t('submissionType1'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-divider" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "type-number" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
(__VLS_ctx.$t('submissionType2'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-divider" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "type-number" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
(__VLS_ctx.$t('submissionType3'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('submissionType3Desc'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-divider" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "type-number" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
(__VLS_ctx.$t('submissionType4'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "type-divider" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "submission-form-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "form-title" },
});
(__VLS_ctx.$t('submissionFormTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-divider" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "form-subtitle" },
});
(__VLS_ctx.$t('submissionFormSubtitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.handleSubmit) },
    ...{ class: "submission-form" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "artistName",
});
(__VLS_ctx.$t('submissionLabelArtistName'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    id: "artistName",
    value: (__VLS_ctx.form.artistName),
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "email",
});
(__VLS_ctx.$t('submissionLabelEmail'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "email",
    id: "email",
    required: true,
});
(__VLS_ctx.form.email);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "wechat",
});
(__VLS_ctx.$t('submissionLabelWechat'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    id: "wechat",
    value: (__VLS_ctx.form.wechat),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "idea",
});
(__VLS_ctx.$t('submissionLabelIdea'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
    id: "idea",
    value: (__VLS_ctx.form.idea),
    rows: "4",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-group file-upload" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "upload-label" },
    for: "file-upload",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "upload-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "upload-text" },
});
(__VLS_ctx.form.fileName || __VLS_ctx.$t('submissionUploadText'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onChange: (__VLS_ctx.handleFileChange) },
    type: "file",
    id: "file-upload",
    accept: ".mp3,.wav,.demo",
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-actions" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
    ...{ class: "submit-btn" },
});
(__VLS_ctx.$t('submissionSendBtn'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "form-footer-text" },
});
(__VLS_ctx.$t('submissionFooterText'));
/** @type {__VLS_StyleScopedClasses['submission-page']} */ ;
/** @type {__VLS_StyleScopedClasses['submission-header']} */ ;
/** @type {__VLS_StyleScopedClasses['submission-header-image']} */ ;
/** @type {__VLS_StyleScopedClasses['submission-header-content']} */ ;
/** @type {__VLS_StyleScopedClasses['submission-title']} */ ;
/** @type {__VLS_StyleScopedClasses['submission-intro']} */ ;
/** @type {__VLS_StyleScopedClasses['join-artists-section']} */ ;
/** @type {__VLS_StyleScopedClasses['join-title']} */ ;
/** @type {__VLS_StyleScopedClasses['join-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['join-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['features-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-item']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-item']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-item']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-item']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-item']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-item']} */ ;
/** @type {__VLS_StyleScopedClasses['feature-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['artist-types-section']} */ ;
/** @type {__VLS_StyleScopedClasses['types-title']} */ ;
/** @type {__VLS_StyleScopedClasses['types-list']} */ ;
/** @type {__VLS_StyleScopedClasses['type-item']} */ ;
/** @type {__VLS_StyleScopedClasses['type-number']} */ ;
/** @type {__VLS_StyleScopedClasses['type-content']} */ ;
/** @type {__VLS_StyleScopedClasses['type-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['type-item']} */ ;
/** @type {__VLS_StyleScopedClasses['type-number']} */ ;
/** @type {__VLS_StyleScopedClasses['type-content']} */ ;
/** @type {__VLS_StyleScopedClasses['type-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['type-item']} */ ;
/** @type {__VLS_StyleScopedClasses['type-number']} */ ;
/** @type {__VLS_StyleScopedClasses['type-content']} */ ;
/** @type {__VLS_StyleScopedClasses['type-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['type-item']} */ ;
/** @type {__VLS_StyleScopedClasses['type-number']} */ ;
/** @type {__VLS_StyleScopedClasses['type-content']} */ ;
/** @type {__VLS_StyleScopedClasses['type-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['submission-form-section']} */ ;
/** @type {__VLS_StyleScopedClasses['form-title']} */ ;
/** @type {__VLS_StyleScopedClasses['form-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['form-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['submission-form']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['file-upload']} */ ;
/** @type {__VLS_StyleScopedClasses['upload-label']} */ ;
/** @type {__VLS_StyleScopedClasses['upload-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['upload-text']} */ ;
/** @type {__VLS_StyleScopedClasses['form-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['submit-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['form-footer-text']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            form: form,
            handleFileChange: handleFileChange,
            handleSubmit: handleSubmit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
