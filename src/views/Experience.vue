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
          <a
            href="https://www.senseilabs.com/"
            target="_blank"
            alt="senseilabs"
            rel="noopener noreferrer"
          >
            <vue-timeline-update
              :date="new Date('2021-01-25')"
              title="Front End Engineer II"
              description="<li>Implemented new features (using Lit, TypeScript, and Redux) while working closely with Product Owners and Designers</li>
              <li>Added unit tests to increase overall code coverage and help achieve team and departmental OKRs</li>
              <li>Refactored and optimized multiple product features as the only FE engineer on the Scrum team</li>
              <li>Maintained legacy code written in AngularJS and Mithril.js</li>
              <li>Authored technical and non-technical documentation (internal wiki) to explain new features</li>
              <li>Participated in Design and Analysis (D&A) meetings to brainstorm, provide estimates on new epics and their feasibility, and help T-shirt size future work</li>
              <li>Showcased Scrum team's work to the whole company during demos</li>"
              icon="code"
              color="red"
              :thumbnail="resolve_img_url('SenseiLabs.png')"
            />
          </a>
          <a
            href="https://finneotech.com"
            target="_blank"
            alt="finneo"
            rel="noopener noreferrer"
          >
            <vue-timeline-update
              :date="new Date('2019-12-01')"
              title="Full Stack Developer / Product Manager"
              description="<li>Fixed bugs and improved overall user experience (B2B SaaS application - tech stack: React, Redux, Redux-Saga, Node, Feathers JS, MongoDB, PostgreSQL)</li><li>Collaborated with both internal and external software teams to launch features
              on time and within budget</li><li>Performed software testing to uncover bugs and troubleshoot issues prior to
              application launch</li><li>Developed product documentation to communicate key components of
              upcoming features to software teams</li><li>Collaborated on all stages of development lifecycle, from requirement
              gathering to production releases</li><li>Translated technical concepts and information into terms all parties could easily
              comprehend</li>"
              icon="code"
              color="red"
              :thumbnail="resolve_img_url('finneo.png')"
            />
          </a>

          <vue-timeline-update
            :date="new Date('2018-12-01')"
            title="Financial Analyst"
            description="<li>Commercial real estate underwriting</li><li>Originated, reviewed, processed, closed and administered customer loan proposals</li><li>Assisted clients with securing $20MM in commercial real estate funds</li><li>Developed and maintained client relationships</li>"
            icon="edit"
            color="red"
            :thumbnail="resolve_img_url('capstack.png')"
          />
          <a
            href="https://2019.pycon.ca"
            target="_blank"
            alt="pycon"
            rel="noopener noreferrer"
          >
            <vue-timeline-update
              :date="new Date('2017-11-01')"
              title="Volunteer - PyCon Canada"
              icon="flag"
              color="red"
              :thumbnail="resolve_img_url('pycon.png')"
            />
          </a>
          <a
            href="https://pandas.pydata.org"
            target="_blank"
            alt="pandas"
            rel="noopener noreferrer"
          >
            <vue-timeline-update
              :date="new Date('2017-11-01')"
              title="Open-Source Contributor - Pandas"
              icon="code"
              color="red"
              :thumbnail="resolve_img_url('pandas.png')"
              description="<li>All 4 PRs merged into pandas</li>"
              isLast
            />
          </a>
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

<style>
.gb-base-icon {
  color: var(--content-color) !important;
}

.gb-vue-timeline-update__ago {
  color: var(--timeline-years) !important;
}
</style>
