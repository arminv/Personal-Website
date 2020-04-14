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
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
.page h1 {
  color: rgb(183, 211, 238);
  margin-bottom: 1rem;
  font-family: "Quicksand", sans-serif;
}

.vs-navbar--btn-responsive .btn-responsive-line {
  background: white !important;
}
</style>
