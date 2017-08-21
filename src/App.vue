<template>
  <div>
    <h1 class="resumify heading">resumify!</h1>

    <ul class="nav nav-pills">
      <router-link :to="route.path" tag="li" v-for="route in this.$router.options.routes" key="route.name">
        <a>{{route.name.toUpperCase()}}</a>
      </router-link>
    </ul>

    <div class="resumify container">
      <Toolbar class="resumify toolbar hidden-print" :onReset="this.onReset" :onSave="this.onSave"></Toolbar>

      <div ref="resume" class="resume"><router-view></router-view></div>
    </div>

    <footer class="resumify footer">
      <span><i class="fa fa-github fa-2x"></i></span>
      <span><a href="/">resumify!</a> <i class="fa fa-code"></i> with <i class="fa fa-heart"></i> by <a href="https://github.com/riyaz-ali" target="_blank">riyaz-ali</a></span>
    </footer>
  </div>
</template>

<script>
  import FileSaver from "file-saver"
  import html2canvas from "html2canvas"

  // components
  import Toolbar from "@/components/toolbar"

  export default {
    components: {
      Toolbar
    },
    methods: {
      onSave: function(){
        document.body.classList.add('taking-snapshot');
        html2canvas(this.$refs.resume).then(canvas => {
          document.body.classList.remove('taking-snapshot')
          canvas.toBlob(blob => {
            FileSaver.saveAs(blob, 'resume.jpg')
          }, 'image/jpeg', 1)
        })
      },
      onReset: function(){
        console.log('reseting')
      }
    }
  }
</script>

<style lang="scss">
  body, html {
    padding: 0px 15px;
    background-color: #efefef;
  }

  // hide dynamic elements when taking snapshot
  // add class .hidden-snapshot to elements that you want to hide
  body.taking-snapshot {
    .hidden-snapshot {
      display: none;
    }
  }

  .resumify.heading {
    text-align: center;
    font-family: monospace;
    color: rgba(0, 0, 0, 0.75);
    padding-bottom: 0.25em;
    border-bottom: dashed 1px;
  }

  .resumify.toolbar {
    position: absolute;
    right: 0;
  }

  .resumify.container {
    padding: 0; // reset
    margin-top: 0.75em;
    margin-bottom: 25px;
    position: relative;
    border-radius: 4px;
    width: 21cm;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

    font-family: Helvetica,Arial,sans-serif;
    .resume {
      background-color: #fff;
    }
  }

  .resumify.footer {
    margin-top: 15px;
    padding: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;

    i.fa-heart { color: #f44336; }
    a {font-weight: 700;}
  }
</style>
