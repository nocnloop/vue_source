import Vue from 'vue'

import msg from '@/utils/msg'

const plugin = {
  install() {
    Vue.prototype.$msg = msg
  }
}

Vue.use(plugin)
