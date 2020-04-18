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
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <div class="logo-container">
        <vs-row>
          <Logo
            src="https://img.icons8.com/color/96/000000/html-5.png"
            name="HTML"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/css3.png"
            name="CSS"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/javascript.png"
            name="JavaScript"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/vue-js.png"
            name="Vue"
          />
          <Logo
            src="https://img.icons8.com/plasticine/100/000000/react.png"
            name="React"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/redux.png"
            name="Redux"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/firebase.png"
            name="Firebase"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/python.png"
            name="Python"
          />
          <Logo
            src="https://img.icons8.com/ios-filled/100/000000/circled-r.png"
            name="R"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/git.png"
            name="Git"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/bitbucket.png"
            name="Bitbucket"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/jira.png"
            name="JIRA"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/npm.png"
            name="npm"
          />
        </vs-row>
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <span class="icon-credit"
              >icons by
              <a href="https://icons8.com/icon/24895/npm">Icons8</a></span
            >
          </vs-col>
        </vs-row>
      </div>
    </vs-col>
  </div>
</template>

<script>
import Logo from "../components/Logo";
export default {
  name: "Home",
  components: { Logo }
};
</script>

<style lang="css" scoped>
.intro {
  font-size: 1.5em;
  /* margin-top: 2.5em; */
  margin-left: 1.5em;
  margin-right: 1.5em;
  line-height: 3em;
  padding-bottom: 0em;
  color: whitesmoke;
  text-align: center;
  text-justify: inter-word;
}

.logo-container {
  justify-content: center;
  align-content: center;
  margin-top: 7.5em;
  margin-left: 3.5em;
  margin-right: 3.5em;
  margin-bottom: 2rem;
}

.icon-credit {
  margin-top: 3rem;
}
</style>
