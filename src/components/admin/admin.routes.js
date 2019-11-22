import admin from './admin.vue';
import kit from './kit.vue';
import hero from './hero.vue';

export default [
  {
    path:'/admin',
    component: admin,
    children: [
      {
        path:'',
        redirect: 'hero'
      },
      {
        path:'hero',
        component: hero
      },
      {
        path:'kit',
        component: kit
      },
    ]
  }
]
