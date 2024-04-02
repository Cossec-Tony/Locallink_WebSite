import vuetify from '../plugins/vuetify'
import { createRouter, createWebHistory } from 'vue-router'
import myHome from '@/pages/myHome.vue'

export function registerPlugins (app) {
  app.use(vuetify)
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: myHome
  },
  // Autres routes peuvent être ajoutées ici
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;