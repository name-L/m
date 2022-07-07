import Vue from 'vue';
Vue.directive('title', {
    inserted (el, binding) {
        el.style.display = 'none';
        window.onscroll = () => {
            if ((window.document.documentElement.scrollTop || document.body.scrollTop) > binding.value) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        };
    },
    // 指令卸载周期
    unbind () {
        window.onscroll = null;
    }
});
