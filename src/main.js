// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/mavonEditor.css'
import './assets/github-markdown.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import DefaultLayout from '~/layouts/Default.vue'
import ElementUI from 'element-ui'
import util from './utils/util'
import Vuex from 'vuex'
import store from './store'

export default function (Vue, { router, head, isClient, appOptions  }) {
  Vue.use(Vuex)

  appOptions.store = store
  Vue.use(ElementUI)
  Vue.use(mavonEditor)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  Vue.prototype.$util = util

  Vue.prototype.$markdown = function (value) {
    return mavonEditor.markdownIt.render(value)
}
}
