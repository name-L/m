<template>
  <div>
    <tabbar v-show="this.istabbar"></tabbar>
    <!-- 路由容器 -->
    <transition name="aaa" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import tabbar from '@/components/tabbar';
import { mapState } from 'vuex';
export default {
    mounted () {
        console.log(this.istabbar);
    },
    computed: {
        ...mapState('tabber', ['istabbar'])
    },
    components: {
        tabbar
    }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.aaa-enter-active {
  animation: aaa 0.5s;
}
.aaa-leave-active {
  animation: aaa 0.5s reverse;
}
@keyframes aaa {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
