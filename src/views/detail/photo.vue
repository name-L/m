<template>
  <div class="chaer">
      <slot></slot>
    <ul>
      <li v-for="(data,index) in list" :key="data">
        <img :src="data" alt @click="photos(index)"/>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    props: ['list'],
    methods: {
        photos (index) {
            this.$emit('through', index);
        }
    }
};
</script>
<style lang="scss">
.chaer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 10;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.3%;
      position: relative;
      top: 40px;
      padding: 5px;
      box-sizing: border-box;
      overflow: hidden;
     height: 120px;
      img {
        width: 100%;
        position: absolute;
        top: 50%;
        height: 100%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
