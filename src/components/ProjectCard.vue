<template lang="html">
  <div class="card">
    <vs-card actionable>
      <div slot="header">
        <h2>
          {{ card.title }}
        </h2>
      </div>
      <div slot="media">
        <img :src="resolve_img_url(card.src)" />
      </div>
      <!-- <div> -->
      <h3>
        {{ card.description }}
      </h3>
      <!-- </div> -->
      <div slot="footer">
        <!-- <vs-row vs-justify="flex-start"> -->
        <span class="tags-container">
          <vs-chip v-for="tag in card.tags" :key="tag.index" :color="tag[0]">
            <vs-avatar :src="tag[2]" />
            {{ tag[1] }}
          </vs-chip>
        </span>
        <!-- </vs-row> -->
        <vs-row vs-justify="flex-end">
          <a :href="card.github" target="_blank">
            <vs-chip color="#dec79b" class="project-link">
              <vs-avatar icon="code" color="#18181e" class="project-link" />
              See Code
            </vs-chip>
          </a>
        </vs-row>
      </div>
    </vs-card>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: ["card"],
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$|\.gif$/);
      return images("./" + path);
    }
  }
};
</script>

<style scoped>
.project-link:hover {
  cursor: context-menu;
}

.con-vs-card {
  background: #4a4a52;
  color: white;
  margin-bottom: 30%;
  /* margin-top: 20%; */
  box-shadow: 2px 1px #dec79b;
  /* padding-bottom: 3em; */
  /* max-width: 25rem; */
  min-width: 6rem;
  min-height: 6rem;
}

/* .vs-card--content {
  margin-bottom: 0;
  max-height: 6rem !important;
} */

.con-vs-chip {
  font-weight: 200 !important;
  font-size: 14px;
  color: black !important;
}

/* .tags-container {
  margin-top: 2rem;
} */

h2 {
  color: #dec79b;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
