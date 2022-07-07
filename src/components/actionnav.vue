<template>
  <div class="fixedBtn" id="fixedBtn" @scroll="scrollaa">
    <div class="theFilm">{{name}}</div>
    <div class="pos">
      <router-link
        v-for="(item,index) in data"
        :key="index" :to="item.path"
        tag="li"
        active-class="color"
      >
        {{item.name}}
      </router-link>
      <!-- <div
        v-for="(item,index) in data"
        :key="index"
        @click="discoloration(index,item.path)"
        :class="{color:index==current}"
      >{{item.name}}
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
    props: ['name'],
    data () {
        return {
            current: '',
            data: [
                {
                    name: '正在热映',
                    path: '/film/nowplaying'
                },
                {
                    name: '即将上映',
                    path: '/film/comingsoon'
                }
            ],
            fixed: false
        };
    },
    mounted () {
        window.addEventListener('scroll', this.fixedActiveBtn);
    },
    methods: {
    // discoloration(index,path) {
    //   this.current = index;
    //   this.$router.push(path)
    // },
        scrollaa () {
            console.log('子组件触发');
            // this.$emit("getData", this.current);
        },
        fixedActiveBtn () {
            var fixedEle = document.getElementById('fixedBtn');
            var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
            if (scrollTop >= 200) {
                fixedEle.style.display = 'block';
            } else {
                fixedEle.style.display = 'none';
            }
        }
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.fixedActiveBtn, false);
    }
};
</script>
<style lang="scss" scoped>
#fixedBtn {
  display: none;
}
.fixedBtn {
  position: fixed; //固定定位
  width: 100%;
  background: white;
  top: 0;
  left: 0;
  z-index: 200;
}
.color {
  color: orange;
  border-bottom: 2px orange solid;
}
.theFilm {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.pos {
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
}
</style>
