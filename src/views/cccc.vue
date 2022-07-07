<template>
  <div>
    <van-index-bar :index-list="indexList">
      <div v-for="(data,index) in datalist" :key="index">
        <van-index-anchor :index="data.index">{{data.index}}</van-index-anchor>
        <van-cell :title="el.name" v-for="el in data.list" :key="el.name" @click="handclick(el)" />
      </div>
    </van-index-bar>
  </div>
</template>
<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor } from 'vant';
import http from '@/util/http';
import { mapMutations } from 'vuex';
Vue.use(IndexBar);
Vue.use(IndexAnchor);
export default {
    data () {
        return {
            indexList: [],
            datalist: []
        };
    },

    mounted () {
        http
            .request({
                url: '/gateway?k=2988526',
                headers: {
                    'X-Host': 'mall.film-ticket.city.list'
                }
            })
            .then(res => {
                console.log(res.data.data.cities);
                this.dataFilter(res.data.data.cities);
            });
    },
    methods: {
        dataFilter (cities) {
            var letteArr = [];
            for (var i = 65; i < 91; i++) {
                letteArr.push(String.fromCharCode(i));
            }
            var cityArr = [];
            for (var j = 0; j < letteArr.length; j++) {
                var tmpArr = cities.filter(
                    item => item.pinyin.substring(0, 1).toUpperCase() === letteArr[j]
                );
                tmpArr.length &&
          cityArr.push({
              index: letteArr[j],
              list: tmpArr
          });
                tmpArr.length && this.indexList.push(letteArr[j]);
            }
            this.datalist = cityArr;
        },
        // 点击相应城市
        handclick (el) {
            this.setcityName(el.name);
            this.setcityId(el.cityId);
            // localStorage.setItem('cityId',el.cityId)
            // localStorage.setItem('cityName',el.name)
            this.$router.back();
        },
        ...mapMutations('city', ['setcityName', 'setcityId'])
    }
};
</script>
