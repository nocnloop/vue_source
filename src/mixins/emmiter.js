// 向上传递
function dispatch(eventName, data) {
  let parent = this.$parent
  while (parent) {
    parent.$emit(eventName, data)
    parent = parent.$parent
  }
}

// 向下广播
function boardcast(eventName, data) {
  this.$children.forEach(child => {
    child.$emit(eventName, data)
    if (child.$children.length) {
      boardcast.call(child, eventName, data)
    }
  })
}

export default {
  methods: {
    $dispatch: dispatch,
    $boardcast: function(eventName, data) {
      boardcast.call(this, eventName, data)
    }
  }
}
