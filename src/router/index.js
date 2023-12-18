import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact-form",
    name: "contact-form",
    component: Contact,
  },
  // Add a catch-all route to redirect to the home page for unknown routes
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
