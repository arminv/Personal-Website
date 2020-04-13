<template lang="html">
  <div class="card">
    <vs-card actionable>
      <div slot="header">
        <h2>
          <i>
            {{ card.title }}
          </i>
        </h2>
      </div>
      <div slot="media">
        <img :src="resolve_img_url(card.src)" />
      </div>
      <div>
        <h3>
          {{ card.description }}
        </h3>
      </div>
      <div slot="footer">
        <vs-row vs-justify="flex-start">
          <span>
            <vs-chip v-for="tag in card.tags" :key="tag" color="danger">
              {{ tag }}
            </vs-chip>
          </span>
        </vs-row>
        <vs-row vs-justify="flex-end">
          <a :href="card.github" target="_blank">
            <vs-chip color="primary" class="project-link">
              <vs-avatar icon="code" color="#389CFF" class="project-link" />
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
  background: #777676;
  color: white;
  margin-bottom: 30%;
  /* margin-top: 20%; */
  box-shadow: 2px 5px #389cff;
  /* padding-bottom: 3em; */
}

.vs-card--content {
  min-height: 15em;
}
</style>
