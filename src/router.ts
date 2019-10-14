import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import CFP from './pages/CFP.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/2020/',
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
  ],
  scrollBehavior (to, from) {
    if (to.name === 'CFP' && to.hash) {
      return {
        selector: `.popup-content>${to.hash}`
      };
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});
