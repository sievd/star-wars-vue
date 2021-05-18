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
    path: "/people/:id",
    component: () => import("@/views/PersonDetails/PersonDetailsPage.vue"),
  },
  {
    path: "/planets",
    component: () => import("@/views/Planets/PlanetsPage.vue"),
  },
  {
    path: "/planets/:id",
    component: () => import("@/views/PlanetDetails/PlanetDetailsPage.vue"),
  },
  {
    path: "/starships",
    component: () => import("@/views/Starships/StarshipsPage.vue"),
  },
  {
    path: "/starships/:id",
    component: () => import("@/views/StarshipDetails/StarshipDetailsPage.vue"),
  },
];
