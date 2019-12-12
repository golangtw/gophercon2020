import Vue from 'vue';
import Router from 'vue-router';
// import Home from './pages/Home.vue';
import CFP from './pages/CFP.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/2020/',
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/cfp',
      name: 'CFP',
      component: CFP
    },
    {
      path: '/',
      redirect: '/cfp'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.name === 'CFP' && to.query.popUp && to.hash) {
      const target = document.querySelector(`.popup-content>${to.hash}`) as HTMLElement;
      const popUp = document.querySelector(`.popup-content`) as HTMLElement;
      const popupPadding = 24;

      return window.scrollTo({
        top: target.offsetTop + popUp.offsetTop - popupPadding,
        behavior: 'smooth'
      });
    } else if (to.hash) {
      const target = document.querySelector(to.hash) as HTMLElement;

      return window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});
