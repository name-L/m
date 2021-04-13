<template>
  <div>
    <swiper :key="looplist.length">
      <div class="swiper-slide" v-for="el in looplist" :key="el.bannerId">
        <img :src="el.imgUrl" alt />
      </div>
    </swiper>
    <div>
      <ul>
        <router-link to="/film/nowplaying" tag="li" activeClass="ccccccccc">正在热映</router-link>
        <router-link to="/film/comingsoon" tag="li" activeClass="ccccccccc">即将上映</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import http from '@/util/http'
import swiper from '@/components/Swiper'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      looplist: []
    }
  },
  components: {
    swiper //  局部注册swiper组件
  },
  computed: {
    ...mapState('city', ['cityId'])
  },
  mounted () {
    http
      .request({
        url: `/gateway?type=2&cityId=${this.cityId}&k=1231926`,
        headers: {
          'X-Host': 'mall.cfg.common-banner'
        }
      })
      .then(res => {
        console.log(res.data)
        var obj = {
          bannerId: 1008611,
          imgUrl:
            'https://pic.maizuo.com/usr/movie/f046c5d6b2c397a8194ab14dc439d7dd.jpg?x-oss-process=image/quality,Q_70'
        }
        // this.looplist = res.data.data;
        if (res.data.data) {
          this.looplist = [...res.data.data, obj]
        }
      })
  }
}
</script>
<style lang="scss" scoped>
.swiper-slide {
  img {
    width: 100%;
    height: 183px;
  }
}
li {
  float: left;
  width: 50%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
  text-align: center;
}
.ccccccccc {
  color: red;
}
</style>
