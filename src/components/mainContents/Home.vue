<template>
  <!-- Home Header -->
  <section class="home-header">
    <div class="home-header-container">
      <div class="home-header-grid">
        <div class="home-image">
          <img src="@/assets/images/home/vinyl.avif" alt="Vinyl Record" />
        </div>
        <div class="home-text">
          <h1>Tales of Echo <br> Worldwide</h1>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="home-about">
    <div class="about-container">
      <div class="about-header">
        <h2 class="about-title">{{ $t('homeAboutTitleText') }}</h2>
        <p class="about-subtitle">{{ $t('homeAboutSubtitleText1') }}</p>
        <p class="about-description">{{ $t('homeAboutSubtitleText2') }}</p>
      </div>
      <div class="about-columns">
        <div class="about-column" v-for="n in 3" :key="n" :style="{ backgroundImage: `url(${getAboutImage(n)})` }">
          <div class="about-overlay">
            <h3>{{ $t(`homeAboutTitle${n}`) }}</h3>
            <p>{{ $t(`homeAboutContent${n}`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Top 3 -->
  <section class="home-top-3">
    <div class="top3-container">
        <h2 class="top3-title">{{ $t('homeTop3Title') }}</h2>

        <div class="top3-grid">
          <div class="single-card" v-for="(item, index) in top3Items" :key="index">
            <div class="card-image">
                 <!-- 1-based index for images -->
                 <img :src="getCoverImage(index + 1)" :alt="`Cover ${index + 1}`" style="width: 300px; height: 300px; object-fit: cover;" />
            </div>
            <div class="card-info">
              <h4 v-html="item.title"></h4>
              <p v-html="item.subtitle"></p>
              <div class="platform-icons">
                 <a v-for="link in item.links" :key="link.name" :href="link.url" target="_blank" rel="noreferrer noopener">
                   <img :src="link.iconSrc" :alt="link.name" />
                 </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>

  <!-- Highlights -->
  <section class="home-highlight">
    <div class="highlight-container">
      <div class="highlight-box" v-for="(n, index) in [1, 3]" :key="n">
        <div class="highlight-number">{{ index + 1 }}</div>
        <h3>{{ $t(`homeHighlightTitle${n}`) }}</h3>
        <p>{{ $t(`homeHighlightContent${n}`) }}</p>
        <button class="highlight-btn">
          {{ $t(`homeHighlightButton${n}`) }}
        </button>
      </div>
    </div>
  </section>

  <!-- Hero -->
  <section class="home-hero">
    <div class="hero-content">
      <div class="hero-image-container">
        <img
          src="@/assets/images/home/hero.avif"
          alt="Hero Image"
          class="hero-image"
        />
      </div>
      <div class="hero-text">
        <h2>Attitude・Innovate・Stories</h2>
        <h4>{{ $t('heroTextContent1') }}</h4>
        <p>{{ $t('heroTextContent2') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Removed useScrollReveal import and logic as requested

function getAboutImage(n: number) {
  return new URL(`../../assets/images/home/about${n}.avif`, import.meta.url).href;
}

function getCoverImage(n: number) {
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
</script>

<style scoped>
/* Home About */
.home-about {
  background-color: #E6D8D7; /* Updated */
  padding: 40px 20px; /* Reduced spacing */
  overflow: hidden;
}

/* Centering Fix */
.about-container {
  max-width: 1200px; /* Matched Top 3 container width */
  margin: 0 auto;
  display: flex;
  flex-direction: column; /* Stack header and columns */
  align-items: center; /* Center content */
}

.about-header {
  text-align: center;
  margin-bottom: 40px;
  width: 100%;
}

.about-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #222;
  font-family: "Noto Serif SC", serif;
}

.about-subtitle {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.about-description {
  font-size: 0.9rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}

.about-columns {
  display: flex;
  justify-content: center;
  gap: 40px; /* Match Top 3 gap */
  flex-wrap: wrap;
  width: 100%;
}

.about-column {
  width: 300px; /* Match Top 3 card width */
  height: 800px; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; /* Consistent border radius */
  overflow: hidden;
  background-color: #333;
}

/* Adjust first and last column border radius if desired for container look - REMOVED to treat as separate columns */

.about-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
  color: white;
  z-index: 2;
}

/* Darken the background image slightly or add a gradient overlay if needed, 
   but the screenshot text is quite legible. We can add a text shadow or a dim overlay. */
.about-column::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.about-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: "Noto Serif SC", serif; /* Match serif font */
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.about-overlay p {
  font-size: 0.9rem;
  line-height: 1.6;
  font-family: sans-serif;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}


/* Home Top 3 */
.home-top-3 {
  background-color: #E6D8D7; /* Updated */
  padding: 40px 20px; /* Reduced spacing */
  text-align: center;
  overflow: hidden;
}

.top3-container {
  max-width: 1200px;
  margin: 0 auto;
}

.top3-title {
  font-size: 2rem;
  margin-bottom: 40px;
  font-family: "Noto Serif SC", serif;
  letter-spacing: 2px;
}

.top3-grid {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin: 0 auto;
}

.single-card {
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}

.card-image img {
  width: 100%;
  height: 300px; /* Square-ish */
  object-fit: cover;
  display: block;
}

.card-info {
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
}

.card-info h4 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  font-weight: normal;
}

.card-info p {
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 15px;
}

.platform-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.platform-icons img {
  width: 25px;
  height: 25px;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.platform-icons img:hover {
  transform: scale(1.2);
}

/* Re-add hero and highlight styles if they were missing or ensure they are consistent */
.home-highlight {
  padding: 80px 20px;
  background-color: #111; /* Dark bg */
  color: white;
}

.highlight-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.highlight-box {
  background-color: #1a1a1a;
  width: 300px;
  padding: 40px 20px;
  text-align: center;
  position: relative;
  border-radius: 8px;
  margin-top: 30px;
}

.highlight-number {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.highlight-box h3 {
  margin-top: 10px;
  margin-bottom: 15px;
}

.highlight-box p {
  color: #bbb;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.highlight-btn {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 5px 15px;
  cursor: pointer;
  transition: all 0.3s;
}

.highlight-btn:hover {
  background-color: white;
  color: black;
}

.home-hero {
  padding: 100px 20px;
  background-color: #222;
  color: white;
  display: flex;
  justify-content: center;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 50px;
  max-width: 1000px;
}

.hero-image-container img {
  width: 300px;
  height: auto;
  border: 5px solid white; /* Frame style from some designs */
}

.hero-text {
  max-width: 500px;
}

.hero-text h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: serif;
  font-style: italic;
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
