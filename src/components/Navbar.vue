<template>
  <div>
    <vs-navbar
      v-model="activeItem"
      class="nabarx"
      active-text-color="#389CFF"
      text-color="white"
      color="black"
    >
      <vs-navbar-item index="0">
        <router-link to="/"
          ><vs-avatar icon="home" color="#ff1e56" size="large"
        /></router-link>
      </vs-navbar-item>

      <vs-navbar-item index="1">
        <router-link to="/education">Education</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/experience">Experience</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link to="/projects">Projects</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <router-link to="/contact">Contact</router-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    activeItem: 0
  })
};
</script>

<style scoped>
.nabarx {
  display: flex;
  justify-content: left;
  margin-bottom: 3rem;
  /* align-items: center; */
  /* margin-top: 2rem; */
  /* color: #323232; */
}
.vs-navbar--item a {
  font-size: large;
  /* color: #71a5c8; */
}
</style>
