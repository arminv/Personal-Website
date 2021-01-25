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
              title="Frontend Engineer"
              description=""
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
              :date="new Date('2020-12-01')"
              title="Product Manager / Full Stack Developer"
              description="<li>Fixed bugs and improved overall user experience (B2B SaaS application – tech stack: React, Redux, Redux-Saga, Node, Feathers JS, MongoDB, PostgreSQL)</li><li>Collaborated with both internal and external software teams to launch features
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
          <a
            href="http://capstack.ca"
            target="_blank"
            alt="capstack"
            rel="noopener noreferrer"
          >
            <vue-timeline-update
              :date="new Date('2018-12-01')"
              title="Financial Analyst"
              description="<li>Commercial real estate underwriting</li><li>Originated, reviewed, processed, closed and administered customer loan proposals</li><li>Assisted clients with securing $20MM in commercial real estate funds</li><li>Developed and maintained client relationships</li>"
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
