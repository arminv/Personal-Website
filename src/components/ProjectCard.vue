<template lang="html">
  <div class="card">
    <vs-card actionable>
      <div slot="header">
        <h3>
          {{ card.title }}
        </h3>
      </div>
      <div slot="media">
        <img :src="resolve_img_url(card.src)" />
      </div>
      <div>
        <h2>
          {{ card.description }}
        </h2>
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
          <vs-chip color="primary" class="project-link">
            <vs-avatar icon="link" color="#389CFF" class="project-link" />
            See Live
          </vs-chip>
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
      let images = require.context("../assets/", false, /\.png$|\.jpg$/);
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
  /* margin: 15%; */
  /* display: block; */
  background: #5f5e5e;
  color: white;
  padding: 5%;
}

/* p {
  width: auto;
  height: auto;
} */
</style>
