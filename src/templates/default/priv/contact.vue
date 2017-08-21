<template>
  <div class="col-sm-12 user-contact">
    <div class="title text-uppercase" contenteditable>Contact</div>

    <removeable-container><div class="row">
      <div class="col-xs-1"><i class="fa fa-home fa-2x"></i></div>
      <address class="col-xs-9" style="padding-left: 30px" contenteditable>
        {{ lipsum.generate(15) }}
      </address>
    </div></removeable-container>

    <removeable-container><div class="row" style="margin-top: 10px">
      <div class="col-xs-1"><i class="fa fa-envelope fa-2x"></i></div>
      <strong class="col-xs-9" style="padding-left: 30px; white-space: nowrap" contenteditable>
        email@somedomain.com
      </strong>
    </div></removeable-container>

    <removeable-container><div class="row" style="margin-top: 20px">
      <div class="col-xs-1"><i class="fa fa-globe fa-2x"></i></div>
      <strong class="col-xs-9" style="padding-left: 30px; white-space: nowrap" contenteditable>
        www.yoursite.com
      </strong>
    </div></removeable-container>
  </div>
</template>

<script>
  import lipsum from "@/utils/lipsum"

  import RemoveableContainer from "@/components/RemovableContainer"

  export default {
    components: {
      RemoveableContainer
    },
    data: () => ({
      lipsum
    })
  }
</script>

<style lang="scss">
  .user-contact {
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
  }
</style>
