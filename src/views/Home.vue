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
          Hi, I'm <span class="gold">Armin</span>. I love desgning and building
          <span class="gold">software</span>.
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
export default {
  name: "Home",
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$|\.gif$/);
      return images("./" + path);
    }
  }
};
</script>

<style lang="css" scoped>
.intro-container {
  margin-left: 7rem;
  margin-right: 3rem;
  margin-top: -2rem;
  margin-bottom: 3rem;
  max-width: 80%;
  font-size: 20px;
}

.intro-title {
  color: whitesmoke;
  max-width: 85rem;
  text-align: left;
  text-justify: inter-word;
}

.intro-subtitle {
  margin-left: 5rem;
  align-content: left;
  text-align: left;
  text-justify: inter-word;
  max-width: 55rem;
  font-weight: 100;
}
.gold {
  color: #dec79b;
}

.gold-bars {
  display: flex;
  flex-direction: row;
  float: right;
  /* justify-content: right; */
  max-width: 400px;
  margin-right: 0;
  margin-bottom: -12rem;
  margin-top: -4rem;
  z-index: -1;
}

.avatar:hover {
  /* box-shadow: 2px 2px 5px 0px #dec79b; */
  cursor: auto;
}

.divider {
  border-top: 1px solid;
  width: 11rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
