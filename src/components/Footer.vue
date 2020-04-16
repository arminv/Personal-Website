<template>
  <v-footer dark padless :app="true" fixed class="flex" max-width="60">
    <v-card flat tile>
      <v-card-subtitle>
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon.index" class="mx-4" icon>
          <a :href="icon.link" target="_blank">
            <v-icon size="30px">{{ icon.image }}</v-icon>
          </a>
        </v-btn>
        <strong class="subheading"> @{{ new Date().getFullYear() }} </strong>
      </v-card-subtitle>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { image: "fab fa-github", link: "https://github.com/arminv" },
      {
        image: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/arminvarshokar/"
      }
    ]
    // dark: true
  })
};
</script>

<style scoped>
.v-card__subtitle {
  background-color: #18181e;
  padding: 10px 0px 10px 0px !important;
}

a {
  color: inherit;
}

/* .dark-mode {
  display: flex;
  justify-content: center;
} */
</style>
