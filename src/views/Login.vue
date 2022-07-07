<template>
  <div>
    <button v-on:click="handclick()">登录</button>
  </div>
</template>
<script>
export default {
    methods: {
        handclick () {
            localStorage.setItem('token', JSON.stringify({ isLogin: true }));
            this.$router.push('/center');
        }
    }
};
</script>
