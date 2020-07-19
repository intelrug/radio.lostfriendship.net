import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '~/pages/main/main.vue';
import GeoPage from '~/pages/geo/geo.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'main',
        redirect: '/geo',
        component: MainPage,
      },
      {
        path: '/geo',
        name: 'geo',
        component: GeoPage,
      },
      {
        path: '*',
        redirect: '/',
      },
    ],
  });
}