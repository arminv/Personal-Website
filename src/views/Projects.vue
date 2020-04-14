<template>
  <div class="page">
    <h1>Projects</h1>
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
</template>

<script>
import ProjectCard from "../components/ProjectCard";

export default {
  data() {
    return {
      type: "shadow",
      cards: [
        {
          title: "Project 1",
          description: `
            This is my project one's description.
            This is my project one's description.
            `,
          src: "logo.gif",
          tags: ["Vue", "Vuesax"],
          github: "https://github.com/arminv"
        },
        {
          title: "Project 2",
          description: `
            This is my project one's description.
            This is my project one's description.
            `,
          src: "logo.gif",
          tags: ["Vue", "Vuesax"],
          github: "https://github.com/arminv"
        },
        {
          title: "Project 3",
          description: `
            This is my project one's description.
            This is my project one's description.
            `,
          src: "logo.gif",
          tags: ["Vue", "Vuesax"],
          github: "https://github.com/arminv"
        },
        {
          title: "Project 4",
          description: `
            This is my project one's description.
            This is my project one's description.
            `,
          src: "logo.gif",
          tags: ["Vue", "Vuesax"],
          github: "https://github.com/arminv"
        },
        {
          title: "Project 5",
          description: `
            This is my project one's description.
            This is my project one's description.
            `,
          src: "logo.gif",
          tags: ["Vue", "Vuesax"],
          github: "https://github.com/arminv"
        },
        {
          title: "Project 6",
          description: `
            This is my project one's description.
            This is my project one's description.
            `,
          src: "logo.gif",
          tags: ["Vue", "Vuesax"],
          github: "https://github.com/arminv"
        }
      ]
    };
  },
  components: {
    ProjectCard
  }
};
</script>

<style scoped>
.vs-row {
  padding-left: 7em;
  padding-right: 7em;
  padding-top: 3em;
  /* padding-bottom: 2em; */
}

.vs-col {
  padding-left: 3em;
  padding-right: 4em;
}
</style>
