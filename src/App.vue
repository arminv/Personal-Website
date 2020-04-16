<template>
  <div id="app">
    <Navbar />
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
#app {
  font-family: Amiri, Helvetica, Arial, sans-serif;
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #18181e;
}

body {
  background: #18181e;
}

.animated {
  animation-duration: 3s;
}

.page h1 {
  color: #dec79b;
  margin-bottom: 2rem;
  font-family: "Amiri", serif;
  font-weight: 500;
  font-size: 3.6rem;
  text-shadow: 1px 1px 1px #ffffff50;
}

.page li {
  color: whitesmoke;
}

/* -------------------- */
.vs-navbar--btn-responsive .btn-responsive-line {
  background: #18181e !important;
}
/* -------------------- */
/* Set font-family of timelines (according to the docs): */
[class^="gb-"]:not(.gb-base-icon) {
  font-family: "Amiri", sans-serif, Arial, Helvetica !important;
}

.timeline-top {
  padding-top: 3em;
  padding-bottom: 3em;
}

/* Shrink the thumbnail size: */
.gb-vue-timeline-update__thumbnail {
  max-width: 15rem !important;
  max-height: 6rem !important;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.gb-vue-timeline-update__title {
  color: #dec79b;
}

.gb-vue-timeline-update--dark
  .gb-vue-timeline-update__center
  .gb-vue-timeline-update__bullet {
  box-shadow: 0 1px 5px 0 #ffffff7c !important;
}
</style>
