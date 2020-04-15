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
/* @import url("https://fonts.googleapis.com/css2?family=Amiri&display=swap"); */
#app {
  font-family: Amiri, Helvetica, Arial, sans-serif;
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1e1e1e;
}

body {
  background: black;
}

.animated {
  animation-duration: 2s;
}

.page h1 {
  color: rgb(183, 211, 238);
  margin-bottom: 2rem;
  font-family: "Amiri", serif;
  font-weight: 500;
  font-size: 3.6rem;
}

.vs-navbar--btn-responsive .btn-responsive-line {
  background: white !important;
}
</style>
