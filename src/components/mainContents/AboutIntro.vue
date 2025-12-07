<template>
  <div class="about-intro-page">
    <!-- About Section -->
    <section class="intro-about-section">
      <div class="intro-logo">
        <!-- Replace with actual logo path if available, using a placeholder for now -->
        <img src="@/assets/images/about/vinyl.avif" alt="Tales of Echo Logo" />
      </div>
      <h1 class="intro-title">{{ $t('aboutIntroTitle') }}</h1>
      <div class="intro-text">
        <p>{{ $t('aboutIntroSubtitle1') }}</p>
        <p>{{ $t('aboutIntroSubtitle2') }}</p>
      </div>
    </section>

    <!-- Music Release Section -->
    <section class="intro-release-section">
      <h2 class="release-title">{{ $t('musicReleaseTitle') }}</h2>
      
      <div class="release-grid">
        <div class="release-item" v-for="n in 6" :key="n">
          <div class="release-number">{{ String(n).padStart(2, '0') }}</div>
          <div class="release-content">
            <h3>{{ $t(`musicReleaseItemTitle${n}`) }}</h3>
            <p>{{ $t(`musicReleaseItemContent${n}`) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-intro-page {
  background-color: #111; /* Dark background matching the image */
  color: #e0e0e0;
  font-family: "Noto Serif SC", serif; /* Matching the serif font style */
  padding-bottom: 80px;
}

/* About Section */
.intro-about-section {
  text-align: center;
  padding: 80px 20px;
  background-color: #1a1a1a; /* Slightly lighter dark background */
}

.intro-logo img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 30px;
  opacity: 0.8;
}

.intro-title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: normal;
  letter-spacing: 1px;
  color: #f0f0f0;
}

.intro-text p {
  max-width: 800px;
  margin: 0 auto 15px;
  font-size: 0.9rem;
  line-height: 1.8;
  color: #ccc;
}

/* Music Release Section */
.intro-release-section {
  padding: 80px 20px;
  background-color: #000;
}

.release-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  font-weight: normal;
  color: #fff;
}

.release-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
}

.release-item {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

/* Zigzag layout: Even items align to the right, Odd items align to the left */
.release-item:nth-child(even) {
  flex-direction: row-reverse;
  text-align: right;
}

.release-item:nth-child(even) .release-content p {
  margin-left: auto; /* Push text to right edge when in row-reverse */
}

.release-number {
  font-size: 4rem;
  font-family: sans-serif; /* Numbers are usually sans-serif */
  color: #fff;
  font-weight: 300;
  line-height: 1;
  flex-shrink: 0;
  width: 80px;
}

.release-content {
  padding-top: 10px;
}

.release-content h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #fff;
  font-weight: normal;
}

.release-content p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #bbb;
  max-width: 600px;
}

/* Responsive */
@media (min-width: 768px) {
  .release-grid {
    grid-template-columns: 1fr; /* Keep single column for the text-heavy content, or 2 columns if desired */
  }
  
  /* If we want a 2-column layout for larger screens */
  /* .release-grid {
       grid-template-columns: 1fr 1fr;
     } */
}
</style>
