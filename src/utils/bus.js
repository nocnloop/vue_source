class Bus {
  constructor() {
    this.callBack = {}
  }
  $on(evnetName, fn) {
    this.callBack[evnetName] = this.callBack[evnetName] || []
    this.callBack[evnetName].push(fn)
    console.log(this.callBack)
  }

  $emit(eventName, args) {
    if (this.callBack[eventName]) {
      this.callBack[eventName].forEach(cb => cb(args))
    }
  }
}
export default Bus
