<template>
  <div class="page">
    <br />
    <br />
    <br />
    <br />
    <vs-row
      vs-align="center"
      vs-type="flex"
      vs-justify="space-around"
      vs-w="12"
    >
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ProjectCard :card="cards[0]" />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ProjectCard :card="cards[1]" />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ProjectCard :card="cards[2]" />
      </vs-col>
    </vs-row>
    <vs-row
      vs-align="center"
      vs-type="flex"
      vs-justify="space-around"
      vs-w="12"
    >
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ProjectCard :card="cards[3]" />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ProjectCard :card="cards[4]" />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ProjectCard :card="cards[5]" />
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
          title: "Card 1",
          description: `
            This is my project one's description.
            `,
          src: "logo.png",
          tags: ["Vue", "Vuesax"]
        },
        {
          title: "Card 2",
          description: `
            This is my project one's description.
            `,
          src: "logo.png",
          tags: ["Vue", "Vuesax"]
        },
        {
          title: "Card 3",
          description: `
            This is my project one's description.
            `,
          src: "logo.png",
          tags: ["Vue", "Vuesax"]
        },
        {
          title: "Card 4",
          description: `
            This is my project one's description. 
            `,
          src: "logo.png",
          tags: ["Vue", "Vuesax"]
        },
        {
          title: "Card 5",
          description: `
            This is my project one's description.
            `,
          src: "logo.png",
          tags: ["Vue", "Vuesax"]
        },
        {
          title: "Card 6",
          description: `
            This is my project one's description.
            `,
          src: "logo.png",
          tags: ["Vue", "Vuesax"]
        }
      ]
    };
  },
  components: {
    ProjectCard
  }
};
</script>

<style></style>
