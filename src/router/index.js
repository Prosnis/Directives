import { createRouter, createWebHistory } from 'vue-router';

import HomePageView from '../views/homePageView.vue'
import VtextView from '../views/v-textView.vue'
import VhtmlView from '../views/v-htmlView.vue'
import VshowView from '../views/v-showView.vue'
import VifView from '../views/v-ifView.vue'
import VelseIfView from '../views/v-else-ifView.vue'
import VforView from '../views/v-forView.vue'
import VonView from '../views/v-onView.vue'
import VbindView from '../views/v-bindView.vue'
import VmodelView from '../views/v-modelView.vue'
import VslotlView from '../views/v-slotView.vue'
import VprelView from '../views/v-preView.vue'
import VcloaklView from '../views/v-cloakView.vue'
import VmemolView from '../views/v-memoView.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomePageView
      },
      {
        name: 'v-text',
        path: '/v-text',
        component: VtextView
      },
      {
        name: 'v-html',
        path: '/v-html',
        component: VhtmlView
      },
      {
        name: 'v-show',
        path: '/v-show',
        component: VshowView
      },
      {
        name: 'v-if',
        path: '/v-if',
        component: VifView
      },
      {
        name: 'v-else-if',
        path: '/v-else-if',
        component: VelseIfView
      },
      {
        name: 'v-for',
        path: '/v-for',
        component: VforView
      },
      {
        name: 'v-on',
        path: '/v-on',
        component: VonView
      },
      {
        name: 'v-bind',
        path: '/v-bind',
        component: VbindView
      },
      {
        name: 'v-model',
        path: '/v-model',
        component: VmodelView
      },
      {
        name: 'v-slot',
        path: '/v-slot',
        component: VslotlView
      },
      {
        name: 'v-pre',
        path: '/v-pre',
        component: VprelView
      },
      {
        name: 'v-cloak',
        path: '/v-cloak',
        component: VcloaklView
      },
      {
        name: 'v-memo',
        path: '/v-memo',
        component: VmemolView
      },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;