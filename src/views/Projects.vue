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
          v-for="i in cards.length"
          :key="i"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-w="6"
        >
          <ProjectCard :card="cards[i - 1]" />
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard";
import projectData from "../assets/data/projectData";

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
  /* margin: -2rem 4rem 5rem 4rem; */
  margin: 3vh 5vw 5vh 5vw;
}

.vs-col {
  /* padding: 0rem 3rem 1rem 3rem; */
  margin: 5vh 1vw 5vh 1vw;
  /* margin-top: 4rem; */
  /* min-width: 10rem; */
}
</style>
