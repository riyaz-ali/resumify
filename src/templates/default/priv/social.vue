<template>
  <div class="col-sm-12 user-social">
    <div class="title text-uppercase" contenteditable>Social</div>

    <removeable-container class="sites" v-for="(site, index) in sites" key="site.title" :onRemove="() => sites.splice(index, 1)">
      <div class="row" style="margin-top: 10px">
        <div class="col-xs-1">
          <img class="favicon" :src="site.img"/>
        </div>
        <span class="col-xs-9 site-link">
          {{ site.title }}
        </span>
      </div></removeable-container>

    <form class="hidden-snapshot" style="border: 1px solid #eee; margin: 20px -15px;padding:5px 15px;" @submit.prevent="addSocialLink">
      <div class="hidden-print form-group">
        <label for="link">Add Link</label>
        <input type="text" id="link" class="form-control" name="link"/>
      </div>
    </form>
  </div>
</template>

<script>
  import lipsum from "@/utils/lipsum"
  import loadFavicon from "@/utils/loadFavicon"
  import RemoveableContainer from "@/components/RemovableContainer"

  export default {
    components: {
      RemoveableContainer
    },
    data: () => ({
      lipsum,
      sites:[]
    }),
    methods: {
      addSocialLink: function(evt){
        evt.preventDefault();
        let url = evt.target.link.value;
        loadFavicon(`http://${url}`).then(src => {
          evt.target.link.value = ""
          this.sites.push({img: src, title: url})
        })
      }
    }
  }
</script>

<style lang="scss">
  .user-social {
    padding: 0px 30px;
    .title {
      color: #FFF;
      margin: 20px -20px;
      padding: 5px;
      padding-left: 25px;
      background-color: #2196F3;
      border-radius: 4px;
      position: relative;
      font-size: 20px;
      font-weight: 200;

      &:after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: -19px;
        left: 30px;
        border: 10px solid transparent;
        border-top: 10px solid #2196F3;
      }
    }

    .sites {
      margin: 20px 0px;
      img.favicon {
        height: 28px;
        width: 28px;
      }
      .site-link {
        padding-left: 30px;
        font-weight: 700;
      }
    }
  }
</style>
