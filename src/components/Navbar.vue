<template>
  <div>
    <vs-navbar
      v-model="activeItem"
      class="nabarx"
      :active-text-color="activeTextColor"
      :text-color="textColor"
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
  }),
  computed: {
    textColor: {
      get() {
        const dark = this.$store.state.dark;
        let textColor;
        dark ? (textColor = "#000") : (textColor = "whitesmoke");
        return textColor;
      }
    },
    activeTextColor: {
      get() {
        const dark = this.$store.state.dark;
        let activeTextColor;
        dark ? (activeTextColor = "#af812c") : (activeTextColor = "#dec79b");
        return activeTextColor;
      }
    }
  }
};
</script>

<style scoped>
.nabarx {
  box-shadow: none;
  display: flex;
  justify-content: right;
  align-items: center;
  color: var(--bg-color) !important;
}
.vs-navbar--item a {
  font-size: large;
}

.con-vs-avatar {
  background-color: var(--gold-color) !important;
}
</style>
