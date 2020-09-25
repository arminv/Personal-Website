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
            description="<li>Passed both exams on first attempt</li>"
            icon="edit"
            color="blue"
            :thumbnail="resolve_img_url('cfa.png')"
          />
          <vue-timeline-update
            :date="new Date('2017-11-01')"
            title="Canadian Securities Course (CSC)"
            description="<li>Honours, Final Mark of 90%</li>"
            icon="edit"
            color="blue"
            :thumbnail="resolve_img_url('csi.png')"
          />
          <vue-timeline-update
            :date="new Date('2017-07-01')"
            title="Visiting Student"
            description="<li>Numerical Methods / Simulation and the Monte Carlo Methods / Biology</li>"
            icon="done"
            color="blue"
            :thumbnail="resolve_img_url('york.png')"
          />
          <vue-timeline-update
            :date="new Date('2015-08-01')"
            title="B.Sc. with Honours (Finance)"
            description="<li>First Class Honours (1:1) - Cumulative GPA of 3.7/4.0</li><li>Graduated in Top 10% of Class</li><li>Dissertation: Quantitative Easing (QE) in the U.K. : Channels and Impacts</li>"
            icon="done"
            color="blue"
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
            description="<li>Mathematics, Further Mathematics, Physics</li>"
            icon="done"
            color="blue"
            is-last
            :thumbnail="resolve_img_url('brighton.png')"
            isLast
          />
        </div>
      </vs-col>
    </vs-row>
  </vs-col>
</template>

<script>
import { pathParserMixin } from "../utils/pathParserMixin";
export default {
  mixins: [pathParserMixin]
};
</script>

<style></style>
