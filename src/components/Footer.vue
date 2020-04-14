<template>
  <v-footer
    dark
    padless
    max-height="70"
    :app="true"
    fixed
    class="flex"
    max-width="104"
  >
    <v-card flat tile>
      <v-card-subtitle class="teal">
        <!-- <i class="subheading">
          {{ new Date().getFullYear() }} / <span>Armin Varshokar</span>
        </i> -->

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="30px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-subtitle>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["fab fa-github", "fab fa-linkedin"]
  })
};
</script>

<style></style>
