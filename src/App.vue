<template>
  <div id="app">
    <div class="nav-container">
      <Navbar class="navbar" />
    </div>
    <transition name="router-anim" enter-active-class="animated fadeIn">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style>
/* Dark-Light Mode: */
:root {
  --bg-color: #18181e;
  --gold-color: #dec79b;
  --content-color: whitesmoke;
  /* --project-color: #4a4a52; */
  --project-color: #54545e;
  --timeline-years: lightblue;
}
[data-theme="light"] {
  --bg-color: whitesmoke;
  /* --gold-color: #d6a242; */
  --gold-color: #b88f43;
  --content-color: #18181e;
  /* --project-color: #2a2a30; */
  --project-color: #18181ecc;
  --timeline-years: darkblue;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--content-color);
  background: var(--bg-color);
}

body {
  background: var(--bg-color);
}

.animated {
  animation-duration: 3s;
}

.page h1 {
  color: var(--gold-color);
  margin-bottom: 1.5vh;
  font-family: "Roboto", serif;
  font-weight: 500;
  font-size: 30px;
}

.page li {
  color: var(--content-color);
}

.text-chip {
  font-weight: 400 !important;
}

/* -------MOBILE NAVBAR--------- */
.activeMenuResponsive {
  margin-bottom: 6rem;
}

.vs-navbar--btn-responsive {
  background-color: -var(--content-color) !important;
}

.btn-responsive-line {
  background: var(--content-color) !important;
}
/* ---------TIMELINES-------- */
/* Set font-family of timelines (according to the docs): */
[class^="gb-"]:not(.gb-base-icon) {
  font-family: "Roboto", sans-serif, Arial, Helvetica !important;
  max-width: 70vw;
}

.timeline-top {
  padding-top: 3em;
  padding-bottom: 3em;
}

/* Shrink the thumbnail size: */
.gb-vue-timeline-update__thumbnail {
  max-width: 50vw !important;
  max-height: 10vh !important;
  margin-right: 5px !important;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.gb-vue-timeline-update__title {
  color: var(--gold-color);
}

.gb-vue-timeline-update--dark
  .gb-vue-timeline-update__center
  .gb-vue-timeline-update__bullet {
  box-shadow: 0 1px 5px 0 #ffffff7c !important;
}

/* CSS Animations: */
@keyframes navbarAnimation {
  0% {
    transform: rotate(0);
    opacity: 0;
  }
  65% {
    transform: rotate(xx);
    opacity: 1;
  }
}

.navbar {
  animation: navbarAnimation 7s forwards 0s ease;
}
</style>
