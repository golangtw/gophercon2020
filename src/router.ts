import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import CFP from './pages/CFP.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/taigi2019/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cfp',
      name: 'CFP',
      component: CFP
    }
  ]
});
