<template>
    <div>
        <div class="title">
            <!-- <div class="left" @click="haindshow">{{$store.state.city.cityName}}</div> -->
            <div class="left" @click="haindshow">{{this.cityName}}</div>
            <div>影院</div>
            <div class="right">
                <!-- <i class="iconfont icon-search" @click="haindshow"></i> -->
                <router-link to="/cinema/search" tag="i" class="iconfont icon-search"></router-link>
            </div>
        </div>
        <div class="ssss">
            <div @click="show=!show" :class="show==true?'active':''">{{this.current}}</div>
            <div>APP订票</div>
            <div>最近去过</div>
        </div>
        <div class="area" v-show="show">
            <ul>
                <li
                  v-for="data in arealist"
                  :key="data"
                  @click="handclick(data)"
                  :class="data==current?'active':''"
                >
                  {{data}}
                </li>
            </ul>
        </div>
        <div class="content">
            <item v-for="data in compdatalist" :key="data.cinemaId" :data="data"></item>
            <!-- <ul>
        <li v-for="data in compdatalist" :key="data.cinemaId">
          <h4>{{data.name}}</h4>
          {{data.address}}
        </li>
      </ul>-->
        </div>
    </div>
</template>
<script>
// import http from "@/util/http";
import item from './cimen/ciment';
import { mapState, mapMutations, mapActions } from 'vuex'; // mapState是vuex提供的切割函数
export default {
    data () {
        return {
            // datalist: [],
            show: false,
            current: '全城'
        };
    },
    components: {
        item
    },
    methods: {
        handclick (data) {
            this.current = data;
            this.show = false;
        },
        haindshow () {
            this.setlist([]);
            // this.$store.commit('cinema/setlist',[])
            this.$router.push('/cccc');
        },
        ...mapMutations('cinema', ['setlist']),
        ...mapActions('cinema', ['getaction'])
    },
    computed: {
        ...mapState('cinema', ['datalist']),
        ...mapState('city', ['cityName', 'cityId']),
        arealist () {
            console.log(this.datalist);
            var newarr = this.$store.state.cinema.datalist.map(
                (item) => item.districtName
            );
            var newlist = ['全城', ...new Set(newarr)];
            return newlist;
        },
        compdatalist () {
            if (this.current === '全城') {
                return this.$store.state.cinema.datalist;
            }
            return this.$store.state.cinema.datalist.filter(
                (item) => item.districtName === this.current
            );
        }
    },
    mounted () {
        // new BScroll(".content")
        console.log(this.$store.state);
        if (this.$store.state.cinema.datalist.length === 0) {
            //   this.$store.dispatch('cinema/getaction', this.$store.state.city.cityId)
            this.getaction(this.cityId);
        }

        // http
        //   .request({
        //     url: "/gateway?cityId=310100&ticketFlag=1&k=7912347",
        //     headers: {
        //       "X-Host": "mall.film-ticket.cinema.list"
        //     }
        //   })
        //   .then(res => {
        //     console.log(res.data);
        //     this.datalist = res.data.data.cinemas;
        //   });
    }
};
</script>
<style lang="scss" scoped>
.title {
    display: flex;
    position: fixed;
    z-index: 10;
    line-height: 40px;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: white;
    div {
        flex: 1;
        text-align: center;
    }
    .left {
        text-align: left;
        margin-left: 10px;
    }
    .right {
        text-align: right;
        margin-right: 10px;
    }
}
.ssss {
    display: flex;
    position: fixed;
    z-index: 10;
    line-height: 40px;
    top: 40px;
    left: 0;
    width: 100%;
    height: 40px;
    background: white;
    div {
        flex: 1;
        text-align: center;
    }
}
.content {
    position: relative;
    top: 80px;
    li {
        padding: 10px;
    }
}
.area {
    position: fixed;
    top: 80px;
    left: 0px;
    width: 100%;
    background: white;
    z-index: 10;
    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            width: 25%;
            padding: 5px;
            box-sizing: border-box;
            text-align: center;
        }
    }
}
.active {
    border: 1px solid red;
}
</style>
