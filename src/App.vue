<template>
  <div id="app">
    <Navbar />
    <transition
      name="router-anim"
      enter-active-class="animated rotateInUpRight"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  /* background: linear-gradient(
    90deg,
    rgb(213, 235, 235),
    rgba(193, 195, 224, 0.42),
    rgba(216, 216, 194, 0.42)
  ); */
  background: black;
}
/* .page {
  position: fixed;
  width: inherit;
} */

@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
.page h1 {
  color: rgb(139, 165, 189);
  margin-bottom: 1rem;
  font-family: "Quicksand", sans-serif;
}
</style>
