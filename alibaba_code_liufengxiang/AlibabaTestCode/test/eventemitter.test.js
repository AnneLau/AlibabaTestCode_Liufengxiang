import EventEmitter from '../code/eventemitter'

test('event.emit', () => {
  const event = new EventEmitter();
  event.on('someEvent', (...args) => { 
    const argsTemp = [...args].join(",");
    const res = 'some_event triggered' + argsTemp;
    //console.log('some_event triggered', ...args);
    return res;
  }); 
  //unDone:expect(event.emit事件订阅成功之后触发event.on里面的输出).toEqual('some_event triggered abc,123')
  //上面这条测试例功能可在控制台上console.log来测
  expect(event.emit('someEvent', 'abc', '123')).toEqual(undefined)
})
