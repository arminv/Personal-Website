<template>
  <vs-col class="page">
    <h1>Education</h1>
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
            :date="new Date('2017-02-26')"
            title="v2.2.0 - Initial D"
            description="Today I am thrilled to announce the release of Vue.js 2.2.0."
            icon="code"
            color="red"
            :thumbnail="resolve_img_url('logo.jpg')"
          />
          <vue-timeline-update
            :date="new Date('2016-11-22')"
            title="v2.1.0 - Hunter X Hunter"
            description="Today I am thrilled to announce the release of Vue.js 2.1.0."
            icon="edit"
            color="turquoise"
            :thumbnail="resolve_img_url('logo.jpg')"
          />
          <vue-timeline-update
            :date="new Date('2016-09-30')"
            title="v2.0.0 - Ghost in the Shell"
            description="Today I am thrilled to announce the release of Vue.js 2.0.0"
            icon="done"
            color="white"
            :thumbnail="resolve_img_url('logo.jpg')"
          />
          <vue-timeline-update
            :date="new Date('2016-09-30')"
            title="v2.0.0 - Ghost in the Shell"
            description="Today I am thrilled to announce the release of Vue.js 2.0.0"
            icon="done_outline"
            color="green"
            :thumbnail="resolve_img_url('logo.jpg')"
          />
          <vue-timeline-update
            :date="new Date('2016-09-30')"
            title="v2.0.0 - Ghost in the Shell"
            description="Today I am thrilled to announce the release of Vue.js 2.0.0"
            icon="code"
            color="blue"
            is-last
            :thumbnail="resolve_img_url('logo.jpg')"
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
  padding-bottom: 3em;
}

/* Shrink the thumbnail size: */
.gb-vue-timeline-update__thumbnail {
  max-width: 15rem !important;
}
</style>
