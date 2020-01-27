import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home.vue';
import Agenda from './pages/Agenda.vue';
import Activity from './pages/Activity.vue';
import Traffic from './pages/Traffic.vue';
import Venue from './pages/Venue.vue';
import Team from './pages/Team.vue';
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
      path: '/agenda',
      name: 'Agenda',
      component: Agenda
    },
    {
      path: '/agenda/:sid',
      name: 'AgendaView',
      component: Agenda
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/activity/:aid',
      name: 'ActivityView',
      component: Activity
    },
    {
      path: '/venue',
      name: 'Venue',
      component: Venue
    },
    {
      path: '/traffic',
      name: 'Traffic',
      component: Traffic
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/team/:tid',
      name: 'TeamView',
      component: Team
    },
    {
      path: '/cfp',
      name: 'CFP',
      component: CFP
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
