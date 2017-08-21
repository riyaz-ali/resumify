<template>
  <div>
    <div class="about title">
      <h3 class="text-uppercase" contenteditable>About</h3>
      <button @click="count++" class="btn btn-primary btn-xs hidden-print add"><i class="fa fa-plus"></i> </button>
    </div>

    <removeable-container v-for="c in count" :onRemove="x => count--">
      <p contenteditable class="paragraph">
        {{ lipsum.generate(50) }}
      </p>
    </removeable-container>
  </div>
</template>

<script>
  import lipsum from "@/utils/lipsum"
  import RemoveableContainer from "@/components/RemovableContainer.vue"

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
  .about.title {
    position: relative;

    .btn.add {
      visibility: hidden;
      position: absolute;
      right: 0;
      top: 0;
    }

    &:hover { .btn.add { visibility: visible; } }
  }

  p.paragraph {
    color: rgba(0,0,0,0.6);
  }
</style>
