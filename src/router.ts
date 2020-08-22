import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import Agenda from "./pages/Agenda.vue";
import Activity from "./pages/Activity.vue";
import Traffic from "./pages/Traffic.vue";
import Venue from "./pages/Venue.vue";
import Team from "./pages/Team.vue";
import CFP from "./pages/CFP.vue";
import Sponsor from "./pages/Sponsor.vue";
import Staff from "@/components/Team/Staff.vue";

import { Route } from "vue-router";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      index: 0,
      label: "GopherCon TW",
      menuItem: false
    }
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda,
    meta: {
      index: 1,
      label: "議程資訊",
      menuItem: true
    }
  },
  {
    path: "/agenda/:sid",
    name: "AgendaView",
    component: Agenda,
    meta: {
      menuItem: false
    }
  },
  {
    path: "/activity",
    name: "Activity",
    component: Activity,
    meta: {
      index: 2,
      label: "活動",
      menuItem: false
    }
  },
  {
    path: "/activity/:aid",
    name: "ActivityView",
    component: Activity,
    meta: {
      menuItem: false
    }
  },
  {
    path: "/venue",
    name: "Venue",
    component: Venue,
    meta: {
      index: 3,
      label: "會場地圖",
      menuItem: true
    }
  },
  {
    path: "/traffic",
    name: "Traffic",
    component: Traffic,
    meta: {
      index: 4,
      label: "交通方式",
      menuItem: true
    }
  },
  {
    path: "/team/staff",
    name: "Staff",
    component: Team,
    meta: {
      index: 5,
      label: "GopherCon 團隊",
      menuItem: true
    },
    children: [
      {
        path: "/team/staff",
        name: "Team/Staff",
        component: Staff,
        meta: {
          index: 10,
          label: ["工作人員", "Staff"]
        }
      }
    ]
  },
  {
    path: "/sponsor",
    name: "Sponsor",
    component: Sponsor,
    meta: {
      label: "贊助",
      menuItem: true
    }
  }
];

const router = new Router({
  mode: "history",
  base: "/2020/",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const target = document.querySelector(to.hash) as HTMLElement;

      return window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    } else if (
      !(to.name === "Agenda" && from.name === "AgendaView") &&
      !(to.name === "AgendaView" && from.name === "Agenda")
    ) {
      return {
        x: 0,
        y: 0
      };
    }
  }
});

router.beforeEach((to: Route, from: Route, next: (...args: any[]) => any) => {
  if (from.path.startsWith("/activity") && to.path === "/activity") {
    next(false);
  } else {
    next();
  }
});

export default router;
