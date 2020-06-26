import Vue from 'vue'

import AlertMsg from '@/widgets/AlertMsg'

// new Vue
// export default function msg (props) {
//   const vm = new Vue({
//     render (h) {
//       return h(AlertMsg, { props })
//     }
//   }).$mount()

//   document.body.append(vm.$el)

//   console.log(vm)

//   const comp = vm.$children[0]

//   comp.remove = () => {
//     document.body.removeChild(vm.$el)
//     vm.$destroy()
//   }
// }

// Vue.extends
export default function msg(props) {
  const Ctor = Vue.extend(AlertMsg)
  const comp = new Ctor({ propsData: props })
  comp.$mount()
  document.body.append(comp.$el)
  comp.remove = () => {
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }
}
