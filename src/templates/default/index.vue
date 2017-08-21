<template>
  <div class="template default">
    <!-- GRID-->
    <div class="row">
      <!-- Column left -->
      <div class="col-sm-5">
        <div class="info-column">
          <!-- User image -->
          <div><user-image /></div>
          <!-- location -->
          <Location />
          <!-- demographics -->
          <Demograph />
          <!-- contact -->
          <Contact />
          <!-- social links -->
          <Social />
        </div>
      </div>

      <!-- Column right -->
      <div class="col-sm-6" style="padding-top: 20px;padding-bottom: 20px;">
        <!-- your name here -->
        <Name />
        <!-- about section -->
        <About class="template element" style="margin-top: 60px;" />
        <!-- Achievements -->
        <Achievements class="template element" />
        <!-- Education -->
        <Education class="template element" />
        <!-- work -->
        <Work class="template element" />
        <!-- skills -->
        <Skill class="template element" />
      </div>

    </div>
  </div>
</template>

<script>
  // helper
  import lipsum from "@/utils/lipsum"

  //- private components
  import Name from "./priv/name.vue"
  import About from "./priv/about.vue"
  import Achievements from "./priv/acievements.vue"
  import Education from "./priv/education.vue"
  import Work from "./priv/work.vue"
  import Skill from "./priv/skill.vue"

  import UserImage from "@/components/UserImage.vue"
  import Location from "./priv/location.vue"
  import Demograph from "./priv/demograph.vue"
  import Contact from "./priv/contact.vue"
  import Social from "./priv/social.vue"

  export default {
    name: 'DefaultTemplate',
    components: {
      UserImage,
      Location,
      Demograph,
      Contact,
      Social,

      Name,
      About,
      Achievements,
      Education,
      Work,
      Skill
    },
    data: () => ({
      lipsum
    })
  }
</script>

<style lang="scss">
  .template.default {
    color: rgba(0, 0, 0, 0.75);

    > .row {
      display: flex;
      flex-wrap: wrap;
    }

    .template.element {
      margin: 40px 0px;
    }

    .info-column {
      padding-bottom: 20px;
      height: 100%;
      //background-color: #f44336;
      border-right: 1px solid #eee;
      display: flex;
      flex-direction: column;
    }
  }
</style>
