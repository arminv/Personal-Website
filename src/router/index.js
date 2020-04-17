import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Education from "../views/Education.vue";
import Experience from "../views/Experience.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "projects" */ "../views/Projects.vue")
  },
  {
    path: "/education",
    name: "Education",
    component: Education
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience
  }
];

const router = new VueRouter({
  routes
});

export default router;
