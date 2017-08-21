<template>
  <div class="component toolbar">
    <button type="button" @click="this.$props.onSave" class="btn btn-xs btn-primary"><i class="fa fa-download"></i></button>
    <!--<button type="button" @click="this.$props.onReset" class="btn btn-xs btn-warning"><i class="fa fa-refresh"></i></button>-->
  </div>
</template>

<script>
  export default {
    props: {
      onSave: {
        type: Function,
        required: true
      },
      onReset: {
        type: Function,
        //required: true
      }
    }
  }
</script>

<style lang="scss">
  .component.toolbar {
    padding: 10px;
  }
</style>
