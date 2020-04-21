<template>
  <div class="page">
    <h1>Projects</h1>
    <div class="grid">
      <vs-row vs-align="center" vs-type="flex" vs-justify="space-around">
        <vs-col
          v-for="i in cards.length"
          :key="i"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-w="6"
          vs-lg="4"
          vs-sm="6"
          vs-xs="8"
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
.vs-col {
  margin: 5vh 1vw 5vh 1vw;
}
</style>
