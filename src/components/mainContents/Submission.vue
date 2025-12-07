<template>
  <div class="submission-page">
    <!-- Header Section -->
    <section class="submission-header">
      <!-- Image Container -->
      <div class="submission-header-image">
        <img src="@/assets/images/Submission/Marble.avif" alt="Submission Header Background" />
      </div>
      
      <!-- Content Container (Overlaps the image) -->
      <div class="submission-header-content">
        <h1 class="submission-title">{{ $t('submissionTitle') }}</h1>
        <div class="submission-intro">
          <p>{{ $t('submissionIntro') }}</p>
        </div>
      </div>
    </section>

    <!-- Join Artists Features Section (Newly Added) -->
    <section class="join-artists-section">
      <h2 class="join-title">{{ $t('submissionJoinTitle') }}</h2>
      <div class="join-divider"></div>
      <p class="join-subtitle">{{ $t('submissionJoinSubtitle') }}</p>
      
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">
            <!-- Icon for Cooperation -->
            <svg viewBox="0 0 200 200" width="100" height="100">
               <path fill="white" d="M100 29.5c-38.874 0-70.5 31.626-70.5 70.5s31.626 70.5 70.5 70.5 70.5-31.626 70.5-70.5-31.626-70.5-70.5-70.5zm0 133c-34.463 0-62.5-28.038-62.5-62.5S65.537 37.5 100 37.5s62.5 28.038 62.5 62.5-28.037 62.5-62.5 62.5zm29.8-46.8c-.456.608-11.387 14.9-29.8 14.9s-29.344-14.292-29.8-14.9a4 4 0 0 1 6.393-4.81c.091.12 9.073 11.711 23.407 11.711 14.336 0 23.318-11.594 23.407-11.711a4.006 4.006 0 0 1 5.599-.776 3.994 3.994 0 0 1 .794 5.586zM73.583 80.05c0-3.59 2.877-6.5 6.467-6.5h.066a6.5 6.5 0 1 1 0 13c-3.59 0-6.533-2.91-6.533-6.5zm39.9 0c0-3.59 2.877-6.5 6.467-6.5h.066a6.5 6.5 0 1 1 0 13c-3.59 0-6.533-2.91-6.533-6.5z"/>
            </svg>
          </div>
          <h3>{{ $t('submissionFeature1') }}</h3>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <!-- Icon for 75% Royalty -->
            <svg viewBox="0 0 200 200" width="100" height="100">
               <g>
                <path fill="#0E4828" d="M93.299 155C66.116 155 44 132.927 44 105.797s22.116-49.203 49.299-49.203c5.463 0 10.83.887 15.954 2.634a3.371 3.371 0 0 1 2.104 4.28l-12.72 37.122 37.567-11.547a3.376 3.376 0 0 1 4.221 2.229 49.128 49.128 0 0 1 2.172 14.485c0 27.13-22.115 49.203-49.298 49.203zm0-91.666c-23.46 0-42.545 19.049-42.545 42.463S69.84 148.26 93.299 148.26s42.545-19.049 42.545-42.463c0-3.127-.339-6.222-1.01-9.241l-40.542 12.461a3.375 3.375 0 0 1-4.189-4.312l13.725-40.063a42.74 42.74 0 0 0-10.529-1.308z"/>
                <path fill="#E98866" d="M155.965 75.444c-4.383-14.221-15.426-25.586-29.539-30.402a.795.795 0 0 0-1.007.493l-14.862 43.379a.792.792 0 0 0 .983 1.012l43.899-13.494a.79.79 0 0 0 .526-.988z"/>
               </g>
            </svg>
          </div>
          <h3>{{ $t('submissionFeature2') }}</h3>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <!-- Icon for Team -->
            <svg viewBox="0 0 200 200" width="100" height="100">
               <path fill="white" d="M100 29.5c-38.874 0-70.5 31.626-70.5 70.5 0 38.874 31.626 70.5 70.5 70.5s70.5-31.626 70.5-70.5c0-38.874-31.626-70.5-70.5-70.5zM162.358 96h-31.93a105.684 105.684 0 0 0-21.335-57.831C137.968 42.397 160.48 66.437 162.358 96zm-84.785 8h44.854A97.706 97.706 0 0 1 100 160.416 97.706 97.706 0 0 1 77.573 104zm0-8A97.706 97.706 0 0 1 100 39.584 97.706 97.706 0 0 1 122.427 96H77.573zm13.333-57.831A105.683 105.683 0 0 0 69.572 96h-31.93c1.878-29.563 24.39-53.603 53.264-57.831zM37.642 104h31.93a105.684 105.684 0 0 0 21.335 57.831C62.032 157.603 39.52 133.563 37.642 104zm71.452 57.831A105.692 105.692 0 0 0 130.429 104h31.93c-1.879 29.563-24.391 53.603-53.265 57.831z"/>
            </svg>
          </div>
          <h3>{{ $t('submissionFeature3') }}</h3>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <!-- Icon for Licensing -->
            <svg viewBox="0 0 200 200" width="100" height="100">
               <path fill="white" d="M163.126 85.006a3.966 3.966 0 0 0-3.595-2.306h-55.034l6.056-48.703a4.005 4.005 0 0 0-2.355-4.166 3.947 3.947 0 0 0-4.629 1.104l-66.146 79.8a4.024 4.024 0 0 0-.549 4.259 3.966 3.966 0 0 0 3.595 2.306h55.034l-6.056 48.703a4.005 4.005 0 0 0 2.355 4.166 3.95 3.95 0 0 0 4.628-1.104l66.146-79.8a4.023 4.023 0 0 0 .55-4.259zm-64.123 68.477 4.935-39.686a4.023 4.023 0 0 0-.962-3.145 3.956 3.956 0 0 0-2.976-1.353H48.956l52.041-62.783-4.935 39.686a4.023 4.023 0 0 0 .962 3.145A3.956 3.956 0 0 0 100 90.7h51.044l-52.041 62.783z"/>
            </svg>
          </div>
          <h3>{{ $t('submissionFeature4') }}</h3>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <!-- Icon for Cooperation 2 -->
            <svg viewBox="0 0 200 200" width="100" height="100">
               <path fill="white" d="M100 29.5c-38.874 0-70.5 31.626-70.5 70.5s31.626 70.5 70.5 70.5 70.5-31.626 70.5-70.5-31.626-70.5-70.5-70.5zm0 133c-34.463 0-62.5-28.037-62.5-62.5S65.537 37.5 100 37.5s62.5 28.037 62.5 62.5-28.037 62.5-62.5 62.5zm0-106.4c-24.207 0-43.9 19.693-43.9 43.9s19.693 43.9 43.9 43.9 43.9-19.693 43.9-43.9-19.693-43.9-43.9-43.9zm0 79.8c-19.796 0-35.9-16.104-35.9-35.9S80.204 64.1 100 64.1s35.9 16.104 35.9 35.9-16.104 35.9-35.9 35.9zm0-53.2c-9.539 0-17.3 7.761-17.3 17.3s7.761 17.3 17.3 17.3 17.3-7.761 17.3-17.3-7.761-17.3-17.3-17.3zm0 26.6c-5.128 0-9.3-4.172-9.3-9.3s4.172-9.3 9.3-9.3 9.3 4.172 9.3 9.3-4.172 9.3-9.3 9.3z"/>
            </svg>
          </div>
          <h3>{{ $t('submissionFeature5') }}</h3>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <!-- Icon for Support -->
            <svg viewBox="0 0 200 200" width="100" height="100">
               <path fill="white" d="M140.805 167c-.63 0-1.263-.151-1.843-.457L100 145.986l-38.962 20.558a3.947 3.947 0 0 1-4.181-.31 4.014 4.014 0 0 1-1.577-3.912l7.436-43.497-31.51-30.793a4.02 4.02 0 0 1-1.013-4.102 3.98 3.98 0 0 1 3.207-2.728l43.564-6.388 19.478-39.59C97.111 33.862 98.49 33 100 33s2.889.862 3.559 2.224l19.478 39.59 43.564 6.388a3.981 3.981 0 0 1 3.207 2.728 4.021 4.021 0 0 1-1.013 4.102l-31.51 30.793 7.436 43.497a4.013 4.013 0 0 1-1.577 3.912 3.952 3.952 0 0 1-2.339.766zM100 137.47a3.94 3.94 0 0 1 1.843.457l33.684 17.773-6.428-37.598a4.018 4.018 0 0 1 1.149-3.549l27.224-26.604-37.641-5.52a3.969 3.969 0 0 1-2.986-2.182L100 46.009 83.155 80.246a3.972 3.972 0 0 1-2.986 2.182l-37.641 5.52 27.224 26.604a4.016 4.016 0 0 1 1.149 3.549L64.472 155.7l33.684-17.773a3.96 3.96 0 0 1 1.844-.457z"/>
            </svg>
          </div>
          <h3>{{ $t('submissionFeature6') }}</h3>
        </div>
      </div>
    </section>

    <!-- Artist Types Section (Newly Added) -->
    <section class="artist-types-section">
      <h2 class="types-title">{{ $t('submissionTypesTitle') }}</h2>
      
      <div class="types-list">
        <div class="type-item">
          <span class="type-number">01.</span>
          <div class="type-content">
            <h3>{{ $t('submissionType1') }}</h3>
          </div>
        </div>
        <div class="type-divider"></div>
        
        <div class="type-item">
          <span class="type-number">02.</span>
          <div class="type-content">
            <h3>{{ $t('submissionType2') }}</h3>
          </div>
        </div>
        <div class="type-divider"></div>

        <div class="type-item">
          <span class="type-number">03.</span>
          <div class="type-content">
            <h3>{{ $t('submissionType3') }}</h3>
            <p>{{ $t('submissionType3Desc') }}</p>
          </div>
        </div>
        <div class="type-divider"></div>

        <div class="type-item">
          <span class="type-number">04.</span>
          <div class="type-content">
            <h3>{{ $t('submissionType4') }}</h3>
          </div>
        </div>
        <div class="type-divider"></div>
      </div>
    </section>

    <!-- Submission Form Section -->
    <section class="submission-form-section">
      <h2 class="form-title">{{ $t('submissionFormTitle') }}</h2>
      <div class="form-divider"></div>
      <p class="form-subtitle">{{ $t('submissionFormSubtitle') }}</p>

      <form class="submission-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="artistName">{{ $t('submissionLabelArtistName') }}</label>
          <input type="text" id="artistName" v-model="form.artistName" required />
        </div>

        <div class="form-group">
          <label for="email">{{ $t('submissionLabelEmail') }}</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="wechat">{{ $t('submissionLabelWechat') }}</label>
          <input type="text" id="wechat" v-model="form.wechat" />
        </div>

        <div class="form-group">
          <label for="idea">{{ $t('submissionLabelIdea') }}</label>
          <textarea id="idea" v-model="form.idea" rows="4"></textarea>
        </div>

        <div class="form-group file-upload">
          <label class="upload-label" for="file-upload">
            <span class="upload-icon">+</span>
            <span class="upload-text">{{ form.fileName || $t('submissionUploadText') }}</span>
          </label>
          <input type="file" id="file-upload" @change="handleFileChange" accept=".mp3,.wav,.demo" style="display: none;" />
        </div>

        <div class="form-actions">
          <button type="submit" class="submit-btn">{{ $t('submissionSendBtn') }}</button>
        </div>

        <p class="form-footer-text">{{ $t('submissionFooterText') }}</p>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  artistName: '',
  email: '',
  wechat: '',
  idea: '',
  fileName: '',
  file: null as File | null
});

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
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
</script>

<style scoped>
.submission-page {
  background-color: #000;
  color: white;
  font-family: "Noto Serif SC", serif;
  padding-bottom: 80px;
}

/* Header Section */
.submission-header {
  position: relative;
  /* Increase height to match desired spacing shown in screenshot */
  height: 600px;
  background-color: #000; /* Page background */
  overflow: visible; /* Allow content to potentially overlap boundaries if needed */
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align content to right side initially */
}

/* Image is positioned on the right, taking up ~60% width, 
   but "losing resolution because the image is too wide" implies we need to constrain it or use object-fit better.
   The user said "allow the background color to be the same across the page, then put the image ontop".
*/
.submission-header-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%; /* Restrict width to avoid stretching too far */
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.submission-header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures it covers the area without distortion */
  opacity: 1;
  /* User mentioned "boundary of where the marble image will extend to" */
  /* We let it align right. */
}

/* Content box overlaps the image from the left */
.submission-header-content {
  position: relative;
  z-index: 2;
  /* Box width approx 40-50% */
  width: 500px; 
  background-color: #1a1a1a; /* Dark grey box color matching design */
  padding: 60px;
  /* Positioning: absolute left or relative margin? 
     Design shows it starting from left and overlapping image.
  */
  margin-right: auto; /* Push to left */
  margin-left: 10%;   /* Spacing from left screen edge */
  
  /* Vertical centering handled by flex container */
}

.submission-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: normal;
  line-height: 1.2;
  color: white;
}

.submission-intro p {
  font-size: 0.9rem;
  line-height: 1.8;
  color: #ccc;
}

@media (max-width: 1024px) {
  .submission-header {
    flex-direction: column;
    height: auto;
    padding-top: 0;
  }

  .submission-header-image {
    position: relative;
    width: 100%;
    height: 300px;
  }

  .submission-header-content {
    width: 90%;
    margin: -50px auto 0; /* Overlap upwards on mobile */
    padding: 40px 20px;
  }
}

/* Join Artists Section */
.join-artists-section {
  text-align: center;
  padding: 80px 20px;
  background-color: #111; /* Slightly distinct background */
}

.join-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.join-divider {
  height: 1px;
  background-color: #fff;
  width: 60px;
  margin: 0 auto 30px;
}

.join-subtitle {
  font-size: 1.2rem;
  color: #ddd;
  margin-bottom: 60px;
}

.features-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px; /* Increased gap for wider spread */
  max-width: 1400px; /* Increased max-width */
  margin: 0 auto;
}

.feature-item {
  width: 350px; /* Increased width */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-icon svg {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.feature-item h3 {
  font-size: 1.2rem;
  font-weight: normal;
}

/* Artist Types Section */
.artist-types-section {
  padding: 80px 20px;
  background-color: #000;
  text-align: left;
}

.types-title {
  font-size: 2.5rem;
  margin-bottom: 60px;
  text-align: left;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  color: #ccc; /* Slightly muted title color based on assumption or design */
}

.types-list {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 20px;
}

.type-item {
  flex: 1;
  min-width: 200px;
}

.type-number {
  font-size: 2rem;
  font-family: sans-serif;
  color: #fff;
  display: block;
  margin-bottom: 15px;
  font-weight: bold;
}

.type-content h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.type-content p {
  font-size: 0.9rem;
  color: #aaa;
}

.type-divider {
  width: 100%;
  height: 1px;
  background-color: #333;
  margin-top: 20px;
  display: block; /* Show horizontal line below each if wrapping, or handled differently */
}

/* Responsive adjustments for types */
@media (min-width: 768px) {
  .type-divider {
    display: none; /* Hide divider in row mode, or use it as vertical? */
  }
  
  .type-item {
    border-top: 1px solid #fff; /* Top line style */
    padding-top: 20px;
  }
}


/* Form Section */
.submission-form-section {
  max-width: 800px;
  margin: 60px auto 0;
  padding: 0 20px;
  text-align: center;
}

.form-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.form-divider {
  height: 1px;
  background-color: #fff;
  width: 60px;
  margin: 0 auto 30px;
}

.form-subtitle {
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 40px;
  line-height: 1.5;
}

.submission-form {
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #ccc;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group textarea {
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #555;
  color: white;
  font-size: 1rem;
  border-radius: 0;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #fff;
  outline: none;
}

/* File Upload Styling */
.file-upload {
  margin-top: 30px;
}

.upload-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  border: 1px dashed #555;
  cursor: pointer;
  transition: border-color 0.3s;
  color: #aaa;
}

.upload-label:hover {
  border-color: #fff;
  color: #fff;
}

.upload-icon {
  font-size: 1.5rem;
}

.form-actions {
  margin-top: 40px;
  text-align: center;
}

.submit-btn {
  background-color: #fff;
  color: #000;
  border: none;
  padding: 10px 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #ddd;
}

.form-footer-text {
  margin-top: 20px;
  text-align: center;
  font-size: 0.8rem;
  color: #777;
}
</style>
