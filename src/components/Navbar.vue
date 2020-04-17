<template>
  <div>
    <vs-navbar
      v-model="activeItem"
      class="nabarx"
      active-text-color="#DEC79B"
      text-color="white"
    >
      <vs-navbar-item index="0">
        <router-link to="/"><vs-avatar icon="home" size="large"/></router-link>
      </vs-navbar-item>

      <vs-navbar-item index="1">
        <router-link to="/about">About</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/education">Education</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link to="/experience">Experience</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <router-link to="/projects">Projects</router-link>
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
  box-shadow: none;
  display: flex;
  justify-content: right;
  align-items: center;
  color: #18181e !important;
}
.vs-navbar--item a {
  font-size: large;
  /* color: #71a5c8; */
}

.con-vs-avatar {
  background-color: #dec79b78 !important;
}
</style>
