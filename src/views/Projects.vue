<template>
  <div class="page">
    <h1>Projects</h1>
    <div class="grid">
      <vs-row
        vs-align="center"
        vs-type="flex"
        vs-justify="space-around"
        vs-w="12"
      >
        <vs-col
          v-for="i in 3"
          :key="i"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-w="4"
        >
          <ProjectCard :card="cards[i - 1]" />
        </vs-col>
      </vs-row>
      <vs-row
        vs-align="center"
        vs-type="flex"
        vs-justify="space-around"
        vs-w="12"
      >
        <vs-col
          v-for="i in 3"
          :key="i"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-w="4"
        >
          <ProjectCard :card="cards[i + 2]" />
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard";
import projectData from "../assets/projectData";

export default {
  data() {
    return {
      type: "shadow",
      cards: projectData
    };
  },
  components: {
    ProjectCard
  }
};
</script>

<style scoped>
.grid {
  /* padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 3rem; */
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top: 3rem;
}

.vs-col {
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 1rem;
  min-width: 10rem;
}

/* .vs-row {
  padding-left: 3em;
  padding-right: 3em;
  padding-top: 1em;
  padding-bottom: 2em;
}
*/
</style>
