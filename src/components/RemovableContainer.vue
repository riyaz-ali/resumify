<template>
  <div class="component removeable-container" v-if="shouldDisplay">
    <button @click="$props.onRemove() || (shouldDisplay = false)" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <slot>Removable Container</slot>
  </div>
</template>

<script>
  export default {
    data: () => ({
      shouldDisplay: true
    }),
    props: {
      onRemove: {
        type: Function,
        default: function noop(){ }
      }
    }
  }
</script>

<style lang="scss">
  .component.removeable-container {
    position: relative;

    .close {
      visibility: hidden;
      outline: none;
      display: inline-block;
    }

    &:hover{ .close { visibility: visible; }}
  }
</style>
