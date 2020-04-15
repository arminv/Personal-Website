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
            :date="new Date('2018-06-01')"
            title="Passed CFA Exam Levels I & II"
            description="Passed both exams on first attempt"
            icon="edit"
            color="purple"
            :thumbnail="resolve_img_url('cfa.png')"
          />
          <vue-timeline-update
            :date="new Date('2017-11-01')"
            title="Canadian Securities Course (CSC)"
            description="Honours, Final Mark of 90%"
            icon="edit"
            color="red"
            :thumbnail="resolve_img_url('csi.png')"
          />
          <vue-timeline-update
            :date="new Date('2017-07-01')"
            title="Visiting Student"
            description="Numerical Methods / Simulation and the Monte Carlo Methods / Biology"
            icon="done"
            color="turquoise"
            :thumbnail="resolve_img_url('york.png')"
          />
          <vue-timeline-update
            :date="new Date('2015-08-01')"
            title="B.Sc. with Honours (Finance)"
            description="First Class Honours (1:1) - Cumulative GPA of 3.7/4.0"
            icon="done"
            color="white"
            :thumbnail="resolve_img_url('cass.png')"
          />
          <vue-timeline-update
            :date="new Date('2014-09-01')"
            title="Student Exchange Program (1 year)"
            icon="done"
            color="blue"
            :thumbnail="resolve_img_url('queens.png')"
          />
          <vue-timeline-update
            :date="new Date('2011-09-01')"
            title="A-Levels"
            description="Mathematics, Further Mathematics, Physics"
            icon="done"
            color="orange"
            is-last
            :thumbnail="resolve_img_url('brighton.png')"
            islast
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
  font-family: "Amiri", sans-serif, Arial, Helvetica !important;
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
