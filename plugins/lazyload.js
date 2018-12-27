import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  observer: true,
  preLoad: 1.3,
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
