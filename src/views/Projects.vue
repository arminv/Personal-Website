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
        <ProjectCard
          :title="cards[0].title"
          :description="cards[0].description"
          src="../assets/logo.png"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ProjectCard
          :title="cards[1].title"
          :description="cards[1].description"
          src="../assets/logo.png"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ProjectCard
          :title="cards[2].title"
          :description="cards[2].description"
          src="../assets/logo.png"
        />
      </vs-col>
    </vs-row>
    <vs-row
      vs-align="center"
      vs-type="flex"
      vs-justify="space-around"
      vs-w="12"
    >
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ProjectCard
          :title="cards[3].title"
          :description="cards[3].description"
          src="../assets/logo.png"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ProjectCard
          :title="cards[4].title"
          :description="cards[4].description"
          src="../assets/logo.png"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ProjectCard
          :title="cards[5].title"
          :description="cards[5].description"
          src="../assets/logo.png"
        />
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
            This is my project one's description. 
            This is my project one's description. 
            This is my project one's description.`
        },
        {
          title: "Card 2",
          description: "This is my project two's description"
        },
        {
          title: "Card 3",
          description: "This is my project three's description"
        },
        {
          title: "Card 4",
          description: "This is my project four's description"
        },
        {
          title: "Card 5",
          description: `
            This is my project one's description.
            This is my project one's description.
            This is my project one's description.
            This is my project one's description.
            This is my project one's description.
            This is my project one's description.
            This is my project one's description.
            This is my project one's description.
            This is my project one's description. 
            This is my project one's description.`
        },
        { title: "Card 6", description: "This is my project six's description" }
      ]
    };
  },
  components: {
    ProjectCard
  }
};
</script>

<style></style>
