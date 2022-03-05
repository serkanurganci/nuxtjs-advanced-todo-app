<template>
  <div class="button" :class="[{active:active}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button",
  props:{
    active:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="scss" scoped>
.button{
  @apply cursor-pointer py-1 px-2 text-gray-300 float-right  mt-2 border bg-purple-900 border-purple-900  rounded-lg text-sm;
}
.active{
  @apply bg-purple-600;
}
</style>
