<template>
  <div class="page">
    <div>
      <img :src="resolve_img_url('goldBars2.png')" class="gold-bars" />
    </div>
    <div class="intro-container">
      <vs-row>
        <vs-avatar
          class="avatar"
          size="170px"
          src="https://avatars0.githubusercontent.com/u/13618953?s=460&u=b83a795f9244a0eb253c2bd20e3d8063640498fb&v=4"
        />
      </vs-row>
      <vs-row><hr class="divider gold"/></vs-row>
      <vs-row>
        <h1 class="intro-title">
          Hi, I'm
          <span class="gold"
            ><vue-typer
              :text="['Armin']"
              :repeat="0"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="1400"
              :type-delay="120"
              :pre-erase-delay="2000"
              :erase-delay="250"
              erase-style="clear"
              :erase-on-complete="false"
              caret-animation="blink"
            >
            </vue-typer></span
          >. I love desgning and building
          <span class="gold"
            ><vue-typer
              :text="['software']"
              :repeat="0"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="2000"
              :type-delay="120"
              :pre-erase-delay="2000"
              :erase-delay="250"
              erase-style="clear"
              :erase-on-complete="false"
              caret-animation="blink"
            >
            </vue-typer></span
          >.
        </h1>
        <!-- <h3 class="intro-subtitle gold">
        "People think that computer science is the art of geniuses but the
        actual reality is the opposite, just
        <span class="intro-title"><i>many people</i></span> doing things that
        <span class="intro-title"><i>build</i></span> on each other, like a wall
        of mini stones."
        <span class="intro-title">- Donald Knuth</span>
      </h3> -->
        <h3 class="intro-subtitle gold">
          <span class="intro-title">"</span>There are
          <span class="intro-title">two</span> ways of constructing a software
          design: One way is to make it
          <span class="intro-title"><i>so simple</i></span> that there are
          obviously no deficiencies, and the other way is to make it
          <span class="intro-title"><i>so complicated</i></span> that there are
          no obvious deficiencies<span class="intro-title"
            >" - .C.A.R. Hoare</span
          >
        </h3>
      </vs-row>
    </div>
  </div>
</template>

<script>
import { pathParserMixin } from "../utils/pathParserMixin";
export default {
  name: "Home",
  mixins: [pathParserMixin]
};
</script>

<style lang="css" scoped>
.intro-container {
  margin: -1vh 3vh 3vh 8vmax;
  max-width: 90vw;
  font-size: 20px;
}

.intro-title {
  max-width: 90vw;
  color: whitesmoke;
  text-align: left;
  text-justify: inter-word;
}

.intro-subtitle {
  font-size: 2.5vh;
  margin: 1.5vh 0vh 2vh 6vh;
  max-width: 70vw;
  font-weight: 100;
  align-content: left;
  text-align: left;
  text-justify: inter-word;
}

.gold {
  color: #dec79b;
}

.gold-bars {
  max-width: 400px;
  margin: -6rem 0rem -14rem 0rem;
  z-index: -1;
  display: flex;
  flex-direction: row;
  float: right;
}

.avatar:hover {
  cursor: auto;
}

.divider {
  border-top: 1px solid;
  width: 11rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
<style lang="scss">
.vue-typer .custom.char {
  color: #dec79b;
}

.vue-typer .custom.caret {
  width: 3px;
  background-color: whitesmoke;
}
</style>
