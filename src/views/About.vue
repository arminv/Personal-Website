<template>
  <div class="page">
    <h1>About Me</h1>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <p class="intro">
          <span>
            I am a full stack software engineer who is eager to contribute to
            team success through hard work, attention to detail and excellent
            communication skills.<br /><br />I graduated with a degree in
            finance, pursued professional degrees following that and started
            working in the industry as a Financial Analyst.<br /><br />
            About 5 years ago I became interested in programming while I was
            looking for a new hobby and decided to learn more on my own. I never
            stopped learning since then. <br /><br />What started as a hobby
            then has now turned into my passion and plays a major role in my
            everyday life. It has been an extremely exciting journey and I have
            been enjoying every day of it.<br />
          </span>
          <br />
          <span class="signature">
            Have a great {{ getDayOfWeek() }}
            <i>- Armin Varshokar</i>
          </span>
        </p>
      </vs-col>
    </vs-row>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <div>
        <a
          class="resume"
          href="https://github.com/arminv/resume/blob/master/Armin_Varshokar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <vs-button color="primary" type="filled" class="resume-button"
            >Download Resume</vs-button
          >
        </a>
      </div>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <h2>Tools I Use</h2>
    </vs-col>
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
            src="https://img.icons8.com/color/96/000000/typescript.png"
            name="TypeScript"
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
            src="https://avatars3.githubusercontent.com/u/2159051?v=4"
            name="Lit"
          />
          <Logo src="https://img.icons8.com/color/2x/sass.png" name="Sass" />
          <Logo
            src="https://img.icons8.com/color/2x/graphql.png"
            name="GraphQL"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/firebase.png"
            name="Firebase"
          />
          <Logo
            src="https://img.icons8.com/color/96/000000/mongodb.png"
            name="MongoDB"
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
              <a
                href="https://icons8.com/icon/24895/npm"
                target="_blank"
                rel="noopener noreferrer"
                >Icons8</a
              ></span
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
  components: { Logo },
  methods: {
    getDayOfWeek() {
      let today = new Date();
      let weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      return weekday[today.getDay()];
    }
  }
};
</script>

<style lang="css" scoped>
h2 {
  font-size: 26px;
  color: var(--gold-color);
}
.intro {
  font-size: 22px;
  line-height: 1.5em;
  margin: 2.5rem 3.5rem 0rem 3.5rem;
  padding-bottom: 2em;
  max-width: 65%;
  color: var(--content-color);
  text-align: left;
  text-justify: inter-word;
}

.signature {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: left;
  text-justify: inter-word;
}

.logo-container {
  justify-content: center;
  align-content: center;
  margin: 2.5rem 3.5rem 2rem 3.5rem;
}

.icon-credit {
  margin-top: 3rem;
}

.resume-button {
  margin: 0rem 0rem 3rem 0rem;
}

.resume {
  color: var(--content-color);
}
</style>
