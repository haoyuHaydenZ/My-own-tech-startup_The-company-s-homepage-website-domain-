<template>
  <div class="about-artists-page">
    <!-- Header Section -->
    <section class="artists-header">
      <h1 class="artists-title">{{ $t('aboutArtistsTitle') }}</h1>
      <p class="artists-intro">
        {{ $t('aboutArtistsIntro') }}
      </p>
    </section>

    <!-- Artists Grid -->
    <section class="artists-grid-section">
      <div class="artists-grid">
        <!-- Subverter -->
        <div class="artist-card">
          <div class="artist-image-wrapper">
            <img src="@/assets/images/Artists/Subverter.avif" alt="Subverter" class="artist-image" />
            <div class="artist-overlay">
              <div class="artist-info">
                <h3 class="artist-name">{{ $t('artistNameSubverter') }}</h3>
                <p class="artist-role">{{ $t('artistRoleSubverter') }}</p>
                <p class="artist-genre">{{ $t('artistGenreSubverter') }}</p>
                <p class="artist-link" v-html="$t('artistLinkSubverter')"></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Dion Chen -->
        <div class="artist-card">
          <div class="artist-image-wrapper">
            <img src="@/assets/images/Artists/DionChen.avif" alt="Dion Chen" class="artist-image" />
            <div class="artist-overlay">
              <div class="artist-info">
                <h3 class="artist-name">{{ $t('artistNameDion') }}</h3>
                <p class="artist-role">{{ $t('artistRoleDion') }}</p>
                <p class="artist-genre">{{ $t('artistGenreDion') }}</p>
                <p class="artist-link" v-html="$t('artistLinkDion')"></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Rinocchio -->
        <div class="artist-card">
          <div class="artist-image-wrapper">
            <img src="@/assets/images/Artists/Rinocchio.avif" alt="Rinocchio" class="artist-image" />
            <div class="artist-overlay">
              <div class="artist-info">
                <h3 class="artist-name">{{ $t('artistNameRino') }}</h3>
                <p class="artist-role">{{ $t('artistRoleRino') }}</p>
                <p class="artist-genre">{{ $t('artistGenreRino') }}</p>
                <p class="artist-link" v-html="$t('artistLinkRino')"></p>
              </div>
            </div>
          </div>
        </div>

        <!-- LiuJiaHan -->
        <div class="artist-card">
          <div class="artist-image-wrapper">
            <img src="@/assets/images/Artists/LiuJiaHan.avif" alt="Liu Jiahan" class="artist-image" />
            <div class="artist-overlay">
              <div class="artist-info">
                <h3 class="artist-name">{{ $t('artistNameLiu') }}</h3>
                <p class="artist-role">{{ $t('artistRoleLiu') }}</p>
                <p class="artist-genre">{{ $t('artistGenreLiu') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 5k·Demons -->
        <div class="artist-card">
          <div class="artist-image-wrapper">
            <img src="@/assets/images/Artists/5kDemons.avif" alt="5k·Demons" class="artist-image" />
            <div class="artist-overlay">
              <div class="artist-info">
                <h3 class="artist-name">{{ $t('artistName5k') }}</h3>
                <p class="artist-role">{{ $t('artistRole5k') }}</p>
                <p class="artist-genre">{{ $t('artistGenre5k') }}</p>
                <p class="artist-link" v-html="$t('artistLink5k')"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-artists-page {
  background-color: #000;
  color: white;
  font-family: "Noto Serif SC", serif;
  padding-bottom: 80px;
}

/* Header Section */
.artists-header {
  text-align: center;
  padding: 80px 20px;
  background-color: #000;
}

.artists-title {
  font-size: 3rem;
  margin-bottom: 30px;
  font-weight: normal;
  color: white;
}

.artists-intro {
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.8;
  color: #ddd;
  text-align: center;
}

/* Artists Grid */
.artists-grid-section {
  padding: 40px 20px;
  background-color: #111; /* Slightly different bg for the grid area */
}

.artists-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.artist-card {
  position: relative;
  width: 269px; /* Width from wix image size */
  height: 323px; /* Height from wix image size */
  overflow: hidden;
  cursor: pointer;
}

.artist-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.artist-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.artist-overlay {
  position: absolute;
  bottom: -100%; /* Initially hidden below */
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Dark overlay */
  color: white;
  padding: 20px;
  transition: bottom 0.3s ease;
  box-sizing: border-box;
  /* Adjust height logic if you want it full cover or just bottom */
  height: 100%; 
  display: flex;
  align-items: flex-end; /* Align text to bottom */
}

/* Hover Effect */
.artist-card:hover .artist-overlay {
  bottom: 0; /* Slide up */
}

.artist-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.artist-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  border-bottom: 1px solid #666;
  padding-bottom: 5px;
  margin-bottom: 5px;
}

.artist-role, .artist-genre {
  font-size: 0.9rem;
  color: #ccc;
}

.artist-link {
  font-size: 0.8rem;
  color: #aaa;
  margin-top: 10px;
}

.artist-link :deep(a) {
  color: white;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .artists-grid {
    flex-direction: column;
    align-items: center;
  }
}
</style>
