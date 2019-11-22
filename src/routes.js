import landingPage from './components/landing-page.vue';
import login from './components/login.vue';
import about from './components/aboutus.vue';

import adminRoutes from './components/admin/admin.routes';

export default [
  {
    path:'/',
    component: landingPage
  },
  {
    path:'/login',
    component: login
  },
  {
    path:'/about',
    component: about
  },
  ...adminRoutes
]
