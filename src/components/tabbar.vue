<template>
  <nav>
    <!-- <ul>
      <router-link to="/film" tag="li" activeClass="Discoloration">电影</router-link>
      <router-link to="/cinema" tag="li" activeClass="Discoloration">影院</router-link>
      <router-link to="/center" tag="li" activeClass="Discoloration">我的</router-link>
    </ul>-->
    <ul>
      <router-link tag="li" :to="el.path" activeClass="Discoloration" v-for="el in navlist" :key="el.path">
          <i class="iconfont" :class="el.iconfont"></i>
          {{el.text}}
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
    data () {
        return {
            navlist: [
                {
                    path: '/film',
                    text: '电影',
                    iconfont: 'icon-iconfontplay2'
                },
                {
                    path: '/cinema',
                    text: '影院',
                    iconfont: 'icon-viewgallery'
                },
                {
                    path: '/center',
                    text: '我的',
                    iconfont: 'icon-account'
                }
            ]
        };
    }
};
</script>
<style lang="scss" scoped>
.Discoloration {
  color: red;
}
nav {
  position: fixed;
  z-index: 10;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #ffffff;
  border-top: 1px solid rgba(0,0,0,.1);
  ul {
    display: flex;
    li {
      flex: 1;
      line-height: 25px;
      text-align: center;
      list-style: none;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
