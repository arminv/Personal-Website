<template>
  <div class="page">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <h1>
          <vue-typer
            :text="['Armin Varshokar']"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="1200"
            :type-delay="90"
            :pre-erase-delay="2000"
            :erase-delay="250"
            erase-style="clear"
            :erase-on-complete="false"
            caret-animation="smooth"
          >
          </vue-typer>
        </h1>
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
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <p class="intro">
          Welcome to my website. <br />
          I am a product manager and front-end developer at Finneo, a commercial
          real estate financing startup. <br />My background is in finance, but
          I have been learning programming on my own for the past 3 years.
          <br />It has been an extremely exctiting journey so far and I have
          enjoyed every single day of it.
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

<style lang="css" scoped>
.intro {
  font-size: 1.5em;
  margin-top: 2.5em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  line-height: 3em;
  padding-bottom: 0em;
  color: whitesmoke;
  text-align: center;
  text-justify: inter-word;
}
</style>
<style lang="scss">
.vue-typer {
  margin-bottom: 1rem;
  font-size: 1.5em;
  padding-right: 5rem;
  padding-left: 5rem;
}

.vue-typer .custom.char {
  color: #dec79b;
}

.vue-typer .custom.caret {
  width: 5px;
  background-color: whitesmoke;
}
</style>
