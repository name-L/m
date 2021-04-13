import Vue from 'vue'
Vue.filter('filterActor', function (el) {
  return el.map(item => item.name).join(' ')
})
