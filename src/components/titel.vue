<template>
  <div class="titl">
    <i class="iconfont icon-back" @click="back"></i>
    <span class="titl-a">
        <slot></slot>
        {{name}}
    </span>
  </div>
</template>
<script>
export default {
    props: ['name'],
    methods: {
        back () {
            this.$emit('back');
        }
    }
};
</script>
<style lang="scss">
.titl {
  width: 100%;
  height: 40px;
  background: white;
  line-height: 40px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  &-a {
    position: absolute;
    left: 40%;
    color: #000;
  }
  i {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
