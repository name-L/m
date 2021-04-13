import Vue from 'vue'
import Vuex from 'vuex'
// import http from "@/util/http";
import cinema from './module/cimema'
import tabber from './module/tabber'
import city from './module/city'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    // istabbar: true,
    // datalist: []
  },
  mutations: {
    // show() {
    //   this.state.istabbar = false
    // },
    // hide() {
    //   this.state.istabbar = true
    // },
    // setlist(state, data) {
    //   console.log(data);
    //   this.state.datalist = data

    // }
  },
  actions: {
    // 异步处理的地方
    // getaction(store) {
    //   http
    //     .request({
    //       url: "/gateway?cityId=310100&ticketFlag=1&k=7912347",
    //       headers: {
    //         "X-Host": "mall.film-ticket.cinema.list"
    //       }
    //     })
    //     .then(res => {
    //       console.log(res.data);
    //       this.datalist = res.data.data.cinemas;
    //       store.commit('setlist', res.data.data.cinemas)
    //     });
    // }
  },
  modules: {
    // 合并区域
    cinema,
    tabber,
    city
  },
  // 对上面的全局状态进行数据处理  类似于vue中的计算属性
  getters: {
    // topDatolist(state) {
    //   return state.datalist.slice(0, 5);
    // }
  }
})
