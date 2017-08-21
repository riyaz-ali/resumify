<template>
  <div class="row col-sm-12 user-demographics">
    <div class="element">
      <div><strong contenteditable>male</strong></div>
      <span>sex</span>
    </div>

    <div class="element">
      <div><strong contenteditable>19</strong></div>
      <span>age</span>
    </div>

    <div class="element">
      <div><strong contenteditable>B.C.A</strong></div>
      <span>degree</span>
    </div>
  </div>
</template>

<style lang="scss">
  .user-demographics {
    padding: 0;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    width: auto;
    margin: 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);

    > div.element {
      flex-grow: 1;
      padding: 15px;
      background-color: #fff;
      text-transform: uppercase;
      border-left: 0.5px solid #eee;
      border-right: 0.5px solid #eee;

      &:first-child{ border-left: none; }
      &:last-child{ border-right: none; }

      strong {
        font-size: 16px;
      }

      span {
        font-size: 14px;
      }
    }
  }
</style>
