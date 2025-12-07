import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/mainContents/Home.vue';
import Release from '@/components/mainContents/Release.vue';
import Submission from '@/components/mainContents/Submission.vue';
import AboutIntro from '@/components/mainContents/AboutIntro.vue';
import AboutArtists from '@/components/mainContents/AboutArtists.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/release', component: Release },
  { path: '/submission', component: Submission },
  { path: '/about-intro', component: AboutIntro },
  { path: '/about-artists', component: AboutArtists },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
