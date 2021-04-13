<template>
  <div>
    <div class="query">
      <van-search v-model="mytext" show-action placeholder="请输入搜索关键词" @cancel="onCancel" />
      <div v-show="mytext">
        <ul v-if="qqqqdatalist.length">
          <!-- <li v-for="data in qqqqdatalist" :key="data.cinemaId">{{data.name}}</li> -->
          <item v-for="data in qqqqdatalist" :key="data.cinemaId" :data="data"></item>
        </ul>
        <div v-else>没有查询到</div>
      </div>
    </div>
    <div class="distance" v-show="!mytext">
      <!-- <ul>
        <li v-for="(data,index) in this.topDatolist" :key="index">{{data.name}}</li>
      </ul>-->
      <van-list >
        <van-cell v-for="(data,index) in this.topDatolist" :key="index" :title="data.name" />
      </van-list>
    </div>
  </div>
</template>
<script>
import item from './cimen/ciment'
import { mapState, mapGetters } from 'vuex'
import Vue from 'vue'
import { Search, List, Cell } from 'vant'

Vue.use(Search)
Vue.use(List)
Vue.use(Cell)
export default {
  data () {
    return {
      mytext: ''
    }
  },
  components: {
    item
  },
  mounted () {
    // this.$store.state.istabbar=false
    // 这是合并之后的写法 因为多了个文件 要点进去
    // this.$store.state.tabber.istabbar=false
    this.$store.commit('tabber/show')
    // 异步请求
    if (this.$store.state.cinema.datalist.length === 0) {
      this.$store.dispatch('cinema/getaction')
    }
  },
  destroyed () {
    //  this.$store.state.istabbar=true
    // 这是合并之后的写法 因为多了个文件 要点进去
    // this.$store.state.tabber.istabbar=true
    this.$store.commit('tabber/hide')
  },
  methods: {
    onCancel () {
      this.$router.back()
    }
  },
  computed: {
    ...mapState('cinema', ['datalist']),
    ...mapGetters('cinema', ['topDatolist']),
    topDatolist () {
      return this.$store.state.cinema.datalist.slice(0, 5)
    },
    qqqqdatalist () {
      return this.$store.state.cinema.datalist.filter(
        item =>
          item.name.includes(this.mytext) ||
          item.name.toUpperCase().includes(this.mytext) ||
          item.name.toLowerCase().includes(this.mytext)
      )
    }
  }
}
</script>
