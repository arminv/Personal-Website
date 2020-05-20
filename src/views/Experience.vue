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
            href="https://finneotech.com"
            target="_blank"
            alt="finneo"
            rel="noopener noreferrer"
          >
            <vue-timeline-update
              :date="new Date('2019-08-01')"
              title="Associate Product Manager"
              description="<li>Overseeing feature development</li><li>Reporting (via JIRA) and fixing bugs (in React)</li><li>Coordinating with remote teams</li><li>Quality Assurance (QA)</li>"
              icon="code"
              color="red"
              :thumbnail="resolve_img_url('finneo.png')"
            />
          </a>
          <a
            href="http://capstack.ca"
            target="_blank"
            alt="capstack"
            rel="noopener noreferrer"
          >
            <vue-timeline-update
              :date="new Date('2018-12-01')"
              title="Financial Analyst"
              description="<li>Commercial real estate underwriting</li><li>Optimized capital structure of various projects (construction, land, etc.)</li><li>Helped clients secure $20MM in commercial real estate funds (mortgages)</li>"
              icon="edit"
              color="red"
              :thumbnail="resolve_img_url('capstack.png')"
            />
          </a>
          <a
            href="https://2019.pycon.ca"
            target="_blank"
            alt="pycon"
            rel="noopener noreferrer"
          >
            <vue-timeline-update
              :date="new Date('2018-11-01')"
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
              :date="new Date('2018-11-01')"
              title="Open-Source Contributor - Pandas"
              icon="code"
              color="red"
              :thumbnail="resolve_img_url('pandas.png')"
              description="<li>Got all 4 of my Pull Requests merged into pandas</li>"
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
