class EventEmitter {
  constructor() {
    this.handle = [];
  }
  //on事件
  on(eventName, callback) {
    this.handle.push({ eventName: eventName, callback: callback });
    //console.log(this.handle);
  }
  //emit事件
  emit(eventName, message) {
    message = [...arguments].slice(1).join(",");
    this.handle.forEach(function (data) {
      if (data.eventName == eventName) {
        data.callback(message);
      }
    })
  }
}
//在控制台上打印输出测试结果
// const event = new EventEmitter();
// event.on('someEvent', (...args) => {
//   console.log('some_event triggered', ...args);
// })
// console.log(event, 9999)
// console.log(event.on, 8888)
// console.log(event.emit, 7777)
// console.log(event.on, 666)
// console.log(event.emit('someEvent', 'liufengxiang', '123'), 5555)

export default EventEmitter
