<template>
  <vs-col class="page">
    <h1>Experience</h1>
    <vs-row class="timeline-top">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="6"
        vs-offset="3"
      >
        <div class="timeline">
          <vue-timeline-update
            :date="new Date('2019-08-01')"
            title="Product Manager | Front-End Developer"
            description="- Oversee feature development<br />- Report and fix bugs<br />- Coordinate with remote teams<br />- Quality Assurance (QA) "
            icon="code"
            color="orange"
            :thumbnail="resolve_img_url('finneo.png')"
          />
          <vue-timeline-update
            :date="new Date('2018-12-01')"
            title="Financial Analyst"
            description="- Real estate underwriting and reporting"
            icon="edit"
            color="blue"
            :thumbnail="resolve_img_url('r2.png')"
          />
          <vue-timeline-update
            :date="new Date('2018-11-01')"
            title="Volunteer - PyCon Canada"
            icon="flag"
            color="green"
            :thumbnail="resolve_img_url('pycon.png')"
          />
          <vue-timeline-update
            :date="new Date('2018-11-01')"
            title="Open-Source Contributor - Pandas"
            icon="code"
            color="purple"
            :thumbnail="resolve_img_url('pandas.png')"
            description="- Got all 4 Pull Requests merged into pandas"
            is-last
          />
        </div>
      </vs-col>
    </vs-row>
  </vs-col>
</template>

<script>
export default {
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$|\.gif$/);
      return images("./" + path);
    }
  }
};
</script>

<style>
/* Set font-family of timeline (according to the docs): */
[class^="gb-"]:not(.gb-base-icon) {
  font-family: "Quicksand", sans-serif, Arial, Helvetica !important;
}

.timeline-top {
  padding-top: 3em;
  padding-bottom: 4em;
}

/* Shrink the thumbnail size: */
.gb-vue-timeline-update__thumbnail {
  max-width: 15rem !important;
  max-height: 6rem !important;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
