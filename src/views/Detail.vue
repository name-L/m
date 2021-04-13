<template>
  <div v-if="filminfo" class="detail">
    <!-- mtitle是头部组件 ：name是父传子  v-title是封装的指令 40代表到40 显示 -->
    <mtitle :name="filminfo.name" @back="back" v-title="30"></mtitle>
    <div class="image">
        <img :src="filminfo.poster" alt />
    </div>
    <div class="yyin">
      <h4>
        {{filminfo.name}} <span class="var">{{filminfo.filmType.name}}</span>
        <span class="var-a">{{filminfo.grade}}分</span>
      </h4>
      <p>{{filminfo.category}}</p>
      <p style="margin:10px 0;">{{filminfo.premiereAt | dataFilter}}待定</p>
      <p style="margin-bottom:12px;">{{filminfo.nation}} | 90分钟</p>
      <div style="line-height:20px;" :class="isActive?'synopsis':''">{{filminfo.synopsis}}</div>
      <button style="height:0px;margin-top:5px;" v-on:click="isActive=!isActive">ˇ</button>
      <h4>演职人员</h4>
      <swiper
        :data="{
           slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
        }"
        leleclass="actor"
      >
        <div class="swiper-slide" v-for="data in filminfo.actors" :key="data.name">
          <img :src="data.avatarAddress" alt />
        </div>
      </swiper>
      <div style="display:flex;justify-content:space-between;">
        <h4>剧照</h4>
        <div style="margin:20px 20px ;" @click="phout">全部({{filminfo.photos.length}}) ></div>
      </div>
      <photo v-show="phoutshow" :list="filminfo.photos" @through="preview">
        <mtitle @back="hide">剧照( {{filminfo.photos.length}} )</mtitle>
      </photo>
      <swiper
        :data="{
           slidesPerView: 2,
            spaceBetween: 10,
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
        }"
        leleclass="photo"
      >
        <div class="swiper-slide" v-for="data in filminfo.photos" :key="data">
          <img :src="data" alt />
        </div>
      </swiper>
    </div>
  </div>
</template>
<script>
import http from '@/util/http'
import moment from 'moment'
import Vue from 'vue'
import { Dialog, ImagePreview } from 'vant'
import mtitle from '@/components/titel'
import photo from '@/views/detail/photo'
import swiper from '@/components/Swiper'
// 局部引入指令
// import  '@/util/directive'
// 全局注册
Vue.use(Dialog)
Vue.filter('dataFilter', function (data) {
  return moment(data * 1000).format('YYYY-MM-DD')
})
export default {
  data () {
    return {
      filminfo: null,
      isActive: true,
      phoutshow: false
    }
  },
  components: {
    swiper, //  局部注册swiper组件
    mtitle,
    photo
  },
  methods: {
    back () {
      this.$router.back()
    },
    // 组件隐藏
    hide () {
      this.phoutshow = false
    },
    // 图片预览
    preview (index) {
      ImagePreview({
        images: this.filminfo.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: 'top-left',
        onClose () {
          // do something
        }
      })
    },
    phout () {
      this.phoutshow = true
    }
  },
  beforeDestroy () {
    window.onscroll = null
  },
  mounted () {
    http
      .request({
        url: `/gateway?filmId=${this.$route.params.Id}&k=7481140`,
        headers: {
          'X-Host': 'mall.film-ticket.film.info'
        }
      })
      .then(res => {
        this.filminfo = res.data.data.film
        console.log(this.filminfo)
      })
  },
  beforeMount () {
    Dialog.confirm({
      // title: "该影片目前没有排期，到首页看其他电影吧",
      message: '该影片目前没有排期，到首页看其他\n电影吧',
      cancelButtonText: '拒绝',
      confirmButtonText: '同意',
      confirmButtonColor: 'orange'
    })
      .then(() => {
        // on confirm
        this.$router.back()
      })
      .catch(() => {
        // on cancel
      })
  }
}
</script>
<style lang="scss" scoped>
h4 {
  color: #191a1b;
  font-size: 16px;
  margin: 10px 7px 10px 0;
  font-size: 18px;
  font-weight:400;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.var{
  font-size: 9px;
  color: #fff;
  background: #d2d6dc;
  height: 14px;
  line-height:14px ;
  border-radius: 2px;
  padding: 0 2px;
}
.image{
    width: 100%;
    height: 210px;
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
img {
  width: 100%;
}
.swiper-slide{
    width: 100%;
    height: 100px;
    overflow: hidden;
    img{
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
.yyin {
  margin-left: 10px;
  font-size: 13px;
}
.var-a {
  float: right;
  margin-right: 15px;
  color: #ffb232;
}
.synopsis {
  height: 40px;
  overflow: hidden;
}
button {
  margin-left: 160px;
}
.detail {
  color: #797d82;
  margin-bottom: 50px;
}
</style>
