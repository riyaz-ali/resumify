<template>
  <div>
    <div class="skill title">
      <h3 class="text-uppercase" contenteditable>Skills</h3>
      <button @click="count++" class="btn btn-primary btn-xs hidden-print add"><i class="fa fa-plus"></i> </button>
    </div>

    <removeable-container :onRemove="() => count--" class="rating-widget" v-for="c in count" key="c">
      <div class="rating-widget-title" contenteditable>Javascript</div>
      <fieldset class="rating">
        <input type="radio" :id="`star5-for${c}`" :name="`rating-${c}`" value="5" /><label class = "full" :for="`star5-for${c}`"></label>
        <input type="radio" :id="`star4-for${c}`" :name="`rating-${c}`" value="4" /><label class = "full" :for="`star4-for${c}`"></label>
        <input type="radio" :id="`star3-for${c}`" :name="`rating-${c}`" value="3" /><label class = "full" :for="`star3-for${c}`"></label>
        <input type="radio" :id="`star2-for${c}`" :name="`rating-${c}`" value="2" /><label class = "full" :for="`star2-for${c}`"></label>
        <input type="radio" :id="`star1-for${c}`" :name="`rating-${c}`" value="1" /><label class = "full" :for="`star1-for${c}`"></label>
      </fieldset>
    </removeable-container>

  </div>
</template>

<script>
  import RemoveableContainer from "@/components/RemovableContainer.vue"
  import lipsum from "@/utils/lipsum"

  export default {
    components: {
      RemoveableContainer
    },
    data: () => ({
      lipsum,
      count: 1
    })
  }
</script>

<style lang="scss">
  .skill.title {
    position: relative;

    .btn.add {
      visibility: hidden;
      position: absolute;
      right: 0;
      top: 0;
    }

    &:hover { .btn.add { visibility: visible; } }
  }

  // forked from https://codepen.io/jamesbarnett/pen/vlpkh
  .rating-widget {
    display: flex;

    &-title {
      align-self: center;
      margin-right: 10px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      flex-basis: 35%;
    }

    fieldset, label {
      margin: 0;
      padding: 0;
    }

    /****** Style Star Rating Widget *****/

    .rating {
      border: none;
      float: left;
    }

    .rating > input {
      display: none;
    }
    .rating > label:before {
      margin: 5px;
      font-size: 1.25em;
      font-family: FontAwesome;
      display: inline-block;
      content: "\f111";
    }

    .rating > label {
      color: #ddd;
      float: right;
    }

    /***** CSS Magic to Highlight Stars on Hover *****/

    .rating > input:checked ~ label, /* show gold star when clicked */
    .rating:not(:checked) > label:hover, /* hover current star */
    .rating:not(:checked) > label:hover ~ label {
      color: #2196F3;
    }
    /* hover previous stars in list */

    .rating > input:checked + label:hover, /* hover current star when changing rating */
    .rating > input:checked ~ label:hover,
    .rating > label:hover ~ input:checked ~ label, /* lighten current selection */
    .rating > input:checked ~ label:hover ~ label {
      color: lighten(#2196F3, 10%);
    }
  }
</style>
