<template>
  <div class="release-page">
    <!-- Release Header -->
    <section class="release-header">
      <div class="release-header-container">
        <h1 class="release-header-text">{{ $t('releaseTab') }}</h1>
      </div>
    </section>

    <!-- Release Albums Section -->
    <section class="release-album-sections">
      <!-- Release Card 1: Subverter, Einzig -->
      <div class="release-card">
        <div class="release-left">
          <div class="action-buttons">
            <a href="#" class="buy-btn" @click.prevent="handleBuy('Einzig')">{{ $t('buySingle') }} $3.99</a>
            <div class="share-button-group">
              <button class="share-main-button">{{ $t('shareSingle') }}</button>
              <div class="share-icons">
                <button class="share-icon-btn" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm2.992,6.408a0.3,0.3,0,0,1-.28.272H12.593a0.731,0.731,0,0,0-.909.886V8.8h1.953a0.261,0.261,0,0,1,.21.069,0.247,0.247,0,0,1,.07.2v2.112a0.3,0.3,0,0,1-.28.272H11.68V16.83a0.3,0.3,0,0,1-.28.272H9.237a0.3,0.3,0,0,1-.28-0.272V11.449H7.28A0.3,0.3,0,0,1,7,11.177V9.065A0.3,0.3,0,0,1,7.279,8.8H8.957V7.292a2.921,2.921,0,0,1,3.076-3.2h1.678a0.248,0.248,0,0,1,.05,0,0.253,0.253,0,0,1,.232.273V6.408Z"></path></svg></button>
                <button class="share-icon-btn" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5.669,8.49q0.008,0.163.008,0.327,0,0.059,0,.118A7.33,7.33,0,0,1,9.088,16,7.863,7.863,0,0,1,5,14.866a5.7,5.7,0,0,0,.636.034,5.546,5.546,0,0,0,3.313-1.08,2.656,2.656,0,0,1-2.491-1.755,2.817,2.817,0,0,0,1.2-.043,2.566,2.566,0,0,1-2.14-2.475V9.515a2.771,2.771,0,0,0,1.208.316,2.491,2.491,0,0,1-1.187-2.1A2.411,2.411,0,0,1,5.9,6.462,7.721,7.721,0,0,0,11.4,9.1a2.4,2.4,0,0,1-.067-0.576A2.6,2.6,0,0,1,14,6a2.736,2.736,0,0,1,1.947.8,5.527,5.527,0,0,0,1.694-.613,2.562,2.562,0,0,1-1.173,1.4A5.567,5.567,0,0,0,18,7.184,5.265,5.265,0,0,1,16.669,8.49Z"></path></svg></button>
                <button class="share-icon-btn" aria-label="Tumblr"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm4,16.274a4.6,4.6,0,0,1-1.442.581A8.809,8.809,0,0,1,12.117,17a3.873,3.873,0,0,1-1.369-.22,3,3,0,0,1-1.153-.654,3.416,3.416,0,0,1-.649-0.871,3.438,3.438,0,0,1-.216-1.38V9.3H7V7.486A4.5,4.5,0,0,0,8.441,6.76a3.211,3.211,0,0,0,.868-1.09A5.12,5.12,0,0,0,9.741,4h1.8V7.123H14.5V9.447H11.545v3.341c0,1.537.114,1.678,0.572,1.961a1.663,1.663,0,0,0,1.009.145A4.091,4.091,0,0,0,15,14.24v2.034Z"></path></svg></button>
                <button class="share-icon-btn" aria-label="Blogger"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M12.981,11.938H8.893a0.875,0.875,0,0,0,0,1.75h4.088a0.859,0.859,0,0,0,.912-0.875A0.881,0.881,0,0,0,12.981,11.938ZM11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5,12.374v0.439a3.142,3.142,0,0,1-.88,2.312A3.242,3.242,0,0,1,12.793,16H9.082a3.062,3.062,0,0,1-2.327-.812A3.257,3.257,0,0,1,6,12.75V8.688a2.912,2.912,0,0,1,.819-1.875A2.814,2.814,0,0,1,9.019,6h2.472a2.623,2.623,0,0,1,2.622,2.625,9.668,9.668,0,0,1-.063,1.25C15.781,9.921,16,11.718,16,12.374ZM9.145,9.751H11.3a0.805,0.805,0,0,0,.8-0.813A0.91,0.91,0,0,0,11.22,8H9.145A0.876,0.876,0,0,0,9.145,9.751Z"></path></svg></button>
              </div>
            </div>
          </div>
          <div class="album-cover">
            <img src="@/assets/images/home/cover2.avif" alt="Einzig Cover" />
          </div>
          <div class="track-info">
            <p class="track-title">{{ $t('releaseEinzigTitle') }}</p>
            <p class="track-artist">{{ $t('releaseEinzigArtist') }}</p>
          </div>
          <div class="audio-player">
            <div class="player-controls">
              <button class="play-btn" @click="playAudio('Einzig')">▶</button>
              <span>00:00</span>
              <div class="progress-bar"></div>
              <span>03:52</span>
            </div>
          </div>
          <div class="track-list">
            <div class="track-item active">
              <span class="track-number">1</span>
              <span class="track-name">Einzig</span>
            </div>
          </div>
        </div>
        
        <div class="release-right">
          <h2>{{ $t('releaseEinzigArtist') }}</h2>
          <p>{{ $t('releaseEinzigDesc') }}</p>
          <p><em>{{ $t('releaseEinzigDedication') }}</em></p>
          <p class="release-date">2025.2</p>
          
          <div class="music-links">
             <a href="https://music.apple.com/us/album/einzig-single/1795897618" target="_blank"><img src="https://static.wixstatic.com/media/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png" alt="Apple Music"></a>
             <a href="https://music.163.com/#/album?id=262623134" target="_blank"><img src="https://static.wixstatic.com/media/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png" alt="Netease"></a>
             <a href="https://open.spotify.com/album/4EY4LEndHo5R9kc30UXzYX" target="_blank"><img src="https://static.wixstatic.com/media/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png" alt="Spotify"></a>
             <a href="https://y.qq.com/n/ryqq/albumDetail/001DFyhi326yQx" target="_blank"><img src="https://static.wixstatic.com/media/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png" alt="Tencent"></a>
             <a href="https://music.youtube.com/playlist?list=OLAK5uy_kkVsLyMJ-8dkateCiLcgLTnZdscgAHdnE" target="_blank"><img src="https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png" alt="Youtube"></a>
             <a href="https://music.amazon.com/albums/B0DWXKNPP4" target="_blank"><img src="https://static.wixstatic.com/media/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png" alt="Amazon"></a>
          </div>
        </div>
      </div>

      <!-- Release Card 2: Our Journey -->
      <div class="release-card">
        <div class="release-left">
          <div class="action-buttons">
            <a href="#" class="buy-btn" @click.prevent="handleBuy('Our Journey')">{{ $t('getAlbum') }}</a>
            <div class="share-button-group">
              <button class="share-main-button">{{ $t('shareAlbum') }}</button>
              <div class="share-icons">
                <button class="share-icon-btn" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm2.992,6.408a0.3,0.3,0,0,1-.28.272H12.593a0.731,0.731,0,0,0-.909.886V8.8h1.953a0.261,0.261,0,0,1,.21.069,0.247,0.247,0,0,1,.07.2v2.112a0.3,0.3,0,0,1-.28.272H11.68V16.83a0.3,0.3,0,0,1-.28.272H9.237a0.3,0.3,0,0,1-.28-0.272V11.449H7.28A0.3,0.3,0,0,1,7,11.177V9.065A0.3,0.3,0,0,1,7.279,8.8H8.957V7.292a2.921,2.921,0,0,1,3.076-3.2h1.678a0.248,0.248,0,0,1,.05,0,0.253,0.253,0,0,1,.232.273V6.408Z"></path></svg></button>
                <button class="share-icon-btn" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5.669,8.49q0.008,0.163.008,0.327,0,0.059,0,.118A7.33,7.33,0,0,1,9.088,16,7.863,7.863,0,0,1,5,14.866a5.7,5.7,0,0,0,.636.034,5.546,5.546,0,0,0,3.313-1.08,2.656,2.656,0,0,1-2.491-1.755,2.817,2.817,0,0,0,1.2-.043,2.566,2.566,0,0,1-2.14-2.475V9.515a2.771,2.771,0,0,0,1.208.316,2.491,2.491,0,0,1-1.187-2.1A2.411,2.411,0,0,1,5.9,6.462,7.721,7.721,0,0,0,11.4,9.1a2.4,2.4,0,0,1-.067-0.576A2.6,2.6,0,0,1,14,6a2.736,2.736,0,0,1,1.947.8,5.527,5.527,0,0,0,1.694-.613,2.562,2.562,0,0,1-1.173,1.4A5.567,5.567,0,0,0,18,7.184,5.265,5.265,0,0,1,16.669,8.49Z"></path></svg></button>
                <button class="share-icon-btn" aria-label="Tumblr"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm4,16.274a4.6,4.6,0,0,1-1.442.581A8.809,8.809,0,0,1,12.117,17a3.873,3.873,0,0,1-1.369-.22,3,3,0,0,1-1.153-.654,3.416,3.416,0,0,1-.649-0.871,3.438,3.438,0,0,1-.216-1.38V9.3H7V7.486A4.5,4.5,0,0,0,8.441,6.76a3.211,3.211,0,0,0,.868-1.09A5.12,5.12,0,0,0,9.741,4h1.8V7.123H14.5V9.447H11.545v3.341c0,1.537.114,1.678,0.572,1.961a1.663,1.663,0,0,0,1.009.145A4.091,4.091,0,0,0,15,14.24v2.034Z"></path></svg></button>
                <button class="share-icon-btn" aria-label="Blogger"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M12.981,11.938H8.893a0.875,0.875,0,0,0,0,1.75h4.088a0.859,0.859,0,0,0,.912-0.875A0.881,0.881,0,0,0,12.981,11.938ZM11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5,12.374v0.439a3.142,3.142,0,0,1-.88,2.312A3.242,3.242,0,0,1,12.793,16H9.082a3.062,3.062,0,0,1-2.327-.812A3.257,3.257,0,0,1,6,12.75V8.688a2.912,2.912,0,0,1,.819-1.875A2.814,2.814,0,0,1,9.019,6h2.472a2.623,2.623,0,0,1,2.622,2.625,9.668,9.668,0,0,1-.063,1.25C15.781,9.921,16,11.718,16,12.374ZM9.145,9.751H11.3a0.805,0.805,0,0,0,.8-0.813A0.91,0.91,0,0,0,11.22,8H9.145A0.876,0.876,0,0,0,9.145,9.751Z"></path></svg></button>
              </div>
            </div>
          </div>
          <div class="album-cover">
            <img src="@/assets/images/home/cover1.avif" alt="Our Journey Cover" />
          </div>
          <div class="track-info">
            <p class="track-title">{{ currentOurJourneyTrack }}</p>
            <p class="track-artist">{{ $t('releaseOurJourneyArtist') }}</p>
          </div>
          <div class="audio-player">
             <div class="player-controls">
              <button class="play-btn" @click="playAudio(currentOurJourneyTrack)">▶</button>
              <span>00:00</span>
              <div class="progress-bar"></div>
              <span>{{ currentOurJourneyDuration }}</span>
            </div>
          </div>
          <div class="track-list scrollable">
            <div 
              class="track-item" 
              v-for="track in ourJourneyTracks" 
              :key="track.id"
              :class="{ active: currentOurJourneyTrack === track.name }"
              @click="selectTrack(track)"
            >
              <span class="track-number">{{ track.id }}</span>
              <span class="track-name">{{ track.name }}</span>
            </div>
          </div>
        </div>
        
        <div class="release-right">
          <h2>{{ $t('releaseOurJourneyTitle') }}</h2>
          <p>{{ $t('releaseOurJourneyDesc1') }}</p>
          <p>{{ $t('releaseOurJourneyDesc2') }}</p>
          <p class="release-date">2025.1</p>
          
          <div class="music-links">
             <a href="https://music.apple.com/us/album/our-journey-intro/1792498396?" target="_blank"><img src="https://static.wixstatic.com/media/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png" alt="Apple Music"></a>
             <a href="https://music.163.com/#/album?id=260757587" target="_blank"><img src="https://static.wixstatic.com/media/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png" alt="Netease"></a>
             <a href="https://open.spotify.com/album/0RCxkmnqdsPnkwkmrohGfE" target="_blank"><img src="https://static.wixstatic.com/media/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png" alt="Spotify"></a>
             <a href="https://y.qq.com/n/ryqq/albumDetail/0043Kkzr2Kx6Sh" target="_blank"><img src="https://static.wixstatic.com/media/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png" alt="Tencent"></a>
             <a href="https://music.youtube.com/playlist?list=OLAK5uy_khCKGJuPDbshJGk9W3HC5s5-Or_7o6ak4" target="_blank"><img src="https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png" alt="Youtube"></a>
             <a href="https://music.amazon.com/albums/B0DTYXPT46" target="_blank"><img src="https://static.wixstatic.com/media/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png" alt="Amazon"></a>
          </div>
        </div>
      </div>

      <!-- Release Card 3: Rinocchio, Late Night Tequila -->
      <div class="release-card">
        <div class="release-left">
          <div class="action-buttons">
            <a href="#" class="buy-btn" @click.prevent="handleBuy('Late Night Tequila')">{{ $t('buySingle') }} $19.99</a>
            <div class="share-button-group">
              <button class="share-main-button">{{ $t('shareSingle') }}</button>
              <div class="share-icons">
                <button class="share-icon-btn" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm2.992,6.408a0.3,0.3,0,0,1-.28.272H12.593a0.731,0.731,0,0,0-.909.886V8.8h1.953a0.261,0.261,0,0,1,.21.069,0.247,0.247,0,0,1,.07.2v2.112a0.3,0.3,0,0,1-.28.272H11.68V16.83a0.3,0.3,0,0,1-.28.272H9.237a0.3,0.3,0,0,1-.28-0.272V11.449H7.28A0.3,0.3,0,0,1,7,11.177V9.065A0.3,0.3,0,0,1,7.279,8.8H8.957V7.292a2.921,2.921,0,0,1,3.076-3.2h1.678a0.248,0.248,0,0,1,.05,0,0.253,0.253,0,0,1,.232.273V6.408Z"></path></svg></button>
                <button class="share-icon-btn" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5.669,8.49q0.008,0.163.008,0.327,0,0.059,0,.118A7.33,7.33,0,0,1,9.088,16,7.863,7.863,0,0,1,5,14.866a5.7,5.7,0,0,0,.636.034,5.546,5.546,0,0,0,3.313-1.08,2.656,2.656,0,0,1-2.491-1.755,2.817,2.817,0,0,0,1.2-.043,2.566,2.566,0,0,1-2.14-2.475V9.515a2.771,2.771,0,0,0,1.208.316,2.491,2.491,0,0,1-1.187-2.1A2.411,2.411,0,0,1,5.9,6.462,7.721,7.721,0,0,0,11.4,9.1a2.4,2.4,0,0,1-.067-0.576A2.6,2.6,0,0,1,14,6a2.736,2.736,0,0,1,1.947.8,5.527,5.527,0,0,0,1.694-.613,2.562,2.562,0,0,1-1.173,1.4A5.567,5.567,0,0,0,18,7.184,5.265,5.265,0,0,1,16.669,8.49Z"></path></svg></button>
                <button class="share-icon-btn" aria-label="Tumblr"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm4,16.274a4.6,4.6,0,0,1-1.442.581A8.809,8.809,0,0,1,12.117,17a3.873,3.873,0,0,1-1.369-.22,3,3,0,0,1-1.153-.654,3.416,3.416,0,0,1-.649-0.871,3.438,3.438,0,0,1-.216-1.38V9.3H7V7.486A4.5,4.5,0,0,0,8.441,6.76a3.211,3.211,0,0,0,.868-1.09A5.12,5.12,0,0,0,9.741,4h1.8V7.123H14.5V9.447H11.545v3.341c0,1.537.114,1.678,0.572,1.961a1.663,1.663,0,0,0,1.009.145A4.091,4.091,0,0,0,15,14.24v2.034Z"></path></svg></button>
                <button class="share-icon-btn" aria-label="Blogger"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#282828" d="M12.981,11.938H8.893a0.875,0.875,0,0,0,0,1.75h4.088a0.859,0.859,0,0,0,.912-0.875A0.881,0.881,0,0,0,12.981,11.938ZM11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm5,12.374v0.439a3.142,3.142,0,0,1-.88,2.312A3.242,3.242,0,0,1,12.793,16H9.082a3.062,3.062,0,0,1-2.327-.812A3.257,3.257,0,0,1,6,12.75V8.688a2.912,2.912,0,0,1,.819-1.875A2.814,2.814,0,0,1,9.019,6h2.472a2.623,2.623,0,0,1,2.622,2.625,9.668,9.668,0,0,1-.063,1.25C15.781,9.921,16,11.718,16,12.374ZM9.145,9.751H11.3a0.805,0.805,0,0,0,.8-0.813A0.91,0.91,0,0,0,11.22,8H9.145A0.876,0.876,0,0,0,9.145,9.751Z"></path></svg></button>
              </div>
            </div>
          </div>
          <div class="album-cover">
            <img src="@/assets/images/home/cover3.avif" alt="Late Night Tequila Cover" />
          </div>
          <div class="track-info">
            <p class="track-title long-title">{{ $t('releaseLNTTrackTitle') }}</p>
            <p class="track-artist">{{ $t('releaseLNTArtist') }}</p>
          </div>
          <div class="audio-player">
             <div class="player-controls">
              <button class="play-btn" @click="playAudio('Late Night Tequila 满月')">▶</button>
              <span>00:00</span>
              <div class="progress-bar"></div>
              <span>02:58</span>
            </div>
          </div>
          <div class="track-list">
            <div class="track-item active">
              <span class="track-number">1</span>
              <span class="track-name">{{ $t('releaseLNTTrackTitle') }}</span>
              <button class="get-track-btn">￥19.99</button>
            </div>
          </div>
        </div>
        
        <div class="release-right">
          <h2>{{ $t('releaseLNTTitle') }}</h2>
          <p>{{ $t('releaseLNTDesc1') }}</p>
          <p>{{ $t('releaseLNTDesc2') }}</p>
          <p>{{ $t('releaseLNTDesc3') }}</p>
          <p class="release-date">2024.12</p>
          
          <div class="music-links">
             <a href="https://music.apple.com/us/album/late-night-tequila-%E6%BB%A1%E6%9C%88/1783455299?i=1783455300" target="_blank"><img src="https://static.wixstatic.com/media/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6dbf0c0e4cbe46a4a008babbf098d93a~mv2.png" alt="Apple Music"></a>
             <a href="https://music.163.com/#/album?id=255920607" target="_blank"><img src="https://static.wixstatic.com/media/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_0b0d39038f5b4716bd7de99fa94a28f0~mv2.png" alt="Netease"></a>
             <a href="https://open.spotify.com/album/2KpuAdEcQkqjOZ4xGpGDbx" target="_blank"><img src="https://static.wixstatic.com/media/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_91072dd18f6c4c4c9542d60b31ec5b1b~mv2.png" alt="Spotify"></a>
             <a href="https://y.qq.com/n/ryqq/albumDetail/000q3m3D3R76xC" target="_blank"><img src="https://static.wixstatic.com/media/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/148e1c_d058365329b4412ca84b672a8205e7c3~mv2.png" alt="Tencent"></a>
             <a href="https://music.youtube.com/playlist?list=OLAK5uy_ka17I6GtE1AQ1eyJk2i6ifxpFQVY2HRg4" target="_blank"><img src="https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png" alt="Youtube"></a>
             <a href="https://music.amazon.com/albums/B0DPM1WJ66" target="_blank"><img src="https://static.wixstatic.com/media/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f5e5de55f82c4d58ba47f63eea285cd5~mv2.png" alt="Amazon"></a>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const currentAudio = ref<HTMLAudioElement | null>(null);

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

function selectTrack(track: { name: string, duration: string }) {
  currentOurJourneyTrack.value = track.name;
  currentOurJourneyDuration.value = track.duration;
  playAudio(track.name);
}

function handleBuy(albumName: string) {
  // Placeholder for future payment redirection logic
  console.log(`Redirecting to purchase for: ${albumName}`);
  alert(`Payment gateway for ${albumName} is coming soon!`);
}

function playAudio(trackName: string) {
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
</script>

<style scoped>
.release-page {
  background-color: #111;
  color: white;
  padding-bottom: 80px;
  font-family: 'Noto Serif SC', serif;
}

/* ... header styles ... */
.release-header {
  height: 210px;
  display: flex;
  justify-content: center;
  background-color: black;
}

.release-header-container {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.release-header-text {
  font-size: 80px;
  font-family: 'Source Han Sans SC', sans-serif;
  color: whitesmoke;
  font-weight: 250;
}

/* Release Sections */
.release-album-sections {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Uniform background, removing gap between sections visually if needed, but card approach is usually separate */
.release-card {
  display: flex;
  gap: 40px;
  background-color: transparent; /* Transparent so right side blends with page */
  padding: 0; /* Remove padding from wrapper */
  align-items: flex-start; 
}

.release-left {
  flex: 0 0 320px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: black; /* Card background for left side */
  padding: 20px;
  border-radius: 8px;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buy-btn, .share-main-button {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 5px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
}

.buy-btn:hover, .share-main-button:hover {
  background-color: white;
  color: black;
}

/* Share Dropdown */
.share-button-group {
  position: relative;
  /* Add padding to bridge the gap to the dropdown */
  padding-bottom: 10px;
  margin-bottom: -10px;
}

.share-icons {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 5px;
  border-radius: 4px;
  flex-direction: column;
  gap: 5px;
  z-index: 10;
  margin-top: 0; /* Connected directly or slightly overlapping */
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  
  /* Keep visible for a bit after hover */
  transition: opacity 0.3s, visibility 0.3s;
}

/* Use visibility/opacity for transition if we want a true delay, 
   but simple CSS hover delay is often done with transition-delay on the "hide" state */

/* For a pure CSS "buffer":
   We can use a transparent pseudo-element to bridge the gap if there is one,
   or just transition visibility/opacity with a delay on the non-hover state.
*/

.share-icons {
  /* Initially hidden */
  opacity: 0;
  visibility: hidden;
  display: flex; /* Always flex layout, hide via opacity/visibility */
  transition: opacity 0.2s ease-in-out, visibility 0.2s;
  /* Delay hiding */
  transition-delay: 0.5s; 
}

.share-button-group:hover .share-icons,
.share-icons:hover {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s; /* Show immediately */
}

.share-icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.share-icon-btn:hover svg path {
  fill: #555;
}

.album-cover img {
  width: 100%;
  height: auto;
  display: block;
  /* Optional: align visually */
}

.track-info {
  text-align: center;
}

.track-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 5px;
  /* Width constraint for ALL titles to align */
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.3;
}

/* Specific constraint for Late Night Tequila title to align with image */
.track-title.long-title {
  /* Inherits from .track-title now */
}

.track-artist {
  font-size: 0.9rem;
  color: #ccc;
}

.audio-player {
  background-color: #222;
  padding: 10px;
  border-radius: 4px;
}

.player-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8rem;
  color: #aaa;
}

.play-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

.progress-bar {
  flex: 1;
  height: 4px;
  background-color: #444;
  border-radius: 2px;
}

.track-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.track-list.scrollable {
  max-height: 200px;
  overflow-y: auto;
  padding-right: 5px;
}

.track-list.scrollable::-webkit-scrollbar {
  width: 4px;
}

.track-list.scrollable::-webkit-scrollbar-thumb {
  background-color: #444;
  border-radius: 2px;
}

.track-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  font-size: 0.9rem;
  border-bottom: 1px solid #333;
  cursor: pointer; /* Indicate clickable */
}

.track-item:hover {
  background-color: #1a1a1a;
}

.track-item.active {
  background-color: #222;
}

.track-number {
  color: #888;
  width: 20px;
}

.track-name {
  flex: 1;
  text-align: left;
  padding-left: 10px;
}

.get-track-btn {
  background-color: transparent;
  border: 1px solid #666;
  color: #ccc;
  padding: 2px 8px;
  font-size: 0.8rem;
  cursor: pointer;
}

.get-track-btn:hover {
  border-color: white;
  color: white;
}

.release-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* Align text vertically center relative to left block, but with pleasing spacing */
  padding-top: 60px; 
  /* Constrain width for aesthetic alignment */
  max-width: 600px;
}

.release-right h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: normal;
  max-width: 400px;
}

.release-right p {
  margin-bottom: 15px;
  line-height: 1.8;
  color: #ddd;
}

.release-date {
  color: #aaa;
  font-size: 0.9rem;
  margin-top: 20px;
}

.music-links {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.music-links img {
  width: 25px;
  height: 25px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.music-links img:hover {
  opacity: 1;
}

@media (max-width: 900px) {
  .release-card {
    flex-direction: column;
    align-items: center;
  }
  
  .release-left {
    width: 100%;
    max-width: 400px;
  }
  
  .release-right {
    text-align: center;
    padding-top: 20px;
    max-width: 100%;
  }
  
  .music-links {
    justify-content: center;
  }
}
</style>
