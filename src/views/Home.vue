<template>
  <div class="page">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <h1>Armin Varshokar</h1>
      </vs-col>
    </vs-row>
    <br />
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-avatar
          class="avatar"
          size="150px"
          src="https://avatars0.githubusercontent.com/u/13618953?s=460&u=b83a795f9244a0eb253c2bd20e3d8063640498fb&v=4"
        />
      </vs-col>
    </vs-row>
    <vs-row
      vs-align="center"
      vs-type="flex"
      vs-justify="space-around"
      vs-w="12"
      class="intro"
    >
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <p>
          Welcome to my website. My name is Armin and I am a product manager and
          front-end developer at Finneo, a commercial real estate financing
          startup. <br /><br />My background is in finance, but I have been
          learning programming on my own for the past 3 years. <br /><br />It
          has been an extremely exctiting journey so far and I have enjoyed
          every single day of it.
        </p>
      </vs-col>
    </vs-row>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");
.intro {
  font-size: 2em;
  margin-top: 2rem;
  /* font-family: "Nanum Brush Script", cursive; */
  font-family: "Caveat", cursive;
  color: rgb(139, 165, 189);
  text-align: auto;
  text-justify: inter-word;
}
</style>
