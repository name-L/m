<template>
  <div style="margin-bottom:50px;">
    <actionnav name="电影"></actionnav>
    <div class="aa" v-for="data in datalist" :key="data.filmId" @click="click(data.filmId)">
      <img :src="data.poster" alt />
      <div class="bb">
        <h4>{{data.name}}</h4>
        <p style="margin-top:15px;">主演：{{ data.actors| filterActor }}</p>
        <p>上映日期：{{ data.premiereAt| fileterpremiereAt }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
import moment from 'moment'
import actionnav from '@/components/actionnav'
import { mapState } from 'vuex'
Vue.filter('fileterpremiereAt', function (data) {
  // var str ='';
  // return str.concat('周') + moment(data * 1000).format("d MM月 DD日");
  const arr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return (
    arr[moment(data * 1000).format('d')] +
    moment(data * 1000).format(' MM月DD日')
  )
})
Vue.filter('filterActor', (el) => {
  return el.map((item) => item.name).join(' ')
})
export default {
  data () {
    return {
      datalist: []
    }
  },
  components: {
    actionnav
  },
  computed: {
    ...mapState('city', ['cityId'])
  },
  mounted () {
    http
      .request({
        url: `/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=2&k=978294`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      })
      .then((res) => {
        this.datalist = res.data.data.films
      })
  },
  methods: {
    click (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.aa {
  overflow: hidden;
  padding: 10px 0 10px 10px;
  img {
    width: 70px;
    float: left;
  }
  .bb {
    padding-top: 10px;
    padding-left: 80px;
    p {
      font-size: 13px;
      color: #797d82;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      //   width: 100%;
    }
  }
}
</style>
