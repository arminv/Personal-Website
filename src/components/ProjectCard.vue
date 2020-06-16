<template lang="html">
  <vs-card actionable>
    <div slot="header">
      <h2>
        {{ card.title }}
      </h2>
    </div>
    <div slot="media">
      <img :src="resolve_img_url(card.src)" />
    </div>
    <h3>
      {{ card.description }}
    </h3>
    <div slot="footer">
      <div class="tags-container">
        <vs-chip v-for="tag in card.tags" :key="tag.index" :color="tag[0]">
          <vs-avatar :src="tag[2]" />
          {{ tag[1] }}
        </vs-chip>
      </div>
      <vs-row vs-justify="flex-end">
        <a
          :href="card.link"
          target="_blank"
          alt="Live demo"
          rel="noopener noreferrer"
        >
          <vs-chip :color="liveChipColor" class="project-link" v-if="card.link">
            <vs-avatar
              icon="open_in_browser"
              color="#18181e"
              class="project-link"
            />
            Live
          </vs-chip>
        </a>
        <a
          :href="card.github"
          target="_blank"
          alt="GitHub code"
          rel="noopener noreferrer"
        >
          <vs-chip
            :color="liveChipColor"
            class="project-link"
            v-if="card.github"
          >
            <vs-avatar icon="code" color="#18181e" class="project-link" />
            Code
          </vs-chip>
        </a>
      </vs-row>
    </div>
  </vs-card>
</template>

<script>
import { pathParserMixin } from "../utils/pathParserMixin";
export default {
  data: () => ({}),
  props: ["card"],
  mixins: [pathParserMixin],
  computed: {
    liveChipColor: {
      get() {
        const dark = this.$store.state.dark;
        let liveChipColor;
        dark ? (liveChipColor = "#b88f43") : (liveChipColor = "#dec79b");
        return liveChipColor;
      }
    }
  }
};
</script>

<style scoped>
h2 {
  color: var(--gold-color);
}

h3 {
  font-size: 18px;
  font-weight: 500;
}

.project-link:hover {
  cursor: context-menu;
}

.con-vs-card {
  background: var(--project-color) !important;
  color: white;
  box-shadow: 2px 1px var(--gold-color);
  /* width: 35vw; */
}

.con-vs-card:hover {
  cursor: auto;
}

.tags-container {
  padding-bottom: 50px !important;
}

.con-vs-chip {
  font-weight: 200 !important;
  font-size: 14px;
  color: var(--bg-color) !important;
  margin: 0;
}

.vs-avatar {
  color: var(--gold-color) !important;
}
</style>
