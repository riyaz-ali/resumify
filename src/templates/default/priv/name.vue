<template>
  <div>
    <div>
      <h4 contenteditable style="margin-bottom: 0;">Title</h4>
    </div>

    <div>
      <h1 class="text-uppercase" style="font-size: 40px; margin: 0 5px 0 0; display: inline-block" contenteditable>Riyaz</h1>
      <h1 class="text-uppercase" style="font-size: 40px; margin: 0 0 0 5px; display: inline-block" contenteditable>Ali</h1>
    </div>

    <removeable-container>
      <small style="color: rgba(0,0,0,0.6)" contenteditable>{{ lipsum.generate(15) }}</small>
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
      lipsum
    })
  }
</script>
