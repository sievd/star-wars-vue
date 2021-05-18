export const routes = [
  {
    path: "/",
    component: () => import("@/views/Home/HomePage.vue"),
  },
  {
    path: "/people",
    component: () => import("@/views/People/PeoplePage.vue"),
  },
  {
    path: "/starships",
    component: () => import("@/views/Starships/StarshipsPage.vue"),
  },
  {
    path: "/planets",
    component: () => import("@/views/Planets/PlanetsPage.vue"),
  },
];
