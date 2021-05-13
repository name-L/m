<template>
  <div>
    <actionnav name="电影"></actionnav>
    <ul style="margin-bottom:50px;">
      <li v-for="el in datalist" :key="el.filmId" @click="click(el.filmId)">
        <img :src="el.poster" alt />
        <div class="bb">
          <h4>{{el.name}}</h4>
          <p>
            观众评分
            <span style="color:#ffb232;font-size:14px;">{{el.grade }}</span>
          </p>
          <p class="actor">主演：{{ el.actors | filterActors }}</p>
          <p class="actor">{{ el.nation }} | {{ el.runtime }}分钟</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
import { mapState } from 'vuex'
import { Dialog } from 'vant'
import actionnav from '@/components/actionnav'

// 全局注册
Vue.use(Dialog)
// 过滤器
Vue.filter('filterActors', function (data) {
  if (data) {
    return data.map((item) => item.name).join(' ')
    // var a = [];
    // data.forEach(element => {
    //   return a.push(element.name);
    // });
    // return a.join(" ");
  } else {
    return '暂无主演'
  }
})
export default {
  data () {
    return {
      datalist: [],
      num: 2,
      fixed: false
    }
  },
  computed: {
    ...mapState('city', ['cityId'])
  },
  components: {
    actionnav
  },
  mounted () {
    http
      .request({
        url: `/gateway?cityId=${this.$store.state.city.cityId}&pageNum=1&pageSize=10&type=1&k=8741975`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      })
      .then((res) => {
        console.log(res.data.data.films)
        this.datalist = res.data.data.films
      })
    window.addEventListener('scroll', this.lazyLoading)
  },
  methods: {
    click (id) {
      this.$router.push(`/detail/${id}`)
    },
    lazyLoading () {
      var serf = this
      window.onscroll = function () {
        // 变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        // 变量windowHeight是可视区的高度
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight
        // 变量scrollHeight是滚动条的总高度
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight
        // 滚动条到底部的条件
        if (Math.ceil(scrollTop + windowHeight) >= scrollHeight) {
          // 写后台加载数据的函数
          // let aa = JSON.parse(localStorage.getItem("vuex", "cityId")).city.cityId;
          http
            .request({
              url: `/gateway?cityId=${
                serf.$store.state.city.cityId
              }&pageNum=${serf.num++}&pageSize=10&type=1&k=5301240`,
              headers: {
                'X-Host': 'mall.film-ticket.film.list'
              }
            })
            .then((res) => {
              serf.datalist = [...serf.datalist, ...res.data.data.films]
            })
        }
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.lazyLoading, false)
  }
}
</script>
<style lang="scss" scoped>
li {
  overflow: hidden;
  padding: 10px 0 10px 10px;
  img {
    float: left;
    width: 70px;
  }
  .bb {
    padding-top: 10px;
    padding-left: 80px;
  }
  .actor {
    font-size: 13px;
    color: #797d82;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    // width: 100%;
  }
}
</style>
