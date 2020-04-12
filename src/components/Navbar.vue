<template>
  <div>
    <vs-navbar
      v-model="activeItem"
      class="nabarx"
      active-text-color="#389CFF"
      text-color="white"
      color="#323232"
    >
      <!-- <div slot="title">
        <vs-navbar-title>
          <router-link to="/">Armin Varshokar</router-link>
        </vs-navbar-title>
      </div> -->
      <router-link to="/"
        ><vs-avatar icon="home" color="#ff1e56" size="large"
      /></router-link>
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
  /* align-items: center; */
  justify-content: center;
  /* margin-top: 2rem; */
  margin-bottom: 2rem;
}

.vs-navbar--item a {
  font-size: large;
  /* color: #42b983; */
}
</style>
