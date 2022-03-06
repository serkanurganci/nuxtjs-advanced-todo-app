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
  @apply duration-200 cursor-pointer py-1 px-2 text-gray-100 float-right  mt-2 border bg-purple-700 border-purple-900  rounded-lg text-sm;
}
.active{
  @apply bg-purple-500;
}
</style>
