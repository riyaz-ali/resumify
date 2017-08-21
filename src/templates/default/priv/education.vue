<template>
  <div>
    <div class="education title">
      <h3 class="text-uppercase" contenteditable>Education</h3>
      <button @click="count++" class="btn btn-primary btn-xs hidden-print add"><i class="fa fa-plus"></i> </button>
    </div>

    <removeable-container v-for="c in count" :onRemove="x => count--">
      <div>
        <strong contenteditable>2017</strong> &minus; <strong contenteditable>2017</strong>
        <strong style="color: #F44337; font-size: 0.95em" class="text-uppercase" contenteditable>{{ lipsum.generate(4) }}</strong>
      </div>
      <p contenteditable class="paragraph">
        {{ lipsum.generate(10) }}
      </p>
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
      count: 2
    })
  }
</script>

<style lang="scss">
  .education.title {
    position: relative;

    .btn.add {
      visibility: hidden;
      position: absolute;
      right: 0;
      top: 0;
    }

    &:hover { .btn.add { visibility: visible; } }
  }
</style>
