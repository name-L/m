<template>
  <div class="swiper-container" :class="leleclass">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  props: ['data', 'leleclass'],
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('.' + (this.leleclass ? this.leleclass : 'swiper-container'), this.data)
  }
}
</script>
